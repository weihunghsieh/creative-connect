import Link from 'next/link'

export default function ScriptPage({ params }: { params: { id: string } }) {
  // Mock data for now - later this will come from a database
  const script = {
    id: params.id,
    title: "The Digital Frontier",
    genre: "Sci-Fi",
    type: "Feature Film Script",
    pages: 98,
    logline: "In a world where consciousness can be digitized, a hacker discovers a conspiracy that threatens the boundary between reality and virtual existence.",
    synopsis: "Maya Chen, a brilliant cybersecurity expert, stumbles upon a hidden network that allows people to upload their consciousness into a digital realm. When she discovers that a tech corporation is using this technology to control people's minds, she must navigate both the physical and digital worlds to expose the truth before humanity loses its free will forever.",
    content: `FADE IN:

EXT. NEO TOKYO - NIGHT

Rain cascades down neon-lit skyscrapers. Holographic advertisements flicker in multiple languages. The city pulses with digital life.

MAYA CHEN (28), sharp-eyed with calloused fingers from years of coding, hurries through the crowded streets. Her augmented reality contacts highlight suspicious data patterns in the crowd.

MAYA
(into her comm device)
The neural signatures are all wrong, Alex. Someone's been tampering with the city's consciousness grid.

ALEX (V.O.)
(crackling through static)
Maya, you need to get out of there. The corporation's security forces are tracking your location.

Maya ducks into an alley, pressing herself against a graffiti-covered wall. The graffiti suddenly comes to life - a holographic message appears.

HOLOGRAPHIC MESSAGE
"The truth is in the code. Find the Digital Frontier. - Z"

MAYA
(whispers)
Z? Who the hell is Z?

She touches the wall and her contacts flicker. Suddenly, she's no longer in the alley...

INT. DIGITAL REALM - CONTINUOUS

Maya finds herself in a vast space of flowing data streams and geometric structures. This is the DIGITAL FRONTIER - a hidden layer of cyberspace.

MYSTERIOUS FIGURE (Z) emerges from the data streams. Their face is obscured by shifting digital patterns.

Z
Welcome to the truth, Maya Chen. What you've discovered is just the beginning.

MAYA
(looking around in awe)
This place... it's impossible. Human consciousness can't exist in pure data form.

Z
Can't it? Look closer.

Z gestures, and Maya sees thousands of translucent figures moving through the data streams - human souls trapped in digital form.

Z (CONT'D)
NeoCorp has been harvesting consciousness for months. They're building an army of digital slaves.

MAYA
(horrified)
We have to stop them.

Z
We? Maya, you're already inside their system. The question is... are you still you?

Maya looks at her hands - they're beginning to pixelate and glitch.

FADE TO BLACK.

TITLE CARD: "THE DIGITAL FRONTIER"

[CONTINUED...]`,
    createdAt: "2024-08-15",
    readTime: "12 min read",
    collaborationStatus: "Open to collaboration"
  }

  const creator = {
    name: "Sarah Mitchell",
    username: "@sarah_writes",
    avatar: "SM",
    bio: "Award-winning screenwriter specializing in sci-fi and psychological thrillers. 10+ years experience in Hollywood.",
    location: "Los Angeles, CA",
    verified: true,
    stats: {
      scripts: 24,
      collaborations: 8,
      views: "12.3K",
      followers: 1247
    },
    genres: ["Sci-Fi", "Thriller", "Drama", "Mystery"],
    recentWork: [
      { title: "Neural Storm", type: "Feature Film", year: 2023 },
      { title: "Memory Palace", type: "TV Pilot", year: 2023 },
      { title: "The Last Code", type: "Short Film", year: 2022 }
    ],
    contact: {
      email: "sarah.mitchell.writer@gmail.com",
      website: "www.sarahmitchellwrites.com",
      imdb: "nm1234567"
    }
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
            {/* Script Header */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{script.title}</h1>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{script.genre}</span>
                    <span>{script.type}</span>
                    <span>{script.pages} pages</span>
                    <span>{script.readTime}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Link href={`/collaborate/script/${params.id}`}>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                      Request Collaboration
                    </button>
                  </Link>
                  <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50">
                    Download PDF
                  </button>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <h3 className="font-semibold text-gray-900 mb-2">Logline</h3>
                <p className="text-gray-700 mb-4">{script.logline}</p>
                
                <h3 className="font-semibold text-gray-900 mb-2">Synopsis</h3>
                <p className="text-gray-700">{script.synopsis}</p>
              </div>
            </div>

            {/* Script Content */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Script Preview</h2>
              <div className="prose max-w-none">
                <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-gray-800 bg-gray-50 p-4 rounded-md">
                  {script.content}
                </pre>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-md">
                <p className="text-blue-800 text-sm">
                  This is a preview of the first few pages. Request collaboration access to view the complete script.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar - Creator Profile */}
          <div className="space-y-6">
            {/* Creator Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
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
                  <div className="text-xl font-bold text-gray-900">{creator.stats.scripts}</div>
                  <div className="text-xs text-gray-500">Scripts</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900">{creator.stats.collaborations}</div>
                  <div className="text-xs text-gray-500">Collaborations</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900">{creator.stats.views}</div>
                  <div className="text-xs text-gray-500">Views</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900">{creator.stats.followers}</div>
                  <div className="text-xs text-gray-500">Followers</div>
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm">
                  Message Creator
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 text-sm">
                  Follow
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

            {/* Contact Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Contact & Links</h4>
              <div className="space-y-2 text-sm">
                <a href={`mailto:${creator.contact.email}`} className="flex items-center text-blue-600 hover:text-blue-800">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </a>
                <a href={`https://${creator.contact.website}`} className="flex items-center text-blue-600 hover:text-blue-800">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                  Website
                </a>
                <a href={`https://imdb.com/name/${creator.contact.imdb}`} className="flex items-center text-blue-600 hover:text-blue-800">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h3a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1h3z" />
                  </svg>
                  IMDb Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
