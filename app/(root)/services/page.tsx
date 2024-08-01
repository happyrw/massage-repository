import { Button } from '@/components/ui/button';
import { massageCategories } from '@/utils/constants'
import Image from 'next/image'
import React from 'react'
import BookingForm from '../_components/booking-fom';
import BookingButton from '../_components/services-we-offer';
import ServicesWeOffer from '../_components/services-we-offer';

const Services = () => {

    return (
        <main className='pb-10'>
            <h1 className='text-sm md:text-3xl uppercase text-muted-foreground'>service we offer</h1>
            <ServicesWeOffer />
        </main>
    )
}

export default Services;