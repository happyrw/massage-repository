import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <div>
            <Link href="/" className='dark:flex hidden'>
                <Image src="/logo1.png" alt="logo" width={62} height={62} className='object-cover md:w-[85px] md:h-[50px] sm:w-[70px] sm:h-[50px] ' />
            </Link>
            <Link href="/" className='flex dark:hidden'>
                <Image src="/logo11.png" alt="logo" width={62} height={62} className='object-cover md:w-[85px] md:h-[50px] sm:w-[70px] sm:h-[50px] ' />
            </Link>
        </div>
    )
}

export default Logo;