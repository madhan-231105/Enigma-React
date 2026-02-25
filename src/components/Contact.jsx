export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 20px',
        background: 'radial-gradient(ellipse at center, #1a1a1a 0%, #0a0a0a 100%)',
      }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(218, 165, 32, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(218, 165, 32, 0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-6xl w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '4rem',
              color: '#DAA520',
              letterSpacing: 8,
              marginBottom: 20,
              textTransform: 'uppercase',
              textShadow: '0 0 20px rgba(218,165,32,0.3)',
            }}
          >
            CONTACT US
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#ccc', letterSpacing: 2 }}>
            Get in Touch with Team Lumora
          </p>
        </div>

        {/* Info Grid - 2x2 */}
        <div
          className="grid gap-10"
          style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}
        >
          {/* Email */}
          <div
            className="transition-all duration-300"
            style={{
              marginBottom: 40,
              paddingLeft: 20,
              borderLeft: '2px solid #DAA520',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderLeftWidth = '4px'
              e.currentTarget.style.paddingLeft = '25px'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderLeftWidth = '2px'
              e.currentTarget.style.paddingLeft = '20px'
            }}
          >
            <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#DAA520', fontSize: '1.3rem', marginBottom: 10, letterSpacing: 2 }}>EMAIL</h3>
            <p style={{ color: '#ccc', lineHeight: 1.8 }}>
              <a href="mailto:citfilmclub@gmail.com" style={{ color: '#ccc', textDecoration: 'none' }}>
                citfilmclub@gmail.com
              </a>
            </p>
          </div>

          {/* Phone */}
          <div
            className="transition-all duration-300"
            style={{ marginBottom: 40, paddingLeft: 20, borderLeft: '2px solid #DAA520' }}
            onMouseEnter={e => {
              e.currentTarget.style.borderLeftWidth = '4px'
              e.currentTarget.style.paddingLeft = '25px'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderLeftWidth = '2px'
              e.currentTarget.style.paddingLeft = '20px'
            }}
          >
            <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#DAA520', fontSize: '1.3rem', marginBottom: 10, letterSpacing: 2 }}>PHONE</h3>
            <p style={{ color: '#ccc', lineHeight: 1.8 }}>+91 82209 97164</p>
            <p style={{ color: '#ccc', lineHeight: 1.8 }}>+91 94458 49106</p>
          </div>

          {/* Location */}
          <div
            className="transition-all duration-300"
            style={{ marginBottom: 40, paddingLeft: 20, borderLeft: '2px solid #DAA520' }}
            onMouseEnter={e => {
              e.currentTarget.style.borderLeftWidth = '4px'
              e.currentTarget.style.paddingLeft = '25px'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderLeftWidth = '2px'
              e.currentTarget.style.paddingLeft = '20px'
            }}
          >
            <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#DAA520', fontSize: '1.3rem', marginBottom: 10, letterSpacing: 2 }}>LOCATION</h3>
            <p style={{ color: '#ccc', lineHeight: 1.8 }}>Coimbatore Institute of Technology</p>
            <p style={{ color: '#ccc', lineHeight: 1.8 }}>Coimbatore, Tamil Nadu</p>
            <p style={{ color: '#ccc', lineHeight: 1.8 }}>India</p>
          </div>

          {/* Follow Us */}
          <div
            className="transition-all duration-300"
            style={{ marginBottom: 40, paddingLeft: 20, borderLeft: '2px solid #DAA520' }}
            onMouseEnter={e => {
              e.currentTarget.style.borderLeftWidth = '4px'
              e.currentTarget.style.paddingLeft = '25px'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderLeftWidth = '2px'
              e.currentTarget.style.paddingLeft = '20px'
            }}
          >
            <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#DAA520', fontSize: '1.3rem', marginBottom: 10, letterSpacing: 2 }}>FOLLOW US</h3>
            <div className="social-links">
              <a
                href="https://www.instagram.com/cit_film_club?igsh=NDZwM2hqczZ3ZHUx&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                title="Instagram"
              >
                <i className="bi bi-instagram" />
              </a>
              <a
                href="https://www.youtube.com/@CITFilmClub"
                target="_blank"
                rel="noreferrer"
                title="YouTube"
              >
                <i className="bi bi-youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
