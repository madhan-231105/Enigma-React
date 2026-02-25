const filmPosters = [
  { src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop', title: 'கதை 01' },
  { src: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=600&fit=crop', title: 'கதை 02' },
  { src: 'https://images.unsplash.com/photo-1574267432644-f74f3ceb56e7?w=400&h=600&fit=crop', title: 'கதை 03' },
  { src: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop', title: 'கதை 04' },
  { src: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop', title: 'கதை 05' },
  { src: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop', title: 'கதை 06' },
  { src: 'https://images.unsplash.com/photo-1512070679279-8988d32161be?w=400&h=600&fit=crop', title: 'கதை 07' },
]

const features = [
  { num: '01', icon: '🎬', title: 'Grand Screening Open', desc: 'The festival begins with the live screening of the Top 7 shortlisted short films on the main stage' },
  { num: '02', icon: '🏆', title: 'Official Top 7 Selection', desc: 'Seven outstanding short films carefully selected by the jury for their storytelling and cinematic quality' },
  { num: '03', icon: '🎤', title: 'Director Introductions', desc: 'Each filmmaker introduces their short film, sharing insights before the screening begins' },
  { num: '04', icon: '👥', title: 'Jury & Audience Viewing', desc: 'Experience the films together with jury members and a live, engaged audience' },
  { num: '05', icon: '🎭', title: 'Cinematic Storytelling', desc: 'A showcase of emotion, craft, and authentic Kollywood-inspired narratives in short-film format' },
  { num: '06', icon: '⭐', title: 'Final Spotlight Screening', desc: 'The most anticipated screening moment before awards and recognitions are announced' },
]

const seats = [false, false, false, true, true, true, false, false, false]

export default function Streaming() {
  const allPosters = [...filmPosters, ...filmPosters]

  return (
    <section
      id="streaming"
      className="streaming-grid-bg relative overflow-hidden"
      style={{
        padding: '120px 20px',
        background: 'linear-gradient(180deg, #0a0014, #1a0020)',
      }}
    >
      <style>{`
        @keyframes gridMove { 0% { transform: translate(0, 0); } 100% { transform: translate(40px, 40px); } }
        @keyframes filmScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes reelSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes neonFlicker {
          0%, 100% { text-shadow: 0 0 10px rgba(212,175,55,0.5), 0 0 20px rgba(212,175,55,0.3); }
          50% { text-shadow: 0 0 20px rgba(212,175,55,0.8), 0 0 40px rgba(212,175,55,0.6), 0 0 60px rgba(212,175,55,0.4); }
        }
        @keyframes seatFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        @keyframes iconFloat { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-10px) rotate(5deg); } }
        @keyframes clapperSlap {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(0); }
          60% { transform: translateY(-5px); }
          100% { transform: translateY(0); }
        }
        @keyframes spotlightSweep {
          0%, 100% { transform: translateX(0) rotate(-5deg); opacity: 0.3; }
          50% { transform: translateX(100px) rotate(5deg); opacity: 0.6; }
        }
      `}</style>

      {/* Spotlight effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute" style={{ top: -100, left: '10%', width: 300, height: 500, background: 'radial-gradient(ellipse at center, rgba(255,255,100,0.15) 0%, rgba(255,255,100,0.05) 40%, transparent 70%)', filter: 'blur(20px)', animation: 'spotlightSweep 8s ease-in-out infinite' }} />
        <div className="absolute" style={{ top: -100, right: '10%', width: 300, height: 500, background: 'radial-gradient(ellipse at center, rgba(255,255,100,0.15) 0%, rgba(255,255,100,0.05) 40%, transparent 70%)', filter: 'blur(20px)', animation: 'spotlightSweep 8s ease-in-out infinite', animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Clapperboard Header */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="h-10 relative rounded-t-lg overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1a1a, #2a2a2a)', border: '3px solid #d4af37', borderBottom: 'none' }}>
            <div className="w-full h-full clapper-stripes" style={{ animation: 'clapperSlap 0.5s ease-in-out' }} />
          </div>
          <div className="rounded-b-xl px-8 py-7" style={{ background: 'linear-gradient(135deg, rgba(26,26,26,0.95), rgba(42,42,42,0.95))', border: '3px solid #d4af37', borderTop: 'none', boxShadow: '0 10px 40px rgba(220,20,20,0.3)', backdropFilter: 'blur(10px)' }}>
            <h2 className="text-center mb-2.5 m-0" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '2.5rem', color: '#d4af37', letterSpacing: 3, textShadow: '0 0 20px rgba(212,175,55,0.6)' }}>
              ஒரு Screen. 7 கதை.
            </h2>
            <h3 className="text-center mb-5 m-0" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.8rem', color: '#f1d77a', letterSpacing: 4 }}>
              ONE SCREEN. SEVEN STORIES.
            </h3>
            <div className="flex justify-around flex-wrap gap-4 text-sm text-center" style={{ color: '#f5e9ff' }}>
              {['🎬 ENIGMA TAKE: III', '📍CIT AUDITORIUM', '🎭 LIVE EVENT'].map(detail => (
                <span key={detail} className="px-4 py-2 rounded-full" style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)' }}>{detail}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Streaming text */}
        <p className="text-center mt-12 max-w-4xl mx-auto relative z-10" style={{ fontSize: '1.15rem', lineHeight: 2, color: '#f0e6f5', fontWeight: 300 }}>
          <span className="block" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '2rem', color: '#d4af37', letterSpacing: 4, animation: 'neonFlicker 3s ease-in-out infinite' }}>
            "LIGHTS, CAMERA, ACTION!"
          </span>
          The top <strong>7 exceptional short films</strong> selected by our esteemed jury will be{' '}
          <span style={{ color: '#d4af37', fontWeight: 600, textShadow: '0 0 20px rgba(212,175,55,0.6)' }}>screened live on the silver screen</span>{' '}
          during the ENIGMA festival. Experience the magic of independent cinema on one stage, seven compelling stories!
        </p>

        {/* Film reel decoration */}
        <div className="relative flex justify-between items-center z-10 my-10" style={{ height: 80 }}>
          {[false, true].map((reverse, i) => (
            <div key={i} className="relative rounded-full" style={{ width: 60, height: 60, border: '4px solid #d4af37', animation: `reelSpin 4s linear infinite`, animationDirection: reverse ? 'reverse' : 'normal' }}>
              <div className="absolute rounded-full" style={{ width: 20, height: 20, background: '#d4af37', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            </div>
          ))}
        </div>

        {/* Cinema Features Grid */}
        <div className="grid gap-7 mt-12" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', maxWidth: 1200, margin: '0 auto', padding: 20 }}>
          {features.map((f, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-8 cursor-pointer transition-all duration-500 group overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(125,76,255,0.15), rgba(212,175,55,0.08))',
                border: '2px solid rgba(212,175,55,0.3)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 10px 40px rgba(125,76,255,0.2)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.transform = 'translateY(-15px) scale(1.05)'
                el.style.borderColor = '#f1d77a'
                el.style.boxShadow = '0 20px 60px rgba(212,175,55,0.5), 0 0 80px rgba(125,76,255,0.3)'
                el.style.background = 'linear-gradient(135deg, rgba(125,76,255,0.25), rgba(212,175,55,0.15))'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.transform = ''
                el.style.borderColor = 'rgba(212,175,55,0.3)'
                el.style.boxShadow = '0 10px 40px rgba(125,76,255,0.2)'
                el.style.background = 'linear-gradient(135deg, rgba(125,76,255,0.15), rgba(212,175,55,0.08))'
              }}
            >
              <span className="absolute top-4 right-5" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '4rem', color: 'rgba(212,175,55,0.15)', lineHeight: 1 }}>{f.num}</span>
              <span className="block mb-5" style={{ fontSize: '3.5rem', animation: `iconFloat 3s ease-in-out infinite`, animationDelay: `${i * 0.5}s`, filter: 'drop-shadow(0 0 15px rgba(212,175,55,0.5))' }}>{f.icon}</span>
              <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.6rem', color: '#d4af37', marginBottom: 12, letterSpacing: 2, lineHeight: 1.3 }}>{f.title}</h3>
              <p style={{ fontSize: '0.95rem', color: '#d0c0d8', lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Theater Seats */}
        <div className="max-w-xl mx-auto relative z-10" style={{ margin: '60px auto 40px' }}>
          <div className="flex justify-center gap-4" style={{ perspective: 800 }}>
            {seats.map((occupied, i) => (
              <div
                key={i}
                className="rounded-t-lg transition-all duration-300 cursor-pointer hover:-translate-y-2"
                style={{
                  width: 50,
                  height: 50,
                  background: occupied ? 'linear-gradient(135deg, #d4af37, #c49f2f)' : 'linear-gradient(135deg, #2a2a2a, #1a1a1a)',
                  border: `2px solid ${occupied ? '#f1d77a' : '#444'}`,
                  boxShadow: occupied ? '0 0 20px rgba(212,175,55,0.6)' : 'none',
                  animation: `seatFloat 3s ease-in-out infinite`,
                  animationDelay: `${i * 0.15}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Note */}
        <p className="text-center mt-12 relative z-10" style={{ color: '#b89fc5', fontSize: '1rem' }}>
          <span className="block" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.3rem', color: '#d4af37', letterSpacing: 2 }}>
            🎞️ வெற்றி திரைப்படங்கள் மட்டும் திரையிடப்படும் 🎞️
          </span>
          <em>*Only the top 7 shortlisted films will be screened during the event</em>
        </p>

        {/* Dynamic Film Strip */}
        <div
          className="relative mt-16"
          style={{
            width: '100%',
            background: '#0a0a0a',
            padding: '40px 0',
            overflow: 'hidden',
            borderTop: '4px solid #d4af37',
            borderBottom: '4px solid #d4af37',
          }}
        >
          {/* fade edges */}
          <div className="absolute left-0 top-0 h-full z-10 pointer-events-none" style={{ width: 200, background: 'linear-gradient(90deg, #0a0a0a 0%, transparent 100%)' }} />
          <div className="absolute right-0 top-0 h-full z-10 pointer-events-none" style={{ width: 200, background: 'linear-gradient(270deg, #0a0a0a 0%, transparent 100%)' }} />

          <div
            className="flex gap-4"
            style={{
              width: 'fit-content',
              animation: 'filmScroll 40s linear infinite',
            }}
            onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
            onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
          >
            {allPosters.map((poster, i) => (
              <div key={i} className="relative flex items-center gap-2 flex-shrink-0">
                <div className="film-perforation" />
                <div
                  className="relative overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2.5 hover:scale-110 rounded-lg group"
                  style={{
                    width: 180,
                    height: 250,
                    border: '3px solid #1a1a1a',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.8)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = '0 15px 50px rgba(212,175,55,0.6)'
                    e.currentTarget.style.borderColor = '#d4af37'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.8)'
                    e.currentTarget.style.borderColor = '#1a1a1a'
                  }}
                >
                  <img
                    src={poster.src}
                    alt={poster.title}
                    className="w-full h-full object-cover block"
                    style={{ filter: 'brightness(0.85) contrast(1.1)' }}
                  />
                  <div
                    className="absolute bottom-0 left-0 w-full px-2.5 py-4 transition-transform duration-300 translate-y-full hover:translate-y-0"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.95), transparent)' }}
                  >
                    <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.3rem', color: '#d4af37', letterSpacing: 2, display: 'block', textAlign: 'center', textShadow: '0 0 10px rgba(212,175,55,0.8)' }}>
                      {poster.title}
                    </span>
                  </div>
                </div>
                <div className="film-perforation" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
