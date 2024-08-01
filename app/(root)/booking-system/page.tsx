import Image from 'next/image'
import React from 'react'
import BookingFormComponent from '../_components/booking-form-component'

const BookingSystem = () => {
    return (
        <div className="pb-10">
            <div className='relative md:h-[10em]'>
                <h1 className='text-[0.7em] sm:text-[1.5em] md:text-[3em] uppercase text-center my-5 text-muted-foreground'>Book <br /> <span className='italic'>Your Appointment</span></h1>
            </div>
            <div>
                <div className="relative aspect-video overflow-hidden md:h-[500px] w-full">
                    <Image
                        src="https://images.pexels.com/photos/3745524/pexels-photo-3745524.jpeg"
                        alt="booking"
                        fill
                        className='object-cover'
                    />
                </div>
                <div className='sm:w-[400px] md:w-[800px] p-2 md:p-4 bg-[#fff] dark:bg-card shadow-md mx-auto mt-10'>
                    <BookingFormComponent />
                </div>
            </div>
        </div>
    )
}

export default BookingSystem
