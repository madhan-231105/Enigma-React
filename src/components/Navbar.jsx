import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const scrollTo = (id) => {
    closeMenu()
    if (isHome) {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    }
  }

  const navLinks = [
    { label: 'Home', id: 'vanta-bg' },
    { label: 'About', id: 'about-enigma' },
    { label: 'Team Lumora', id: 'about-us' },
    { label: 'Prizes', id: 'awards' },
    { label: 'Sponsors', id: 'sponsors' },
    { label: 'Contact Us', id: 'contact' },
  ]

  return (
    <nav
      className="fixed top-0 left-0 w-full flex justify-between items-center px-[5%] py-4 z-[1000]"
      style={{
        background: 'rgba(10, 0, 20, 0.98)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 20px rgba(0,0,0,0.5)',
        borderBottom: '1px solid rgba(212,175,55,0.3)',
      }}
    >
      {/* Left: Logos */}
      <div className="flex gap-4 items-center z-[1002]">
        <img src="/images/cit.png" alt="CIT Logo" className="h-12 w-auto object-contain" onError={e => e.target.style.display='none'} />
        <img src="/images/FC_logo.png" alt="Film Club Logo" className="h-12 w-auto object-contain" onError={e => e.target.style.display='none'} />
      </div>

      {/* Hamburger */}
      <button
        className={`lg:hidden flex flex-col cursor-pointer p-1 z-[1002] bg-transparent border-0 ${menuOpen ? 'hamburger-active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="block w-8 h-0.5 bg-gold mb-1.5 transition-all duration-300 rounded" style={{ backgroundColor: '#d4af37' }} />
        <span className="block w-8 h-0.5 bg-gold mb-1.5 transition-all duration-300 rounded" style={{ backgroundColor: '#d4af37' }} />
        <span className="block w-8 h-0.5 bg-gold transition-all duration-300 rounded" style={{ backgroundColor: '#d4af37' }} />
      </button>

      {/* Center Nav (desktop) */}
      <ul
        className={`
          lg:flex lg:static lg:h-auto lg:w-auto lg:bg-transparent lg:flex-row lg:opacity-100 lg:pointer-events-auto lg:gap-8 lg:m-0 lg:p-0
          fixed top-0 left-0 w-full h-screen flex-col justify-center items-center gap-0 p-0
          transition-opacity duration-300
          ${menuOpen ? 'flex opacity-100 pointer-events-auto' : 'hidden opacity-0 pointer-events-none'}
        `}
        style={!menuOpen ? {} : {
          background: 'linear-gradient(135deg, #0a0014 0%, #1a0a2e 50%, #0a0014 100%)',
          zIndex: 1001,
        }}
        id="navMenu"
      >
        {navLinks.map(({ label, id }, i) => (
          <li
            key={id}
            className="w-full text-center lg:w-auto"
            style={menuOpen ? {
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 0.4s ease ${0.1 + i * 0.05}s`
            } : {}}
          >
            <button
              onClick={() => scrollTo(id)}
              className="nav-link-hover text-gold font-medium text-base transition-all duration-300 hover:text-white bg-transparent border-0 cursor-pointer
                lg:py-0 lg:px-0 lg:text-sm lg:tracking-widest
                block w-full py-5 px-10 text-2xl font-semibold tracking-wide hover:bg-[rgba(212,175,55,0.1)]"
              style={{ color: '#d4af37' }}
            >
              {label}
            </button>
          </li>
        ))}
        <li className="w-full text-center lg:hidden" style={menuOpen ? { opacity: 1, transition: `all 0.4s ease ${0.45}s` } : {}}>
          <Link
            to="/rules"
            onClick={closeMenu}
            className="block mx-auto mt-8 text-xl py-5 px-12 rounded-full font-semibold inline-block"
            style={{
              background: 'linear-gradient(135deg, #d4af37 0%, #f2d06b 100%)',
              color: '#0a0014',
              boxShadow: '0 8px 30px rgba(212, 175, 55, 0.5)',
            }}
          >
            Register Now →
          </Link>
        </li>
        <li className="w-full text-center">
          <Link
            to="/rules"
            onClick={closeMenu}
            className="nav-link-hover text-gold font-medium text-base transition-all duration-300 hover:text-white bg-transparent border-0 cursor-pointer
              lg:py-0 lg:px-0 lg:text-sm lg:tracking-widest
              block w-full py-5 px-10 text-2xl font-semibold tracking-wide hover:bg-[rgba(212,175,55,0.1)]"
            style={{ color: '#d4af37' }}
          >
            Rules
          </Link>
        </li>
      </ul>

      {/* Right: Register button (desktop) */}
      <div className="hidden lg:block z-[1002]">
        <Link
          to="/rules"
          className="px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
          style={{
            background: 'linear-gradient(135deg, #d4af37 0%, #f2d06b 100%)',
            color: '#0a0014',
            boxShadow: '0 4px 15px rgba(212,175,55,0.3)',
          }}
        >
          Register Now →
        </Link>
      </div>
    </nav>
  )
}
