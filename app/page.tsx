// app/page.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import TechCarousel from './components/TechCarousel'
import ClientLogos from './components/ClientLogos'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero */}
      <section className="relative bg-gray-950 text-white py-32 px-6 text-center overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-40 h-40 bg-blue-500/10 rounded-full blur-2xl animate-float1 top-10 left-10" />
        <div className="absolute w-32 h-32 bg-pink-500/10 rounded-full blur-2xl animate-float2 bottom-20 right-20" />
        <div className="absolute w-24 h-24 bg-purple-400/10 rotate-45 blur-md animate-float3 top-1/2 left-1/3" />
        <div className="absolute w-16 h-16 bg-white/5 rounded-full blur-sm animate-float1 top-1/3 right-1/4" />
      </div>

      {/* Main Text Content */}
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight relative z-10">
        Modzinc: Web, Apps & Clever Systems
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto relative z-10">
        From Liverpool with Code — We build fast, scalable solutions for web, e-commerce and business automation.
      </p>
    </section>



    <TechCarousel />


      {/* Portfolio */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Work</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Vant Glass', desc: 'Custom skylight calculator and storefront', img: '/portfolio/vant-glass.jpg' },
            { title: 'AA Fencing', desc: 'E-commerce site with Medusa.js and Next.js', img: '/portfolio/aa-fencing.jpg' },  
            { title: 'Delivery Planner', desc: 'Internal tool for route optimization', img: '/portfolio/delivery-planner.jpg' },
          ].map((p) => (
            <div key={p.title} className="border rounded-2xl shadow hover:shadow-xl transition overflow-hidden">
              <Image src={p.img} alt={p.title} width={600} height={400} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="text-gray-600 mt-2">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      <ClientLogos />

      {/* Why Us */}
      <section className="bg-gray-100 py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Why Choose Modzinc?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: 'Tech-Focused', desc: 'We use the latest stacks like Next.js 15, Medusa, Stripe, Coinbase APIs.' },
            { title: 'Real Results', desc: 'We build systems that save time, generate sales, and work at scale.' },
            { title: 'UK-Based, Personal', desc: 'A Liverpool-based dev you can talk to directly and trust with your business.' },
          ].map((f) => (
            <div key={f.title} className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-700">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

     

      {/* CTA */}
      <section className="bg-gray-900 text-white py-20 text-center px-6">

        
        <h2 className="text-3xl font-bold">Ready to Build Something Smart?</h2>
        <p className="mt-4 text-lg text-gray-400">Let’s talk — your next big idea could start today.</p>
        <Link
          href="mailto:barry@modzinc.com"
          className="inline-block mt-6 bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-200"
        >
          Contact Us</Link>
      </section>
    </main>
  )
}
