'use client'

import Link from 'next/link'
import { FormEvent } from 'react'

export default function CollaboratePage({ params }: { params: { type: string; id: string } }) {
  // Determine if this is for a script or video
  const isScript = params.type === 'script'
  
  // Mock data based on type
  const content = isScript ? {
    id: params.id,
    title: "The Digital Frontier",
    type: "Feature Film Script",
    genre: "Sci-Fi",
    creator: {
      name: "Sarah Mitchell",
      username: "@sarah_writes",
      avatar: "SM",
      verified: true
    }
  } : {
    id: params.id,
    title: "Cyberpunk City - Visual Concept",
    type: "Concept Video",
    genre: "Sci-Fi",
    creator: {
      name: "Marcus Rodriguez",
      username: "@marcus_visuals",
      avatar: "MR",
      verified: true
    }
  }

  const collaborationTypes = [
    "Adaptation Rights",
    "Co-Writing",
    "Production Partnership",
    "Concept Development",
    "Visual Development",
    "Music/Sound Design",
    "Voice Acting",
    "Distribution",
    "Funding/Investment",
    "Other"
  ]

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
    alert('Collaboration request sent! (This is a demo)')
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
              <button className="text-gray-500 hover:text-gray-700">Sign In</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Join Now</button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span className="mx-2">›</span>
            <Link href={`/${params.type}/${params.id}`} className="hover:text-gray-700">
              {content.title}
            </Link>
            <span className="mx-2">›</span>
            <span className="text-gray-900">Request Collaboration</span>
          </nav>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Request Collaboration</h1>
          <p className="text-gray-600">
            Send a collaboration request to {content.creator.name} for &ldquo;{content.title}&rdquo;
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6">
              {/* Content Overview */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-12 bg-gray-300 rounded flex items-center justify-center">
                    {isScript ? (
                      <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{content.title}</h3>
                    <p className="text-sm text-gray-500">{content.type} • {content.genre}</p>
                  </div>
                </div>
              </div>

              {/* Your Information */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Optional"
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Role *
                    </label>
                    <select
                      id="role"
                      name="role"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select your role</option>
                      <option value="filmmaker">Filmmaker</option>
                      <option value="producer">Producer</option>
                      <option value="director">Director</option>
                      <option value="writer">Writer</option>
                      <option value="actor">Actor</option>
                      <option value="investor">Investor</option>
                      <option value="distributor">Distributor</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Collaboration Details */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Collaboration Details</h3>
                
                <div className="mb-4">
                  <label htmlFor="collaboration-type" className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Collaboration *
                  </label>
                  <select
                    id="collaboration-type"
                    name="collaboration-type"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select collaboration type</option>
                    {collaborationTypes.map((type) => (
                      <option key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (1-2 weeks)</option>
                    <option value="short-term">Short-term (1-3 months)</option>
                    <option value="medium-term">Medium-term (3-6 months)</option>
                    <option value="long-term">Long-term (6+ months)</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select budget range</option>
                    <option value="no-budget">No budget / Passion project</option>
                    <option value="micro">Micro budget ($1K - $10K)</option>
                    <option value="low">Low budget ($10K - $100K)</option>
                    <option value="medium">Medium budget ($100K - $1M)</option>
                    <option value="high">High budget ($1M+)</option>
                    <option value="negotiable">Negotiable</option>
                    <option value="revenue-share">Revenue sharing</option>
                  </select>
                </div>
              </div>

              {/* Introduction Message */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Introduction Message</h3>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Introduce yourself and explain why you're interested in collaborating on this project. Include:&#10;• Your background and experience&#10;• What you bring to the collaboration&#10;• Your vision for the project&#10;• Any questions you have&#10;• Next steps you&rsquo;d like to discuss"
                  ></textarea>
                  <p className="mt-2 text-sm text-gray-500">
                    Be specific and professional. This is your first impression!
                  </p>
                </div>
              </div>

              {/* Portfolio/Work Samples */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Portfolio & References</h3>
                
                <div className="mb-4">
                  <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-2">
                    Portfolio Website/Reel
                  </label>
                  <input
                    type="url"
                    id="portfolio"
                    name="portfolio"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="https://your-portfolio.com"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="social" className="block text-sm font-medium text-gray-700 mb-2">
                    Social/Professional Links
                  </label>
                  <input
                    type="text"
                    id="social"
                    name="social"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="LinkedIn, IMDb, Instagram, etc."
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="references" className="block text-sm font-medium text-gray-700 mb-2">
                    Previous Work Examples
                  </label>
                  <textarea
                    id="references"
                    name="references"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="List any relevant previous projects, collaborations, or work samples that demonstrate your capabilities"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-between pt-6 border-t">
                <Link 
                  href={`/${params.type}/${params.id}`}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ← Back to {isScript ? 'Script' : 'Video'}
                </Link>
                <div className="flex space-x-3">
                  <button
                    type="button"
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                  >
                    Save Draft
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Send Collaboration Request
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Creator Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Sending Request To</h4>
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${isScript ? 'bg-blue-600' : 'bg-purple-600'} rounded-full flex items-center justify-center text-white text-lg font-bold mr-3`}>
                  {content.creator.avatar}
                </div>
                <div>
                  <div className="flex items-center">
                    <h5 className="font-medium text-gray-900">{content.creator.name}</h5>
                    {content.creator.verified && (
                      <svg className="w-4 h-4 text-blue-500 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{content.creator.username}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                {isScript ? 'Screenwriter' : 'Video Creator'} specializing in {content.genre.toLowerCase()} content
              </p>
            </div>

            {/* Tips */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Tips for Success</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Be specific about your vision and goals
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Include relevant work samples
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Be professional and respectful
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Mention what you bring to the table
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Follow up appropriately if needed
                </li>
              </ul>
            </div>

            {/* Response Time */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
              <p className="text-sm text-gray-600">
                Most creators respond within 2-3 business days. You&rsquo;ll be notified by email when they reply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
