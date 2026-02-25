import { useEffect, useRef } from 'react'

const cards = [
  {
    icon: '🎬',
    title: 'State-Level Festival',
    text: 'ENIGMA is a state-level short film festival by the Film Club of CIT, created for cinema patriots and aspiring filmmakers with dreams of the silver screen.',
  },
  {
    icon: '🏆',
    title: 'Top 7 Screening',
    text: 'The top 7 short films will be screened on the main stage, with the best three films winning prestigious awards, alongside 10+ special awards honoring excellence.',
  },
  {
    icon: '🌟',
    title: 'Platform for Talent',
    text: 'Open to filmmakers across Tamil Nadu, ENIGMA provides a powerful platform for emerging talents to showcase their vision and contribute to independent cinema.',
  },
]

export default function About() {
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('about-card-visible')
      }),
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    )
    cardsRef.current.forEach(c => c && observer.observe(c))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about-enigma"
      className="relative overflow-hidden"
      style={{
        padding: '120px 20px',
        background: 'linear-gradient(180deg, #1a0b2e, #0f0520)',
      }}
    >
      {/* Background radial gradient animated */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 20% 30%, rgba(212,175,55,0.15), transparent 40%), radial-gradient(circle at 80% 70%, rgba(125,76,255,0.15), transparent 40%)',
          animation: 'bgShift 10s ease-in-out infinite',
        }}
      />
      <style>{`
        @keyframes bgShift { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
        @keyframes rotateReel { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes badgePulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 40px rgba(212,175,55,0.4); }
          50% { transform: scale(1.1); box-shadow: 0 0 60px rgba(212,175,55,0.6); }
        }
        @keyframes floatItem {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
      `}</style>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          className="font-bebas text-center mb-16 relative block w-full"
          style={{
            fontFamily: 'Bebas Neue, sans-serif',
            color: '#d4af37',
            letterSpacing: 5,
            fontSize: '3rem',
          }}
        >
          ABOUT ENIGMA
          <span
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-0.5"
            style={{ background: 'linear-gradient(90deg, transparent, #d4af37, transparent)' }}
          />
        </h2>

        <div
          className="grid gap-16 items-center mt-10"
          style={{ gridTemplateColumns: '1fr 1fr' }}
        >
          {/* Left: Visual */}
          <div className="relative flex items-center justify-center" style={{ height: 500 }}>
            {/* Floating items */}
            {[
              { top: '10%', left: '10%', delay: '0s', size: 40 },
              { top: '60%', left: '5%', delay: '2s', size: 50 },
              { top: '30%', right: '15%', delay: '4s', size: 40 },
              { bottom: '20%', right: '10%', delay: '6s', size: 35 },
            ].map((item, i) => (
              <div
                key={i}
                className="absolute rounded-lg"
                style={{
                  ...item,
                  width: item.size,
                  height: item.size,
                  background: 'linear-gradient(135deg, rgba(212,175,55,0.3), rgba(125,76,255,0.2))',
                  animation: `floatItem 8s ease-in-out infinite`,
                  animationDelay: item.delay,
                  backdropFilter: 'blur(5px)',
                }}
              />
            ))}

            {/* Film reel */}
            <div
              className="absolute"
              style={{
                width: 300,
                height: 300,
                border: '8px solid rgba(212,175,55,0.3)',
                borderRadius: '50%',
                animation: 'rotateReel 20s linear infinite',
              }}
            />

            {/* Center badge */}
            <div
              className="relative z-20 rounded-full flex flex-col items-center justify-center"
              style={{
                width: 180,
                height: 180,
                background: 'linear-gradient(135deg, rgba(212,175,55,0.2), rgba(125,76,255,0.2))',
                backdropFilter: 'blur(20px)',
                border: '3px solid rgba(212,175,55,0.5)',
                animation: 'badgePulse 3s ease-in-out infinite',
              }}
            >
              <span
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '3rem',
                  color: '#d4af37',
                  letterSpacing: 3,
                  textShadow: '0 0 20px rgba(212,175,55,0.6)',
                }}
              >7</span>
              <span style={{ fontSize: '0.9rem', color: '#f1d77a', letterSpacing: 2 }}>TOP FILMS</span>
            </div>
          </div>

          {/* Right: Cards */}
          <div className="flex flex-col gap-7">
            {cards.map((card, i) => (
              <div
                key={i}
                ref={el => cardsRef.current[i] = el}
                className="rounded-xl p-8 transition-all duration-300 cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, rgba(125,76,255,0.1), rgba(212,175,55,0.05))',
                  borderLeft: '4px solid #d4af37',
                  backdropFilter: 'blur(10px)',
                  opacity: 0,
                  transform: 'translateX(-50px)',
                  transition: 'opacity 0.6s ease, transform 0.6s ease, background 0.3s, box-shadow 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateX(10px)'
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(125,76,255,0.15), rgba(212,175,55,0.1))'
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(212,175,55,0.3)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateX(0)'
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(125,76,255,0.1), rgba(212,175,55,0.05))'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: 15, filter: 'drop-shadow(0 0 10px rgba(212,175,55,0.5))' }}>
                  {card.icon}
                </div>
                <h3
                  style={{
                    fontFamily: 'Bebas Neue, sans-serif',
                    color: '#d4af37',
                    fontSize: '1.5rem',
                    letterSpacing: 3,
                    marginBottom: 15,
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ color: '#e0d0e8', lineHeight: 1.8, fontSize: '1rem' }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
