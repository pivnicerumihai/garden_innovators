'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from '../MobileMenu/MobileMenu'
import { MenuIcon } from '@heroicons/react/outline'
import styles from './Header.module.css'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-primary text-white lg:py-4 md:py-2 z-50 fixed" >
      <nav className="container mx-auto flex items-center lg:justify-evenly  md:justify-evenly ">
        <ul className="hidden md:flex space-x-20 text-2xl font-rubik">
          <li className={`${styles['hover-underline-animation']} cursor-pointer`}><Link href="/">Home
          </Link></li>
        
          <li className={`${styles['hover-underline-animation']} cursor-pointer`}><Link href="/contact">Contact
          </Link></li>
          <li className={`${styles['hover-underline-animation']} cursor-pointer`}><Link href="/about">About
          </Link></li>
        </ul>
        <div className="-mr-2 -my-2 md:hidden">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-10 w-8" aria-hidden="true" />
          </button>
        </div>
        <div className='-mb-12'>
          <Image
            src="/images/logo_g.png"
            alt="Logo"
            width={150}
            height={50}
          />
        </div>
       
      </nav>
      <MobileMenu open={open} setOpen={setOpen} />
    </header>
  )
}
