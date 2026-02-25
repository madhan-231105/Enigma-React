import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  const vantaRef = useRef(null)
  const vantaEffect = useRef(null)

  useEffect(() => {
    // Load vanta scripts dynamically
    const loadVanta = () => {
      if (window.VANTA && vantaRef.current && !vantaEffect.current) {
        vantaEffect.current = window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x0a0014,
          color: 0xd4af37,
          points: 12.0,
          maxDistance: 22.0,
          spacing: 16.0,
        })
      }
    }

    if (window.THREE && window.VANTA) {
      loadVanta()
    } else {
      // Load THREE.js
      const threeScript = document.createElement('script')
      threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js'
      threeScript.onload = () => {
        const vantaScript = document.createElement('script')
        vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js'
        vantaScript.onload = loadVanta
        document.body.appendChild(vantaScript)
      }
      document.body.appendChild(threeScript)
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy()
        vantaEffect.current = null
      }
    }
  }, [])

  const scrollToAbout = () => {
    const el = document.getElementById('about-enigma')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div id="vanta-bg" ref={vantaRef} style={{ height: '100vh', width: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      {/* Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: 'radial-gradient(circle at center, rgba(0,0,0,0.3), rgba(0,0,0,0.8))' }}
      />

      {/* Content */}
      <div
        className="relative z-20 text-center max-w-4xl px-5 animate-[fadeInUp_1s_ease]"
        style={{ animation: 'fadeInUp 1s ease' }}
      >
        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes glowText {
            from { filter: drop-shadow(0 0 20px rgba(212,175,55,0.4)); }
            to { filter: drop-shadow(0 0 40px rgba(212,175,55,0.8)); }
          }
        `}</style>
        
        <h1
          style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '6rem',
            letterSpacing: '12px',
            background: 'linear-gradient(135deg, #d4af37, #f1d77a, #d4af37)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: 10,
            animation: 'glowText 2s ease-in-out infinite alternate',
          }}
        >
          ENIGMA
        </h1>
        <h3
          style={{
            fontFamily: 'Bebas Neue, sans-serif',
            letterSpacing: '6px',
            color: '#f1d77a',
            fontSize: '1.8rem',
          }}
        >
          # TAKE-III
        </h3>
        <p className="mt-3" style={{ fontSize: '1.1rem', color: '#e0d0e8', fontWeight: 300, lineHeight: 1.8 }}>An Echo of Cinema</p>
        <p className="mt-4" style={{ fontSize: '1.1rem', color: '#e0d0e8', fontWeight: 300, lineHeight: 1.8 }}>
          Where stories rise, visions compete, and filmmakers step closer to the silver screen.
        </p>

        <div className="flex gap-5 justify-center flex-wrap mt-8">
          <button
            onClick={scrollToAbout}
            className="transition-all duration-300 hover:-translate-y-1"
            style={{
              padding: '15px 40px',
              background: 'linear-gradient(135deg, rgba(212,175,55,0.2), rgba(212,175,55,0.4))',
              border: '2px solid #d4af37',
              color: '#d4af37',
              borderRadius: 50,
              fontWeight: 600,
              fontSize: 16,
              cursor: 'pointer',
              boxShadow: '0 8px 25px rgba(212,175,55,0.3)',
            }}
            onMouseEnter={e => {
              e.target.style.background = 'linear-gradient(135deg, #d4af37, #f2d06b)'
              e.target.style.color = '#0a0014'
              e.target.style.boxShadow = '0 12px 35px rgba(212,175,55,0.5)'
            }}
            onMouseLeave={e => {
              e.target.style.background = 'linear-gradient(135deg, rgba(212,175,55,0.2), rgba(212,175,55,0.4))'
              e.target.style.color = '#d4af37'
              e.target.style.boxShadow = '0 8px 25px rgba(212,175,55,0.3)'
            }}
          >
            Explore Festival
          </button>
          <Link
            to="/rules"
            className="transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            style={{
              padding: '15px 40px',
              background: 'linear-gradient(135deg, #d4af37, #f2d06b)',
              color: '#0a0014',
              borderRadius: 50,
              fontWeight: 700,
              fontSize: 16,
              textDecoration: 'none',
              boxShadow: '0 8px 25px rgba(212,175,55,0.4)',
              border: '2px solid transparent',
            }}
          >
            Register Now →
          </Link>
        </div>
      </div>
    </div>
  )
}
