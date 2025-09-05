import Link from 'next/link'

export default function Home() {
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
                <Link href="/" className="text-blue-400 font-medium">Explore</Link>
                <Link href="/features" className="text-gray-400 hover:text-white font-medium transition-colors">Features</Link>
                <Link href="/about" className="text-gray-400 hover:text-white font-medium transition-colors">About Wroom</Link>
              </nav>
              <div className="flex items-center space-x-3">
                <button className="p-2 text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM9 7V2l-5 5h5z" />
                  </svg>
                </button>
                <button className="p-2 text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium">Create</button>
                <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Video Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Featured Video */}
            <div className="lg:col-span-2">
              <div className="relative bg-gradient-to-r from-orange-600 to-pink-600 rounded-lg overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">Featured Content</h3>
                  <p className="text-sm opacity-90">Trending Collaboration</p>
                </div>
              </div>
            </div>
            
            {/* Side content */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
                <h4 className="font-bold mb-2">Top Creator</h4>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full"></div>
                  <div>
                    <p className="font-medium">Alex Chen</p>
                    <p className="text-sm opacity-80">AI Filmmaker</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-6 text-white">
                <h4 className="font-bold mb-2">Trending Genre</h4>
                <p className="text-lg">#Sci-Fi</p>
                <p className="text-sm opacity-80">2.4K active projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <input 
                type="text" 
                placeholder="Search" 
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
              />
              <svg className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <select className="px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white">
              <option>Latest Contribution Cases</option>
              <option>Most Popular</option>
              <option>Recently Added</option>
            </select>
          </div>

          {/* Genre Filter Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {['Action', 'Sci-Fi', 'Action', 'Horror', 'Action', 'Horror', 'Action', 'Action'].map((genre, index) => (
              <button 
                key={index}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors border border-gray-700"
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Story Cards */}
            {[
              { title: "Galactic Odyssey: The Awakening", type: "Trailer", genre: "Sci-Fi", bg: "from-orange-600 to-red-600" },
              { title: "Nightmare in the Nebula", type: "Script", genre: "Horror", bg: "from-gray-800 to-black" },
              { title: "Galactic Odyssey: The Awakening", type: "Trailer", genre: "Sci-Fi", bg: "from-orange-600 to-red-600" },
              { title: "Nightmare in the Nebula", type: "Script", genre: "Horror", bg: "from-gray-800 to-black" },
              { title: "Galactic Odyssey: The Awakening", type: "Trailer", genre: "Sci-Fi", bg: "from-orange-600 to-red-600" },
              { title: "Nightmare in the Nebula", type: "Script", genre: "Horror", bg: "from-gray-800 to-black" },
              { title: "Galactic Odyssey: The Awakening", type: "Trailer", genre: "Sci-Fi", bg: "from-orange-600 to-red-600" },
              { title: "Nightmare in the Nebula", type: "Script", genre: "Horror", bg: "from-gray-800 to-black" },
              { title: "Galactic Odyssey: The Awakening", type: "Trailer", genre: "Sci-Fi", bg: "from-orange-600 to-red-600" }
            ].map((item, i) => {
              const linkUrl = item.type === "Script" ? `/script/${i + 1}` : `/video/${i + 1}`;
              return (
                <Link key={i} href={linkUrl} className="block group">
                  <div className="relative overflow-hidden rounded-lg">
                    <div className={`aspect-[3/4] bg-gradient-to-b ${item.bg} flex flex-col justify-between p-4 group-hover:scale-105 transition-transform duration-300`}>
                      {/* Content overlay */}
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          {item.type === "Script" && (
                            <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                              STORY
                            </div>
                          )}
                          {item.genre === "Sci-Fi" && (
                            <div className="bg-white text-black px-3 py-1 rounded font-bold text-lg">
                              SCI-FI
                            </div>
                          )}
                        </div>
                        {item.type !== "Script" && (
                          <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                            </svg>
                          </div>
                        )}
                      </div>
                      
                      {/* Bottom content */}
                      <div className="text-white">
                        <h3 className="font-bold text-sm mb-2">{item.title}</h3>
                        <div className="flex space-x-2">
                          <span className="bg-gray-800 bg-opacity-50 px-2 py-1 rounded text-xs">{item.type}</span>
                          <span className="bg-gray-800 bg-opacity-50 px-2 py-1 rounded text-xs">{item.genre}</span>
                          <span className="bg-gray-800 bg-opacity-50 px-2 py-1 rounded text-xs">AI</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Top Creators Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Top Storytellers */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">TOP 10 Storytellers</h3>
              <div className="flex items-center space-x-3 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                    <img src={`https://i.pravatar.cc/48?img=${i + 1}`} alt="" className="w-full h-full rounded-full object-cover" />
                  </div>
                ))}
                <button className="w-12 h-12 border-2 border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, i) => {
                  const isScript = i === 1 || i === 4;
                  return (
                    <div key={i} className="relative group">
                      <div className={`aspect-[3/4] bg-gradient-to-b ${isScript ? 'from-gray-800 to-black' : 'from-orange-600 to-red-600'} rounded-lg overflow-hidden`}>
                        <div className="h-full flex flex-col justify-between p-3">
                          <div className="flex justify-between items-start">
                            {isScript && (
                              <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                                STORY
                              </div>
                            )}
                            <div className="bg-white text-black px-2 py-1 rounded font-bold text-sm">
                              {isScript ? 'HORROR' : 'SCI-FI'}
                            </div>
                          </div>
                          <div className="text-white">
                            <h4 className="font-bold text-xs mb-1">
                              {isScript ? 'Nightmare in the Nebula' : 'Galactic Odyssey: The Awakening'}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Top AI Video Creators */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">TOP 10 AI Video Creators</h3>
              <div className="flex items-center space-x-3 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                    <img src={`https://i.pravatar.cc/48?img=${i + 6}`} alt="" className="w-full h-full rounded-full object-cover" />
                  </div>
                ))}
                <button className="w-12 h-12 border-2 border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, i) => {
                  const isScript = i === 0 || i === 3;
                  return (
                    <div key={i} className="relative group">
                      <div className={`aspect-[3/4] bg-gradient-to-b ${isScript ? 'from-gray-800 to-black' : 'from-orange-600 to-red-600'} rounded-lg overflow-hidden`}>
                        <div className="h-full flex flex-col justify-between p-3">
                          <div className="flex justify-between items-start">
                            {isScript && (
                              <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                                STORY
                              </div>
                            )}
                            <div className="bg-white text-black px-2 py-1 rounded font-bold text-sm">
                              {isScript ? 'HORROR' : 'SCI-FI'}
                            </div>
                          </div>
                          <div className="text-white">
                            <h4 className="font-bold text-xs mb-1">
                              {isScript ? 'Nightmare in the Nebula' : 'Galactic Odyssey: The Awakening'}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
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
