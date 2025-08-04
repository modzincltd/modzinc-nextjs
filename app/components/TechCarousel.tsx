'use client'

import { FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiMedusa, SiGoogleads, SiHtml5, SiCss3, SiSequelize, SiStripe, SiMagento, SiWordpress, SiShopify, SiPayloadcms
    ,SiJavascript, SiTypescript, SiRedux, SiMysql, SiPostgresql, SiDocker, SiKubernetes, SiGraphql, SiApollo, SiVercel, SiNetlify, SiAmazonaws, SiAzure, SiGooglecloud
} from 'react-icons/si'
import { useEffect, useRef } from 'react'

const tech = [
  { name: 'Medusa.js', icon: <SiMedusa size={40} /> },
  { name: 'HTML5', icon: <SiHtml5 size={40} /> },
  { name: 'CSS3', icon: <SiCss3 size={40} /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={40} /> },
  { name: 'Tailwind', icon: <SiTailwindcss size={40} /> },
  { name: 'Google Ads', icon: <SiGoogleads size={40} /> },
  { name: 'SEO', icon: <SiSequelize size={40} /> }, // Swap if you want a better SEO icon
  { name: 'React', icon: <FaReact size={40} /> },
  { name: 'Next.js', icon: <SiNextdotjs size={40} /> },
  { name: 'Stripe', icon: <SiStripe size={40} /> },
{ name: 'MySQL', icon: <SiMysql size={40} /> },
  { name: 'Magento', icon: <SiMagento size={40} /> },
  { name: 'WordPress', icon: <SiWordpress size={40} /> },
  { name: 'Shopify', icon: <SiShopify size={40} /> },
  { name: 'Payload CMS', icon: <SiPayloadcms size={40} /> },
{ name: 'JavaScript', icon: <SiJavascript size={40} /> },
{ name: 'TypeScript', icon: <SiTypescript size={40} /> },
{ name: 'Redux', icon: <SiRedux size={40} /> },
{ name: 'Docker', icon: <SiDocker size={40} /> },

]

export default function TechCarousel() {
  return (
    <div className="overflow-hidden w-full border-y border-gray-200 bg-white py-4">
      <div className="flex w-max animate-scroll-left gap-12 px-6">
        {[...tech, ...tech].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-gray-700 min-w-[100px] transition hover:text-blue-500"
          >
            {item.icon}
            <span className="mt-2 text-sm font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
} 