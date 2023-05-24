'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from '../MobileMenu/MobileMenu'
import { MenuIcon } from '@heroicons/react/outline'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-primary text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="hidden md:flex space-x-10">
          <Link href="/">Home
          </Link>
          <Link href="/services">Services & Prices
          </Link>
          <Link href="/contact">Contact
          </Link>
          <Link href="/about">About
          </Link>
        </div>
        <div>
          <Image
            src="/logo_g.png"
            alt="Logo"
            width={50}
            height={50}
          />
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <MobileMenu open={open} setOpen={setOpen} />
    </header>
  )
}
