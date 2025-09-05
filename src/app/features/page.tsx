'use client'

import Link from 'next/link'

export default function WroomFeatures() {
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
                <Link href="/features" className="text-blue-400 font-medium border-b-2 border-blue-400 pb-1">Features</Link>
                <Link href="/about" className="text-gray-400 hover:text-white font-medium transition-colors">About</Link>
              </nav>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">Create</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Wroom Features</h1>
          <p className="text-xl text-gray-300 mb-12">
            Unleashing Innovation for Your IPs
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

      {/* Hero Feature - LoRA Model Training */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-4xl font-bold mb-4 text-white">
                  NEW FEATURES<br />
                  FOR TRAINING<br />
                  LORA MODEL
                </h2>
                <h3 className="text-3xl font-bold mb-6 text-blue-300">
                  CREATE YOUR<br />
                  OWN<br />
                  CHARACTERS
                </h3>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                  </svg>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="w-full h-64 bg-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/api/placeholder/400/256" 
                    alt="Character creation preview" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Feature 1 - Publish Stories Globally */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                Core Feature
              </div>
              <h3 className="text-3xl font-bold mb-6">Publish Stories Globally</h3>
              <p className="text-gray-300 leading-relaxed">
                Unlock the full potential of your storytelling with Wroom&rsquo;s advanced AI translation capabilities. Effortlessly convert your narratives into a multitude of languages, ensuring that your unique voice reaches audiences far and wide. Whether you&rsquo;re building a brand or an established storyteller, Wroom empowers you to share your creativity on a global scale. Connect with diverse cultures and let your stories transcend borders, captivating readers and viewers who share the beauty of storytelling and share your diverse narratives across the globe!
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-900 to-green-900 rounded-lg p-8 text-center relative overflow-hidden">
              <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                GLOBALLY
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-4"></div>
                <div className="flex justify-center space-x-2">
                  <div className="w-8 h-8 bg-blue-400 rounded"></div>
                  <div className="w-8 h-8 bg-green-400 rounded"></div>
                  <div className="w-8 h-8 bg-purple-400 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 - AI Collaboration Tools */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-green-900 to-blue-900 rounded-lg p-8 text-center relative overflow-hidden">
                <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  GLOBALLY
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-4"></div>
                  <div className="flex justify-center space-x-2">
                    <div className="w-8 h-8 bg-green-400 rounded"></div>
                    <div className="w-8 h-8 bg-blue-400 rounded"></div>
                    <div className="w-8 h-8 bg-purple-400 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                Core Feature
              </div>
              <h3 className="text-3xl font-bold mb-6">Publish Stories Globally</h3>
              <p className="text-gray-300 leading-relaxed">
                Unlock the full potential of your storytelling with Wroom&rsquo;s advanced AI translation capabilities. Effortlessly convert your narratives into a multitude of languages, ensuring that your unique voice reaches audiences far and wide. Whether you&rsquo;re building a brand or an established storyteller, Wroom empowers you to share your creativity on a global scale. Connect with diverse cultures and let your stories transcend borders, captivating readers and viewers who share the beauty of storytelling and share your diverse narratives across the globe!
              </p>
            </div>
          </div>

          {/* Feature 3 - AI-Powered Content Creation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                Core Feature
              </div>
              <h3 className="text-3xl font-bold mb-6">Publish Stories Globally</h3>
              <p className="text-gray-300 leading-relaxed">
                Unlock the full potential of your storytelling with Wroom&rsquo;s advanced AI translation capabilities. Effortlessly convert your narratives into a multitude of languages, ensuring that your unique voice reaches audiences far and wide. Whether you&rsquo;re building a brand or an established storyteller, Wroom empowers you to share your creativity on a global scale. Connect with diverse cultures and let your stories transcend borders, captivating readers and viewers who share the beauty of storytelling and share your diverse narratives across the globe!
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-lg p-8 text-center relative overflow-hidden">
              <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                GLOBALLY
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-4"></div>
                <div className="flex justify-center space-x-2">
                  <div className="w-8 h-8 bg-purple-400 rounded"></div>
                  <div className="w-8 h-8 bg-pink-400 rounded"></div>
                  <div className="w-8 h-8 bg-blue-400 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Coming Soon</h2>
          
          {/* Down Arrow */}
          <div className="flex justify-center mb-16">
            <div className="w-12 h-12 border-2 border-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

          {/* Coming Soon Feature */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                Coming Soon
              </div>
              <h3 className="text-3xl font-bold mb-6">Publish Stories Globally</h3>
              <p className="text-gray-300 leading-relaxed">
                Unlock the full potential of your storytelling with Wroom&rsquo;s advanced AI translation capabilities. Effortlessly convert your narratives into a multitude of languages, ensuring that your unique voice reaches audiences far and wide. Whether you&rsquo;re building a brand or an established storyteller, Wroom empowers you to share your creativity on a global scale. Connect with diverse cultures and let your stories transcend borders, captivating readers and viewers who share the beauty of storytelling and share your diverse narratives across the globe!
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-900 to-red-900 rounded-lg p-8 text-center relative overflow-hidden">
              <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                GLOBALLY
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-4"></div>
                <div className="flex justify-center space-x-2">
                  <div className="w-8 h-8 bg-orange-400 rounded"></div>
                  <div className="w-8 h-8 bg-red-400 rounded"></div>
                  <div className="w-8 h-8 bg-yellow-400 rounded"></div>
                </div>
              </div>
            </div>
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
