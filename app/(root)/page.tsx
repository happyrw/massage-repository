import { BookMarked, MoveLeftIcon, MoveRightIcon } from "lucide-react";
import "./styles/home.css"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Testimonials from "./_components/testimonials";
import { massagesObject, specialOffersObject } from "@/utils/constants";
import Link from "next/link";

const HomePage = () => {

  const massages = massagesObject;

  const specialOffers = specialOffersObject;

  return (
    <div className="pb-5">

      <div className='relative dark:bg-dark-2 bg-white-2 rounded-sm h-[10em] sm:h-[20em] mt-5 flex items-center justify-center'>
        <div className='absolute inset-0 bg-cover bg-center opacity-20 dark:opacity-20' style={{ backgroundImage: 'url("https://images.pexels.com/photos/5659020/pexels-photo-5659020.jpeg")' }}></div>
        <div>
          <p className='relative text-white-3 opacity-90 text-sm sm:text-xl md:text-4xl uppercase paragraph'>we touch where you want to</p>
          <Link href="/booking-system" className="flex items-center gap-2 -mb-20 mt-2 w-fit mx-auto bg-white-3 dark:bg-[#000] opacity-90 px-4 py-2 rounded-md cursor-pointer hover:bg-orange-800 hover:text-white-3 text-sm md:text-xl"><BookMarked className="w-3 md:w-5 h-3 md:h-5" /> Book now</Link>
        </div>
      </div>

      <h1 className="md:mt-10 mt-5 md:-mb-4 -mb-8 font-bold text-xl text-muted-foreground">OUR SERVICE</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 mt-10">
        {massages.map((massage) => (
          <div key={massage.name} className="p-5 text-white-3 dark:text-white-2 space-y-3">
            <img className="w-full h-56 object-cover rounded-2xl" src={massage.image} alt={massage.name} />
            <h3 className="text-[14px]  uppercase text-black dark:text-white-3">{massage.name}</h3>
            <p className="text-[12px] text-muted-foreground">{massage.description}</p>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center">
        <Link href="/services" className="py-2 font-bold flex items-center hover:bg-black hover:text-white-3 px-4 rounded-md">Explore more <MoveRightIcon className="w-5 h-5 ml-2" /></Link>
      </div>

      <div className="mt-10 px-5">
        <h1 className="mb-3 text-xl">special offers</h1>
        <div className="flex flex-col gap-9">
          {specialOffers.map((specialOffer) => (
            <>
              <div key={specialOffer.image} className="flex items-start gap-5">
                <img className="md:w-[400px] sm:w-[300px] w-[100px] md:h-[300px] h-[130px] sm:h-[200px] object-cover rounded-xl" src={specialOffer.image} alt="special offer" />
                <p className="text-[10px] md:text-[22px] text-muted-foreground">{specialOffer.description}</p>
              </div>
              <Separator />
            </>
          ))}
        </div>
      </div>

      <Testimonials />

      <div className="text-muted-foreground">
        <h2 className="mb-5 text-2xl font-normal text-center">Contact Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="space-y-4">
            <div className="flex flex-col items-center md:items-center md:flex-row gap-5">
              <p className="font-bold">Phone Number:</p>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </div>
            <div className="flex flex-col items-center md:items-center md:flex-row gap-5">
              <p className="font-bold">Email Address:</p>
              <a href="mailto:info@example.com">info@example.com</a>
            </div>
            <div className="flex flex-col items-center md:items-center md:flex-row gap-5">
              <p className="font-bold">Physical Address:</p>
              123 Wellness Street, Relaxation City, RC 12345
            </div>
            <div className="flex flex-col items-center md:items-center md:flex-row gap-5">
              <p className="font-bold">Follow Us:</p>
              <div className="flex gap-5">
                <a href="https://www.facebook.com" target="_blank" className="w-[30px] cursor-pointer">
                  <img src="https://img.icons8.com/?size=100&id=msQ6HdxpqUmi&format=png&color=000000" alt="Facebook" />
                </a>
                <a href="https://www.instagram.com" target="_blank" className="w-[30px] cursor-pointer">
                  <img src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" alt="Instagram" />
                </a>
                <a href="https://www.twitter.com" target="_blank" className="w-[30px] cursor-pointer">
                  <img src="https://img.icons8.com/?size=100&id=13963&format=png&color=000000" alt="Twitter" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" className="w-[30px] cursor-pointer">
                  <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h2>Subscribe to Our Newsletter</h2>
            <p>Get updates and promotions directly in your inbox.</p>
            <form className="w-full flex items-center justify-between shadow-sm shadow-black dark:shadow-white-3 mt-3">
              <input className="w-full p-2 outline-none bg-[#fff] dark:bg-black text-white-2 " type="email" placeholder="Enter your email" required />
              <Button className="text-white-3 bg-sky-400 dark:bg-black dark:text-white rounded-none" type="submit">Sign Up</Button>
            </form>
          </div>

        </div>
      </div>



    </div>
  )
}

export default HomePage;