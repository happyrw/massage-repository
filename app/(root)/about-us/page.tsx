import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import React from 'react'

const teamMembers = [
    {
        name: "Anna Smith",
        image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
        role: "Lead Massage Therapist",
        about: "With over 15 years of experience, Anna specializes in deep tissue and therapeutic massages.She is known for her intuitive touch and ability to tailor each session to the individual needs of her clients."
    },
    {
        name: "Mark Johnson",
        image: "https://images.pexels.com/photos/5083408/pexels-photo-5083408.jpeg",
        role: "Sauna Specialist",
        about: "Mark has been with us for 8 years and is an expert in sauna therapy.He ensures that each sauna session is customized for optimal relaxation and health benefits."
    },
    {
        name: "Lena Brown",
        image: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg",
        role: "Aromatherapist",
        about: "Lena brings a wealth of knowledge in essential oils and holistic treatments.Her aromatherapy sessions are designed to promote healing and enhance the overall spa experience."
    }
]

const facilities = [
    {
        name: "Massage Rooms:",
        image: "https://images.pexels.com/photos/277572/pexels-photo-277572.jpeg",
        description: "Our five luxurious massage rooms are designed for comfort and tranquility. Each room is equipped with adjustable lighting, soothing music, and high-quality massage tables to ensure a serene environment."
    },

    {
        name: "Sauna:",
        image: "https://images.pexels.com/photos/3188/love-romantic-bath-candlelight.jpg",
        description: "Our modern sauna offers both dry and steam options, accommodating up to 8 guests at a time.The sauna is built with high - quality materials to provide a detoxifying and rejuvenating experience."
    },

    {
        name: "Relaxation Lounge",
        image: "https://images.pexels.com/photos/4577186/pexels-photo-4577186.jpeg",
        description: "Before or after your treatment, unwind in our relaxation lounge.Enjoy complimentary herbal teas, infused water, and light snacks in a calm and comfortable setting."
    },

    {
        name: "Outdoor Garden",
        image: "https://images.pexels.com/photos/59321/pexels-photo-59321.jpeg",
        description: "Our beautifully landscaped garden is the perfect place to relax and reconnect with nature.The garden features a koi pond, comfortable seating areas, and a tranquil atmosphere."
    },

    {
        name: "Private Suites",
        image: "https://images.pexels.com/photos/6438760/pexels-photo-6438760.jpeg",
        description: "For those seeking an exclusive experience, we offer private suites with their own massage room, sauna, and lounge area.These suites are ideal for couples or individuals looking for privacy and personalized service."
    }
]

const AboutUsPage = () => {
    return (
        <main>

            <div className="relative h-20 md:h-40 w-full flex items-center justify-center" style={{ backgroundImage: 'url("team2.jpg")', backgroundSize: "cover", backgroundPosition: "top" }}>
                <div className='absolute top-0 right-0 left-0 bottom-0 bg-white-3/50 dark:bg-black/50' />
                <p className='text-[2em] sm:text-[4em] md:text-[7em] text-muted-foreground opacity-90 uppercase z-5'>about us</p>
            </div>

            <div>
                <h3 className='mt-10 text-xl'>Company Story</h3>
                <p className='mt-2'>Founded in 2010, Tranquil Bliss Spa started with a simple mission: to provide a serene escape from the hustle and bustle of everyday life. Our founders, Jane and John Doe, envisioned a place where clients could experience the ultimate in relaxation and rejuvenation. Over the past decade, we have grown from a small boutique spa to a full-service wellness center, renowned for our personalized treatments and exceptional customer service. Our commitment to excellence and passion for holistic health has made Tranquil Bliss Spa a favorite destination for both locals and visitors.</p>

                <h3 className='mt-10 text-xl'>Team</h3>
                <p className='mt-2'>Our team at Tranquil Bliss Spa consists of highly trained and certified professionals dedicated to your well-being. <br /> Meet some of our exceptional staff:</p>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    {teamMembers.map((member) => (
                        <>
                            <div key={member.role} className='shadow-md md:p-4 transition-all duration-100 ease-in-out hover:bg-white-2 dark:hover:bg-card hover:scale-[1.009]'>
                                <div className="relative aspect-video overflow-hidden md:h-[200px]">
                                    <Image src={member.image} alt={member.name} fill className='object-cover rounded-[20px]' />
                                </div>
                                <div className='space-y-2 mt-5'>
                                    <h4>{member.name}</h4>
                                    <p className='text-muted-foreground'>{member.role}</p>
                                    <p className='text-muted-foreground'>{member.about}</p>
                                </div>
                            </div>
                        </>
                    ))}

                </div>
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <h3 className='mt-10 text-xl'>Facilities</h3>
                <p className='mt-2'>At Tranquil Bliss Spa, we pride ourselves on our state-of-the-art facilities that create the perfect ambiance for relaxation and rejuvenation. <br /> Our amenities include:</p>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    {facilities.map((facility) => (
                        <div key={facility.name} className='shadow-md md:p-4 transition-all duration-100 ease-in-out hover:bg-white-2 dark:hover:bg-card hover:scale-[1.009]'>
                            <div className="relative aspect-video overflow-hidden md:h-[200px]">
                                <Image src={facility.image} alt={facility.name} fill className='object-cover rounded-[20px]' />
                            </div>
                            <div className='space-y-2 mt-5'>
                                <h4>{facility.name}</h4>
                                <p className='text-muted-foreground'>{facility.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    )
}

export default AboutUsPage