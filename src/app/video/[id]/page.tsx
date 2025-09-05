import Link from 'next/link'

export default function VideoPage({ params }: { params: { id: string } }) {
  // Mock data for now - later this will come from a database
  const video = {
    id: params.id,
    title: "Cyberpunk City - Visual Concept",
    genre: "Sci-Fi",
    type: "Concept Video",
    duration: "3:24",
    description: "A cinematic exploration of a futuristic cyberpunk cityscape, showcasing the visual style and atmosphere for an upcoming sci-fi project.",
    tags: ["Cyberpunk", "Futuristic", "Cinematography", "Visual Effects", "Concept"],
    uploadDate: "2024-08-20",
    views: "2.1K",
    likes: 89,
    collaborationStatus: "Looking for script collaboration",
    equipment: ["RED Camera", "DJI Drone", "After Effects", "Cinema 4D"],
    // You can provide the video URL/embed code here
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder - replace with your video
    thumbnail: null
  }

  const creator = {
    name: "Marcus Rodriguez",
    username: "@marcus_visuals",
    avatar: "MR",
    bio: "Award-winning cinematographer and visual effects artist. Specializing in sci-fi and fantasy content creation.",
    location: "Vancouver, BC",
    verified: true,
    stats: {
      videos: 47,
      collaborations: 15,
      views: "127K",
      subscribers: 3200
    },
    genres: ["Sci-Fi", "Fantasy", "Action", "Thriller"],
    recentWork: [
      { title: "Neon Dreams", type: "Short Film", year: 2024 },
      { title: "Digital Uprising", type: "Music Video", year: 2024 },
      { title: "Future Wars", type: "Concept Trailer", year: 2023 }
    ],
    contact: {
      email: "marcus.rodriguez.visuals@gmail.com",
      website: "www.marcusvisuals.com",
      reel: "vimeo.com/marcusreel"
    },
    pricing: {
      shortForm: {
        duration: "Under 5 minutes",
        price: "$500 - $1,500",
        deliveryTime: "3-5 days",
        includes: ["Script adaptation", "AI-generated visuals", "Basic color grading", "2 revisions"]
      },
      mediumForm: {
        duration: "5-10 minutes", 
        price: "$1,500 - $4,000",
        deliveryTime: "7-10 days",
        includes: ["Script adaptation", "Advanced AI visuals", "Professional color grading", "Sound design", "3 revisions"]
      },
      longForm: {
        duration: "10+ minutes",
        price: "$4,000 - $15,000",
        deliveryTime: "2-4 weeks",
        includes: ["Full production", "Complex AI sequences", "Professional post-production", "Custom music", "Unlimited revisions"]
      }
    },
    aiStack: [
      { 
        name: "Runway ML", 
        category: "Video Generation",
        description: "AI video generation and editing",
        expertise: "Expert"
      },
      { 
        name: "Veo 3", 
        category: "Video Creation",
        description: "Advanced video synthesis",
        expertise: "Advanced"
      },
      { 
        name: "Stable Video Diffusion", 
        category: "Video Effects",
        description: "AI-powered video effects and transitions",
        expertise: "Expert"
      },
      { 
        name: "Leonardo AI", 
        category: "Image Generation",
        description: "Character and environment creation",
        expertise: "Advanced"
      },
      { 
        name: "ElevenLabs", 
        category: "Voice & Audio",
        description: "AI voice synthesis and sound design",
        expertise: "Intermediate"
      },
      { 
        name: "ChatGPT", 
        category: "Script Enhancement",
        description: "Story development and dialogue refinement",
        expertise: "Advanced"
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-gray-500 hover:text-gray-700 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
              <Link href="/" className="text-xl font-bold text-gray-900 hover:text-gray-700">
                CreativeConnect
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Video Player */}
            <div className="bg-black rounded-lg overflow-hidden mb-6">
              <div className="aspect-video">
                <iframe
                  src={video.videoUrl}
                  title={video.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video Info */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">{video.title}</h1>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">{video.genre}</span>
                    <span>{video.type}</span>
                    <span>{video.duration}</span>
                    <span>{video.views} views</span>
                    <span>{video.uploadDate}</span>
                  </div>
                  
                  <div className="flex items-center space-x-6 mb-4">
                    <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      <span>{video.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                      <span>Share</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      <span>Download</span>
                    </button>
                  </div>
                </div>
                
                <div className="flex space-x-2 ml-4">
                  <Link href={`/collaborate/video/${params.id}`}>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                      Collaborate
                    </button>
                  </Link>
                  <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50">
                    Contact
                  </button>
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-700 mb-4">{video.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {video.tags.map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Equipment & Software</h4>
                  <div className="flex flex-wrap gap-2">
                    {video.equipment.map((item) => (
                      <span key={item} className="bg-blue-50 text-blue-800 px-2 py-1 rounded-md text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Comments Section Placeholder */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Comments</h3>
              <div className="text-gray-500 text-center py-8">
                Comments section coming soon...
              </div>
            </div>
          </div>

          {/* Sidebar - Creator Profile */}
          <div className="space-y-6">
            {/* Creator Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                  {creator.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center">
                    <h3 className="text-lg font-semibold text-gray-900">{creator.name}</h3>
                    {creator.verified && (
                      <svg className="w-5 h-5 text-blue-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm">{creator.username}</p>
                  <p className="text-gray-500 text-sm">{creator.location}</p>
                </div>
              </div>
              
              <p className="text-gray-700 text-sm mb-4">{creator.bio}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900">{creator.stats.videos}</div>
                  <div className="text-xs text-gray-500">Videos</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900">{creator.stats.collaborations}</div>
                  <div className="text-xs text-gray-500">Collaborations</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900">{creator.stats.views}</div>
                  <div className="text-xs text-gray-500">Total Views</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900">{creator.stats.subscribers}</div>
                  <div className="text-xs text-gray-500">Subscribers</div>
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 text-sm">
                  Subscribe
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 text-sm">
                  Message
                </button>
              </div>
            </div>

            {/* Creator's Genres */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Specializes In</h4>
              <div className="flex flex-wrap gap-2">
                {creator.genres.map((genre) => (
                  <span key={genre} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            {/* Recent Work */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Recent Work</h4>
              <div className="space-y-3">
                {creator.recentWork.map((work, index) => (
                  <div key={index} className="border-b border-gray-100 pb-2 last:border-b-0">
                    <h5 className="font-medium text-gray-900 text-sm">{work.title}</h5>
                    <p className="text-gray-500 text-xs">{work.type} • {work.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Tiers */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Pricing & Services</h4>
              <div className="space-y-4">
                {/* Short Form */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-medium text-gray-900">{creator.pricing.shortForm.duration}</h5>
                    <span className="text-lg font-bold text-green-600">{creator.pricing.shortForm.price}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">Delivery: {creator.pricing.shortForm.deliveryTime}</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {creator.pricing.shortForm.includes.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-3 h-3 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Medium Form */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-medium text-gray-900">{creator.pricing.mediumForm.duration}</h5>
                    <span className="text-lg font-bold text-green-600">{creator.pricing.mediumForm.price}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">Delivery: {creator.pricing.mediumForm.deliveryTime}</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {creator.pricing.mediumForm.includes.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-3 h-3 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Long Form */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-medium text-gray-900">{creator.pricing.longForm.duration}</h5>
                    <span className="text-lg font-bold text-green-600">{creator.pricing.longForm.price}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">Delivery: {creator.pricing.longForm.deliveryTime}</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {creator.pricing.longForm.includes.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-3 h-3 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <button className="w-full mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 text-sm font-medium">
                Request Custom Quote
              </button>
            </div>

            {/* AI Stack & Tools */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h4 className="font-semibold text-gray-900 mb-4">AI Tools & Stack</h4>
              <div className="space-y-3">
                {creator.aiStack.map((tool, index) => (
                  <div key={index} className="flex items-start justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <div className="flex items-center mb-1">
                        <h5 className="font-medium text-gray-900 text-sm">{tool.name}</h5>
                        <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${
                          tool.expertise === 'Expert' ? 'bg-green-100 text-green-800' :
                          tool.expertise === 'Advanced' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {tool.expertise}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mb-1">{tool.category}</p>
                      <p className="text-xs text-gray-500">{tool.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                <p className="text-xs text-purple-700">
                  <span className="font-medium">Pro Tip:</span> Marcus combines multiple AI tools to create unique, high-quality content faster than traditional methods.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Contact & Links</h4>
              <div className="space-y-2 text-sm">
                <a href={`mailto:${creator.contact.email}`} className="flex items-center text-purple-600 hover:text-purple-800">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </a>
                <a href={`https://${creator.contact.website}`} className="flex items-center text-purple-600 hover:text-purple-800">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                  Website
                </a>
                <a href={`https://${creator.contact.reel}`} className="flex items-center text-purple-600 hover:text-purple-800">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Demo Reel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
