import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div
      id="loading-screen"
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
      style={{ background: '#0a0014', transition: 'opacity 1s ease, visibility 1s ease' }}
    >
      <div className="film-strip-loading" />
      
      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: 0,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="light-rays" />
      <div className="loading-spotlight" />

      {/* Trophy Container */}
      <div
        className="relative z-30 flex items-end justify-center mb-10 overflow-hidden"
        style={{ width: 350, height: 500 }}
      >
        <img
          src="/images/TROPHY.png"
          alt="ENIGMA Trophy"
          className="trophy-image"
          style={{ width: 280 }}
          onError={e => {
            e.target.style.display = 'none'
          }}
        />
      </div>

      {/* Loading text */}
      <div className="relative z-40 text-center w-full max-w-lg px-5">
        <h1
          className="festival-name font-bebas mb-2.5"
          style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '4rem',
            letterSpacing: '8px',
            background: 'linear-gradient(135deg, #d4af37, #f1d77a, #d4af37)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          ENIGMA
        </h1>
        <p
          className="font-bebas mb-7"
          style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '1.5rem',
            letterSpacing: '4px',
            color: '#f1d77a',
          }}
        >
          # TAKE-III
        </p>
        <p
          className="text-base animate-[fadeInOut_2s_ease-in-out_infinite]"
          style={{ color: '#b89fc5' }}
        >
          🎬 Preparing the silver screen experience...
        </p>
      </div>
    </div>
  )
}
