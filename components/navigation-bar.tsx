"use client"

import React, { useEffect, useState } from 'react';
import Logo from './logo';
import { ModeToggle } from './modde-toggle';
import Routers from './routers';
import MobileNavigation from './mobile-navigation';

const NavigationBar = () => {

    return (
        <div className='p-2 fixed left-0 right-0 top-0 z-10 flex w-full items-center justify-between dark:bg-[#000] bg-[#fff]'>
            <Logo />
            <div className='flex items-center gap-2'>
                <div className='hidden sm:flex'>
                    <Routers />
                </div>
                <div className='flex sm:hidden'>
                    <MobileNavigation />
                </div>
                <ModeToggle />
            </div>
        </div>
    );
};

export default NavigationBar;



// scrolled && "bg-white-1 border-b shadow-sm"