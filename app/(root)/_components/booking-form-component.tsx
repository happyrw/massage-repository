"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { CalendarIcon, ClockIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { useForm } from "react-hook-form"
import { z } from "zod"

import axios from "axios"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Combobox } from "@/components/combobox"
import { massageCategories } from "@/utils/constants"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { formatDate } from "@/lib/data"
import { useRouter } from "next/navigation"
import { LoaderIcon } from "lucide-react"

const formSchema = z.object({
    phoneNumber: z.string().min(2, { message: "" }),
    email: z.string().min(2, { message: "" }),
    fullName: z.string().min(2, { message: "" }),
    massageOption: z.string().min(2, { message: "" }),
    dob: z.union([z.date(), z.null()]),
    price: z.string().optional(),
    session: z.string().optional(),
})

const BookingFormComponent = () => {

    const [selectedService, setSelectedService] = useState({
        category: "",
        price: "",
        session: "",
    });
    const [loading, setLoading] = useState(false);

    const { toast } = useToast();
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            phoneNumber: "",
            email: "",
            fullName: "",
            massageOption: "",
            dob: null,
            price: "",
            session: "",
        },
    })

    const massageOptions = massageCategories.map((category) => ({
        value: category.name,
        label: category.name,
        price: category.price,
        session: category.duration,
    }))

    const handleMassageOptionChange = (selectedOption: any) => {
        const selectedService = massageCategories.find(service => service.name === selectedOption);
        setSelectedService({
            category: selectedService?.name || "",
            price: selectedService?.price || "",
            session: selectedService?.duration || "",
        });
        form.setValue("massageOption", selectedOption);
    }

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setLoading(true);
        values.session = selectedService.session;
        values.price = selectedService.price;

        console.log(values)
        try {
            // Send order confirmation email
            await axios.post('/api/sendEmail', {
                email: values.email,
                name: values.fullName,
                orderDetails: `
                Service: ${values.massageOption},
                Session: ${values.session},
                Price: ${values.price},
                Date: ${formatDate(values.dob)}
                `,
            });
            setLoading(false)
            toast({
                title: "Check email confirmation",
                description: `${formatDate(values.dob)}. Don't miss`,
            })
            setTimeout(() => {
                router.push("/")
                form.reset()
            }, 5000)
        } catch (error) {
            setLoading(false)
            console.error('Error sending email:', error);
            toast({
                title: "Error",
                description: "There was an error placing your order. Please try again.",
            });
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-5">
                <div className="flex items-center justify-center gap-2">
                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                            <FormItem className="flex-grow">
                                <FormLabel className="text-[10px] font-bold text-muted-foreground">Phone number</FormLabel>
                                <FormControl>
                                    <Input {...field} className="focus:border-2 border-[1px] border-sky-300 focus:border-orange-600" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="flex-grow">
                                <FormLabel className="text-[10px] font-bold text-muted-foreground">Email address</FormLabel>
                                <FormControl>
                                    <Input {...field} className="focus:border-2 border-sky-300 focus:border-orange-600" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-[10px] font-bold text-muted-foreground">Username</FormLabel>
                            <FormControl>
                                <Input  {...field} className="focus:border-2 border-sky-300 focus:border-orange-600" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="massageOption"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-[10px] font-bold text-muted-foreground">Massage category</FormLabel>
                            <FormControl>
                                <Combobox
                                    options={massageOptions}
                                    value={field.value}
                                    onChange={value => handleMassageOptionChange(value)}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="dob"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel className="text-[10px] font-bold text-muted-foreground">Date of birth</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "pl-3 text-right font-normal w-full justify-between focus:border-2 border-sky-300 focus:border-orange-600",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value ? (
                                                format(field.value, "PPP")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0 shadow-lg shadow-sky-300" align="end">
                                    <Calendar
                                        mode="single"
                                        selected={field.value || undefined}
                                        onSelect={field.onChange}
                                        disabled={(date) => {
                                            const today = new Date();
                                            const nextMonth = new Date(today.getFullYear(), today.getMonth(), 1);
                                            return date < today || date < nextMonth;
                                        }}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {selectedService.price && (
                    <div>
                        <p className="font-normal text-[13px] capitalize text-muted-foreground">The selected service will be done</p>
                        <div className="font-normal text-[13px] capitalize text-muted-foreground">for {selectedService.price} in {selectedService.session} long</div>
                    </div>
                )}
                <Button type="submit" className="w-full hover:bg-transparent font-bold text-[#fff] transition-all duration-150 ease-linear dark:bg-black">{loading ? <LoaderIcon className="w-4 h-4 animate-spin" /> : "Accept"}</Button>
            </form>
        </Form>
    )
}

export default BookingFormComponent;