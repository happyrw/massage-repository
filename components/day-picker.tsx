// "use client"

// import { zodResolver } from "@hookform/resolvers/zod"
// import { CalendarIcon } from "@radix-ui/react-icons"
// import { format } from "date-fns"
// import { useForm } from "react-hook-form"
// import { z } from "zod"

// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { Calendar } from "@/components/ui/calendar"
// import {
//     Form,
//     FormControl,
//     FormDescription,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
// } from "@/components/ui/form"
// import {
//     Popover,
//     PopoverContent,
//     PopoverTrigger,
// } from "@/components/ui/popover"
// import { toast } from "@/components/ui/use-toast"

// const FormSchema = z.object({
//     dob: z.date({
//         required_error: "A date of birth is required.",
//     }),
// })

// export function CalendarForm() {
//     const form = useForm<z.infer<typeof FormSchema>>({
//         resolver: zodResolver(FormSchema),
//     })

//     function onSubmit(data: z.infer<typeof FormSchema>) {
//         console.log(data)
//     }

//     return (
//         <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                
//                 <Button type="submit">Submit</Button>
//             </form>
//         </Form>
//     )
// }
