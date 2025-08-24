'use client'

import NavBar from "../components/NavBar"

export default function SoftwarePage() {
  return (
    <main className="bg-gray-50 text-gray-900">
        <NavBar />
      {/* Hero */}
      <section className="bg-slate-950 text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Custom Software That Works as Hard as You Do
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl">
          We design and build Next.js & React applications that integrate your systems, streamline your workflow, and give your business the edge.
        </p>
      </section>

      {/* Section 1 */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Tailored to Your Business</h2>
          <p className="mb-4">
            Every business is unique — your software should be too. At Modzinc, we build
            applications that fit your exact needs, rather than forcing you to adapt to
            off-the-shelf solutions.
          </p>
          <p>
            Using modern frameworks like <strong>Next.js</strong> and <strong>React</strong>,
            we create scalable, high-performance systems that help you work smarter, not harder.
          </p>
        </div>
        <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
          <span className="text-gray-500">[ Image Placeholder ]</span>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-16 px-6 bg-white max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
          <span className="text-gray-500">[ Image Placeholder ]</span>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-4">Seamless Integrations</h2>
          <p className="mb-4">
            From payment gateways and CRMs to inventory management and logistics platforms, we
            connect the tools you already use into one smooth, efficient system.
          </p>
          <p>
            By integrating your software, we reduce manual work, eliminate data silos, and keep
            everything running in sync.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Automation That Saves Time</h2>
          <p className="mb-4">
            Automating repetitive tasks means you and your team can focus on the work that matters
            most. Whether it’s generating reports, processing orders, or updating customer records,
            we make it happen automatically.
          </p>
          <p>
            Our systems are built to grow with your business, so you can scale without adding
            unnecessary overhead.
          </p>
        </div>
        <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
          <span className="text-gray-500">[ Image Placeholder ]</span>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Build Something Brilliant</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Whether you need a custom web app, a full business system, or a set of integrations to
          make your tools play nicely together — we’ve got you covered.
        </p>
        <a
          href="/contact"
          className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold shadow hover:shadow-lg transition"
        >
          Get in Touch
        </a>
      </section>
    </main>
  )
}
