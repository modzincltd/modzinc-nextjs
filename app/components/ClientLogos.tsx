'use client'

import { link } from 'fs'
import Image from 'next/image'
import Link from 'next/link'

const partners = [
  { name: 'Client 1', src: '/clients/aa-fencing.png', link: 'https://www.aafencing.co.uk/' },
  { name: 'Client 2', src: '/clients/vant-glass.webp',  link: 'https://www.vant.glass/gb/' },
  { name: 'Client 3', src: '/clients/caz-logo.webp', link: 'https://www.cazskitchen.co.uk/' },
  { name: 'Client 4', src: '/clients/jprice-group.webp', link : 'https://www.jprice-group.co.uk/' },
  { name: 'Client 5', src: '/clients/blinds-by-post.webp', link: 'https://www.blindsbypost.co.uk/' },
]

export default function PartnersCarousel() {
  return (
    <div className="overflow-hidden w-full border-y border-gray-200 bg-white py-4">
      <h2 className='text-center text-2xl py-8'>Companies we have worked with</h2>
      <div className="flex w-max gap-12 px-6 animate-scroll">
        {[...partners, ...partners].map((partner, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-gray-700 h-[100px] transition hover:opacity-80 hover:scale-105 duration-300 ease-in-out"
          >
            <Link href={partner.link} target="_blank" rel="noopener noreferrer">
            <Image
              src={partner.src}
              alt={partner.name}
              width={200}
              height={60}
              className="h-[60px] w-auto filter grayscale hover:grayscale-0 transition duration-300 ease-in-out px-8 cursor-pointer"
            />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
