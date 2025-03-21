import Link from 'next/link'
import { Button } from './ui/button'
import Nav from './Nav'
import MobileNav from './MobileNav'

export default function Header() {
    return (
        <header className='py-8 xl:py-12 text-white'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link href='/'>
                    <h1 className='text-4xl font-semibold'>
                        Noufal<span className='text-accent'>.T</span>
                    </h1>
                </Link>
                {/* {desktop nav & hire me button} */}
                <div className='hidden xl:flex items-center gap-8  '>
                <Nav/>
                <Link href='/contact'>
                <Button className="rounded-full">Need Help?</Button>
                </Link>
                </div>
                <div className="xl:hidden"><MobileNav/></div>
            </div>
        </header>
    )
}