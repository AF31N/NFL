"use client"


import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import Link from 'next/link';

const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'services',
        path: '/services'
    },
    {
        name: 'resume',
        path: '/resume'
    },
    {
        name: 'my journeys',
        path: '/work'
    },
    {
        name: 'contact',
        path: '/contact'
    },
]

const MobileNav = () => {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(false)
    }
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
                <CiMenuFries className='text-[32px] text-accent' />
            </SheetTrigger>
            <SheetContent className='' >
                <div className='mt-20 mb-20 text-center text-2xl'>
                    <Link onClick={handleClick} href='/'>
                        <h1>Noufal<span className='text-accent'>.T</span></h1>
                    </Link>
                </div>
                < nav className='flex flex-col gap-8 justify-center items-center' >
                    {
                        links.map((link, index) => {
                            return (<Link onClick={handleClick} href={link.path} key={index} className={`${link.path === pathname && 'text-accent border-b-2 border-accent'} capitalize text-xl hover:text-accent-hover transition-all`}>{link.name} </Link>)
                        })
                    }
                </nav >
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
