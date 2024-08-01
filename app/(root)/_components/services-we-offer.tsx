"use client";

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import BookingForm from './booking-fom';
import { massageCategories } from '@/utils/constants';
import { X } from 'lucide-react';

const ServicesWeOffer = () => {

    const [showBookingModel, setShowBookingModel] = useState(false);
    const [values, setValues] = useState({
        category: "", price: "", session: "",
    });


    const services = massageCategories;

    useEffect(() => {
        console.log(values);
    }, [values]);
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                {services.map((service, index) => (
                    <div className='dark:bg-card bg-white-1 relative hover:bg-sky-100 dark:hover:bg-black p-4 shadow-lg' key={index}>
                        <div className='relative aspect-video'>
                            <Image src={service.image} alt={service.name} fill className='object-cover rounded-xl hover:scale-[1.09] transition-all duration-[5s] ease-linear' />
                        </div>
                        <div className='space-y-3 mt-4'>
                            <p className='uppercase underline text-sky-600'>{service.name}</p>
                            <p className='text-muted-foreground'>{service.description}</p>
                            <p className='text-sm text-gray-400'>{service.duration} long</p>
                            <p className='text-sm text-gray-400'>{service.price} USD</p>
                        </div>
                        <Button onClick={() => {
                            setShowBookingModel(true)
                            setValues({
                                category: service.name,
                                price: service.price,
                                session: service.duration,
                            });
                        }} variant="ghost" size="sm" className='absolute bottom-1 right-1 py-2 font-bold text-muted-foreground hover:bg-orange-600 hover:text-white-3'>Book Now</Button>
                    </div>
                ))}
            </div>

            {showBookingModel &&
                <div className='absolute h-screen bg-white-2 dark:bg-black top-0 right-0 left-0 bottom-0 flex items-start md:items-center justify-center overflow-y-auto pt-20 md:pt-32'>
                    <div className='relative w-full sm:w-[400px] md:w-[600px] p-2 md:p-4 border-2 bg-[#fff] dark:bg-card shadow-md '>
                        <p className='text-center text-sm md:text-2xl uppercase text-muted-foreground'>book your massage today</p>
                        <BookingForm
                            category={values.category}
                            price={values.price}
                            session={values.session}
                        />
                        <Button onClick={() => setShowBookingModel(false)} variant="ghost" className='cursor-pointer absolute top-2 right-2'><X className='w-4 h-4' /></Button>
                    </div>
                </div>
            }
        </div>
    )
}

export default ServicesWeOffer;