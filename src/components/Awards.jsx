const categoryAwards = [
  { icon: '🎭', title: 'Best Actor' },
  { icon: '🎭', title: 'Best Actress' },
  { icon: '🎬', title: 'Best Director' },
  { icon: '✍️', title: 'Best Writer' },
  { icon: '📖', title: 'Best Story' },
  { icon: '🎥', title: 'Best Cinematographer' },
  { icon: '🎵', title: 'Best Music' },
  { icon: '✂️', title: 'Best Editor' },
  { icon: '🌟', title: 'Supporting Character' },
]

export default function Awards() {
  return (
    <section
      id="awards"
      className="relative overflow-hidden"
      style={{
        padding: '100px 20px',
        background: 'radial-gradient(circle at top, #2b050a, #0a0004 70%)',
      }}
    >
      <style>{`
        @keyframes bgPulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
        @keyframes awardFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        @keyframes shineMove { 0% { transform: translateX(-100%) rotate(25deg); } 100% { transform: translateX(200%) rotate(25deg); } }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(circle at 30% 20%, rgba(212,175,55,0.15), transparent 40%), radial-gradient(circle at 70% 80%, rgba(125,76,255,0.15), transparent 40%)',
        animation: 'bgPulse 6s ease-in-out infinite',
      }} />

      <div className="max-w-6xl mx-auto relative z-10 px-5">
        <h2
          className="text-center mb-16 relative block w-full"
          style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#d4af37', letterSpacing: 5, fontSize: '3rem' }}
        >
          AWARDS & RECOGNITION
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-0.5" style={{ background: 'linear-gradient(90deg, transparent, #d4af37, transparent)' }} />
        </h2>

        {/* Grand Prizes */}
        <div className="mb-20">
          <div className="text-center mb-16" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '2.2rem', letterSpacing: 4, color: '#d4af37', textShadow: '0 0 25px rgba(212,175,55,0.6)' }}>
            GRAND PRIZES
          </div>
          <div className="flex flex-col items-center gap-10">
            {/* Winner card */}
            <div
              className="relative rounded-2xl p-10 text-center text-white overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:scale-105"
              style={{
                width: 320,
                height: 400,
                background: 'linear-gradient(135deg, rgba(212,175,55,0.2), rgba(255,215,0,0.1)), linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.95))',
                boxShadow: '0 25px 70px rgba(0,0,0,0.65)',
                border: '1px solid rgba(212,175,55,0.3)',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 40px 100px rgba(212,175,55,0.7)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 25px 70px rgba(0,0,0,0.65)'}
            >
              <div className="absolute inset-0 z-10" style={{ background: 'radial-gradient(circle at top, rgba(212,175,55,0.3), transparent 60%)' }} />
              {/* Shine */}
              <div className="absolute inset-0 overflow-hidden z-10">
                <div className="absolute inset-0" style={{ background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.12), transparent)', transform: 'rotate(25deg)', animation: 'shineMove 6s linear infinite' }} />
              </div>
              <div className="relative z-20" style={{ fontSize: '5rem', animation: 'awardFloat 3s ease-in-out infinite', filter: 'drop-shadow(0 0 20px rgba(212,175,55,0.8))' }}>👑</div>
              <div className="relative z-20" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.8rem', letterSpacing: 3, color: '#d4af37', marginBottom: 10, textShadow: '0 0 15px rgba(212,175,55,0.6)' }}>WINNER</div>
              <h3 className="relative z-20" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '2rem', marginTop: 20, color: '#fff', letterSpacing: 2 }}>Best Film</h3>
            </div>

            {/* Runner-up + Special */}
            <div className="flex justify-center gap-10 flex-wrap">
              {[
                { emoji: '🥈', rank: 'RUNNER-UP', gradient: 'linear-gradient(135deg, rgba(192,192,192,0.15), rgba(125,76,255,0.1)), linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.95))', delay: '0.5s' },
                { emoji: '⭐', rank: 'SPECIAL', gradient: 'linear-gradient(135deg, rgba(125,76,255,0.2), rgba(212,175,55,0.08)), linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.95))', delay: '1s' },
              ].map(({ emoji, rank, gradient, delay }) => (
                <div
                  key={rank}
                  className="relative rounded-2xl p-10 text-center text-white overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:scale-105"
                  style={{
                    width: 280,
                    height: 360,
                    background: gradient,
                    boxShadow: '0 25px 70px rgba(0,0,0,0.65)',
                    border: '1px solid rgba(212,175,55,0.2)',
                  }}
                >
                  <div className="absolute inset-0 z-10" style={{ background: 'radial-gradient(circle at top, rgba(212,175,55,0.3), transparent 60%)' }} />
                  <div className="absolute inset-0 overflow-hidden z-10">
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.12), transparent)', transform: 'rotate(25deg)', animation: 'shineMove 6s linear infinite' }} />
                  </div>
                  <div className="relative z-20" style={{ fontSize: '4.5rem', animation: `awardFloat 3s ease-in-out ${delay} infinite`, filter: 'drop-shadow(0 0 20px rgba(212,175,55,0.8))' }}>{emoji}</div>
                  <div className="relative z-20" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.3rem', letterSpacing: 3, color: '#d4af37', marginBottom: 10, textShadow: '0 0 15px rgba(212,175,55,0.6)' }}>{rank}</div>
                  <h3 className="relative z-20" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.8rem', marginTop: 20, color: '#fff', letterSpacing: 2 }}>Best Film</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Category Awards */}
        <div>
          <div className="text-center mb-16" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '2.2rem', letterSpacing: 4, color: '#d4af37', textShadow: '0 0 25px rgba(212,175,55,0.6)' }}>
            CATEGORY EXCELLENCE
          </div>
          <div className="flex justify-center items-stretch flex-wrap gap-6 max-w-5xl mx-auto">
            {categoryAwards.map((award, i) => (
              <div
                key={i}
                className="relative rounded-2xl p-7 text-center cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-2"
                style={{
                  width: 200,
                  background: 'linear-gradient(135deg, rgba(125,76,255,0.08), rgba(212,175,55,0.05))',
                  border: '2px solid rgba(125,76,255,0.3)',
                  flexShrink: 0,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#d4af37'
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(212,175,55,0.3)'
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(125,76,255,0.15), rgba(212,175,55,0.1))'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(125,76,255,0.3)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(125,76,255,0.08), rgba(212,175,55,0.05))'
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: 15, filter: 'grayscale(0.3)', transition: 'all 0.4s' }}>{award.icon}</div>
                <h4 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.3rem', color: '#f5e9ff', margin: 0, letterSpacing: 2 }}>{award.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
