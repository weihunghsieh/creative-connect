'use client'

import Link from 'next/link'

export default function AboutWroom() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8">
                  <svg viewBox="0 0 180.37 56.17" className="w-full h-full">
                    <g>
                      <path className="fill-white" d="M63.99,43.8l-6.07-20.09h3.9l4.08,14.75,4.29-14.75h3.83l4.29,14.74,4.06-14.74h3.8l-6.06,20.09h-3.85l-4.21-14.53-4.26,14.53h-3.82Z"/>
                      <path className="fill-white" d="M90.31,43.8v-20.09h7.79c1.43,0,2.66.24,3.72.72,1.05.48,1.87,1.18,2.44,2.07.57.9.86,1.97.86,3.22,0,1-.21,1.87-.62,2.63-.41.76-.98,1.39-1.7,1.88-.72.49-1.56.84-2.5,1.04l5.84,8.53h-4.49l-5.18-7.87h-2.41v7.87h-3.75ZM94.06,32.87h3.5c1.19,0,2.11-.25,2.78-.75s1-1.23,1-2.21-.3-1.76-.91-2.29c-.61-.53-1.51-.8-2.69-.8h-3.69v6.04Z"/>
                      <path className="fill-white" d="M119.37,44.23c-1.52,0-2.93-.27-4.22-.8-1.29-.53-2.42-1.27-3.37-2.22-.96-.95-1.7-2.06-2.23-3.33-.53-1.27-.8-2.65-.8-4.13s.27-2.88.8-4.15c.53-1.27,1.27-2.38,2.23-3.33.96-.95,2.08-1.68,3.37-2.21,1.29-.53,2.7-.79,4.22-.79s2.93.27,4.22.8c1.29.54,2.42,1.28,3.37,2.24s1.7,2.07,2.24,3.34c.54,1.27.8,2.63.8,4.1s-.27,2.86-.8,4.13c-.54,1.27-1.28,2.38-2.24,3.33-.96.95-2.08,1.69-3.37,2.22-1.29.53-2.7.8-4.22.8ZM119.37,40.71c.96,0,1.84-.16,2.66-.5.81-.33,1.52-.8,2.13-1.41s1.08-1.34,1.42-2.2c.34-.86.51-1.81.51-2.86,0-1.41-.29-2.63-.88-3.67-.59-1.04-1.39-1.85-2.4-2.43-1.01-.57-2.16-.86-3.43-.86-.95,0-1.83.16-2.64.5-.81.33-1.52.8-2.13,1.41-.61.61-1.08,1.34-1.42,2.2-.34.86-.51,1.81-.51,2.86,0,1.41.29,2.63.88,3.67.59,1.04,1.39,1.85,2.4,2.43,1.01.57,2.15.86,3.42.86Z"/>
                      <path className="fill-white" d="M144.23,44.23c-1.52,0-2.93-.27-4.22-.8-1.29-.53-2.42-1.27-3.37-2.22-.96-.95-1.7-2.06-2.23-3.33-.53-1.27-.8-2.65-.8-4.13s.27-2.88.8-4.15c.53-1.27,1.27-2.38,2.23-3.33.96-.95,2.08-1.68,3.37-2.21,1.29-.53,2.7-.79,4.22-.79s2.93.27,4.22.8c1.29.54,2.42,1.28,3.37,2.24s1.7,2.07,2.24,3.34c.54,1.27.8,2.63.8,4.1s-.27,2.86-.8,4.13c-.54,1.27-1.28,2.38-2.24,3.33-.96.95-2.08,1.69-3.37,2.22-1.29.53-2.7.8-4.22.8ZM144.23,40.71c.96,0,1.84-.16,2.66-.5.81-.33,1.52-.8,2.13-1.41.61-.61,1.08-1.34,1.42-2.2.34-.86.51-1.81.51-2.86,0-1.41-.29-2.63-.88-3.67-.59-1.04-1.39-1.85-2.4-2.43-1.01-.57-2.16-.86-3.43-.86-.95,0-1.83.16-2.64.5-.81.33-1.52.8-2.13,1.41-.61.61-1.08,1.34-1.42,2.2-.34.86-.51,1.81-.51,2.86,0,1.41.29,2.63.88,3.67.59,1.04,1.39,1.85,2.4,2.43,1.01.57,2.15.86,3.42.86Z"/>
                      <path className="fill-white" d="M158.97,43.8v-20.09h3.62l8.01,13.12h-1.46s7.66-13.12,7.66-13.12h3.57v20.09h-3.65l.06-15.21.69.24-6.47,10.82h-2.64l-6.63-10.82.62-.24.06,15.21h-3.43Z"/>
                    </g>
                  </svg>
                </div>
                <span className="text-xl font-bold text-white hover:text-gray-300">Wroom</span>
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <nav className="flex items-center space-x-8">
                <Link href="/" className="text-gray-400 hover:text-white font-medium transition-colors">Home</Link>
                <Link href="/explore" className="text-gray-400 hover:text-white font-medium transition-colors">Explore</Link>
                <Link href="/features" className="text-gray-400 hover:text-white font-medium transition-colors">Features</Link>
                <Link href="/about" className="text-blue-400 font-medium border-b-2 border-blue-400 pb-1">About</Link>
              </nav>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">Create</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-32 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Wroom</h1>
          <p className="text-xl text-gray-300 mb-12">
            Empowering creators to transform stories into<br />
            global IPs with AI-driven tools.
          </p>
          
          {/* Down Arrow */}
          <div className="flex justify-center">
            <div className="w-12 h-12 border-2 border-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-300 leading-relaxed mb-16">
            We are a global co-creation platform that helps creators turn<br />
            stories into internationally scalable IPs — through smart AI tools,<br />
            creative matchmaking, and an end-to-end content pipeline.
          </p>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-gradient-to-b from-black to-blue-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Team</h2>
          
          <div className="flex justify-center space-x-8 overflow-x-auto">
            {[
              { name: "Alex Chen", title: "CEO & Founder" },
              { name: "Sarah Kim", title: "CTO" },
              { name: "Marcus Johnson", title: "Head of AI" },
              { name: "Elena Rodriguez", title: "Creative Director" },
              { name: "David Park", title: "VP Product" },
              { name: "Rachel Wong", title: "Head of Community" },
              { name: "James Mitchell", title: "Lead Engineer" }
            ].map((member, index) => (
              <div key={index} className="flex-shrink-0 text-center">
                <div className="w-24 h-24 bg-gray-600 rounded-full mx-auto mb-4"></div>
                <p className="text-blue-400 font-medium">{member.name}</p>
                <p className="text-gray-400 text-sm">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-2">
              Build your vision, one shot at a time. Stay tuned for<br />
              what&rsquo;s next.
            </p>
            <p className="text-gray-300 mb-8">
              Be the first to know. Sign up for updates.
            </p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Company (optional)"
                className="w-full bg-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full bg-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-md font-medium hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Wroom AI. All Rights Reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
