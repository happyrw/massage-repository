"use client"

import { testimoniesObject } from '@/utils/constants';
import React from 'react'

const testimonies = testimoniesObject;

const Testimonials = () => {
    return (
        <section className="testimonials-section p-6">
            <h2 className="text-center text-3xl font-bold mb-6">Customer Testimonials</h2>
            <div className="testimonials-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                {testimonies.slice(0, 4).map((testimonial, index) => (
                    <div key={index} className="testimonials bg-white p-4 rounded-lg shadow-md text-center bg-card">
                        <img src={testimonial.image} alt={`${testimonial.name} photo`} className="mx-auto mb-4 w-24 h-24 rounded-full object-cover" />
                        <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                        <div className="stars text-yellow-500 mb-2">{testimonial.rating}</div>
                        <p className="italic text-gray-600">{testimonial.content}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
// Explanation
