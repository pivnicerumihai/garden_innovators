import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon, MenuIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import styles from '../Header/Header.module.css'
import GallerySlide from '../GallerySlide/GallerySlide'

const images = [{
  url: "/images/fencing/fence-1.png",
  alt:'fence_1'
},{
  url: "/images/fencing/fence-2.png",
    alt:'fence_2'
},{
  url: "/images/fencing/fence-3.png",
  alt:'fence_3'
},{
  url: "/images/fencing/fence-4.png",
  alt:'fence_4'
},];
const images_2 = [{
  url: "/images/decking/decking-1.png",
    alt:'tiles_1'
},{
  url: "/images/decking/decking-2.png",
  alt:'tiles_2'
},{
  url: "/images/decking/decking-3.png",
  alt:'tiles_3'
},{
  url: "/images/decking/decking-4.png",
  alt:'tiles_4'
},];

export default function MobileMenu({ open, setOpen }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 flex z-40 md:hidden"
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transition-transform ease-in-out duration-300"
          enterFrom="transform translate-x-full"
          enterTo="transform translate-x-0"
          leave="transition-transform ease-in-out duration-300"
          leaveFrom="transform translate-x-0"
          leaveTo="transform translate-x-full"
        >
          <div className="relative max-w-xs w-full bg-primary shadow-xl pb-12 flex flex-col overflow-y-auto">
            <div className="px-4 mt-36 pb-2 flex">
              <button
                type="button"
                className="-mr-2 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">Close sidebar</span>
                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
              <ul className='px-2 space-y-10 flex flex-col items-center text-xl text-white'>
                <li className={`${styles['hover-underline-animation']} cursor-pointer`}>
              <Link href="/">
                Home
              </Link>
              </li>
              <li className={`${styles['hover-underline-animation']} cursor-pointer`}>
              <Link href="/contact">
             Contact </Link>
             </li>
             <li className={`${styles['hover-underline-animation']} cursor-pointer`}>
              <Link href="/about">
           About   </Link>
           </li>
           </ul>

           <GallerySlide images={images}/>
            </div>

        </Transition.Child>
      </Dialog>
    </Transition.Root>
  )
}
