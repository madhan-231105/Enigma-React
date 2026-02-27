import React from 'react'

export default function Dignitaries() {
  const chiefGuestPosters = [
    '/images/Chief_Guest_1.png', 
    '/images/Chief_Guest_2.png'
  ]
  
  const juryPosters = [
    '/images/Jury_1.png',
    '/images/Jury_2.png',
    '/images/Jury_3.png'
  ]

  return (
    <section id="dignitaries">
      <style>{`
        #dignitaries {
          padding: 120px 20px;
          background: #0a0516;
          position: relative;
          overflow: hidden;
        }

        /* Ambient background glow */
        #dignitaries::before {
          content: '';
          position: absolute;
          top: 20%;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .welcome-text {
          font-family: serif;
          font-style: italic;
          color: rgba(255, 255, 255, 0.6);
          letter-spacing: 4px;
          font-size: 1rem;
          margin-bottom: 10px;
          text-transform: uppercase;
          display: block;
        }

        .section-header {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          background: linear-gradient(to bottom, #fff 30%, #d4af37 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 6px;
          margin-bottom: 60px;
          text-transform: uppercase;
        }

        .poster-grid {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 40px;
          margin-bottom: 100px;
        }

        .poster-wrapper {
          position: relative;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.02);
          padding: 10px; /* The "Frame" */
          border: 1px solid rgba(212, 175, 55, 0.2);
          transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        /* Chief Guest specific sizing */
        .cg-poster { width: 380px; }
        
        /* Jury specific sizing */
        .jury-poster { width: 350px; }

        .poster-wrapper img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 12px;
          filter: grayscale(20%);
          transition: filter 0.5s ease;
        }

        .poster-wrapper:hover {
          transform: translateY(-15px) scale(1.03);
          border-color: #d4af37;
          box-shadow: 0 30px 60px rgba(212, 175, 55, 0.15);
          background: rgba(255, 255, 255, 0.05);
        }

        .poster-wrapper:hover img {
          filter: grayscale(0%);
        }

        /* The Gold Divider Line */
        .divider-container {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 40px 0 80px;
          gap: 20px;
        }
        .line {
          height: 1px;
          width: 100px;
          background: linear-gradient(90deg, transparent, #d4af37);
        }
        .line.right {
          background: linear-gradient(-90deg, transparent, #d4af37);
        }
        .diamond {
          width: 10px;
          height: 10px;
          border: 1px solid #d4af37;
          transform: rotate(45deg);
        }

        @media (max-width: 768px) {
          .cg-poster, .jury-poster { width: 100%; max-width: 340px; }
          #dignitaries { padding: 60px 15px; }
          .section-header { font-size: 2.2rem; }
        }
      `}</style>

      <div className="container">
        {/* --- CHIEF GUESTS --- */}
        <span className="welcome-text">Distinguished</span>
        <h2 className="section-header">Chief Guests</h2>
        <div className="poster-grid">
          {chiefGuestPosters.map((src, index) => (
            <div key={index} className="poster-wrapper cg-poster">
              <img src={src} alt={`Chief Guest ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* --- ORNAMENTAL DIVIDER --- */}
        <div className="divider-container">
          <div className="line" />
          <div className="diamond" />
          <div className="line right" />
        </div>

        {/* --- JURY --- */}
        <span className="welcome-text">Honorable</span>
        <h2 className="section-header">The Jury</h2>
        <div className="poster-grid">
          {juryPosters.map((src, index) => (
            <div key={index} className="poster-wrapper jury-poster">
              <img src={src} alt={`Jury ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}