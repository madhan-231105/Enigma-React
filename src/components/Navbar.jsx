import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const scrollTo = (id) => {
    closeMenu()
    if (isHome) {
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    } else {
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 400)
    }
  }

  const navLinks = [
    { label: 'Home', id: 'vanta-bg' },
    { label: 'About', id: 'about-enigma' },
    { label: 'Team Lumora', id: 'about-us' },
    { label: 'Prizes', id: 'awards' },
    { label: 'Sponsors', id: 'sponsors' },
    { label: 'Contact Us', id: 'contact' },
    { label: 'Rules', to: '/rules' },
  ]

  return (
    <>
      <style>{`
        .enigma-navbar {
          position: fixed; top: 0; left: 0; width: 100%;
          display: flex; justify-content: space-between; align-items: center;
          padding: 0 5%; height: 80px;
          background: rgba(10, 0, 20, 0.98); backdrop-filter: blur(10px);
          z-index: 1000; box-shadow: 0 2px 20px rgba(0,0,0,0.5);
          border-bottom: 1px solid rgba(212,175,55,0.3);
          box-sizing: border-box;
        }
        .nav-left { display: flex; gap: 15px; align-items: center; z-index: 1002; }
        .nav-left img { height: 50px; width: auto; object-fit: contain; }
        .nav-center {
          display: flex; list-style: none; gap: 30px; margin: 0; padding: 0; align-items: center;
        }
        .nav-center a, .nav-center button {
          color: #d4af37; background: none; border: none; cursor: pointer;
          font-size: 16px; font-weight: 500; font-family: 'Poppins', sans-serif;
          text-decoration: none; transition: color 0.3s; padding: 0;
          -webkit-tap-highlight-color: rgba(212,175,55,0.3);
        }
        .nav-center a:hover, .nav-center button:hover { color: #fff; }
        .nav-right { z-index: 1002; }
        .register-btn {
          padding: 10px 25px;
          background: linear-gradient(135deg, #d4af37 0%, #f2d06b 100%);
          color: #0a0014 !important; text-decoration: none; border-radius: 25px;
          font-weight: 600; font-size: 15px; transition: all 0.3s;
          box-shadow: 0 4px 15px rgba(212,175,55,0.3);
        }
        .register-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(212,175,55,0.5); }
        .mobile-menu-toggle {
          display: none; flex-direction: column; cursor: pointer;
          padding: 5px; z-index: 1002; background: none; border: none;
        }
        .hamburger-line {
          width: 30px; height: 3px; border-radius: 3px;
          background-color: #d4af37; margin: 4px 0;
          transition: 0.4s; display: block;
        }
        .mobile-open .hamburger-line:nth-child(1) { transform: rotate(-45deg) translate(-7px, 7px); background: #fff; }
        .mobile-open .hamburger-line:nth-child(2) { opacity: 0; }
        .mobile-open .hamburger-line:nth-child(3) { transform: rotate(45deg) translate(-7px, -7px); background: #fff; }
        .mobile-menu-overlay {
          display: none;
          position: fixed; top: 0; left: 0; width: 100%; height: 100vh;
          background: linear-gradient(135deg, #0a0014 0%, #1a0a2e 50%, #0a0014 100%);
          flex-direction: column; justify-content: center; align-items: center;
          z-index: 1001; opacity: 0; pointer-events: none;
          transition: opacity 0.4s ease; overflow-y: auto;
          list-style: none; margin: 0; padding: 0;
        }
        .mobile-menu-overlay.open { opacity: 1; pointer-events: all; }
        .mobile-menu-overlay li { width: 100%; text-align: center; }
        .mobile-menu-overlay a,
        .mobile-menu-overlay button {
          display: block; width: 100%; padding: 20px 40px;
          font-size: 24px; font-weight: 600; color: #d4af37;
          background: none; border: none; cursor: pointer;
          font-family: 'Poppins', sans-serif; text-decoration: none;
          transition: all 0.3s; letter-spacing: 1px;
          -webkit-tap-highlight-color: rgba(212,175,55,0.3);
          min-height: 48px; box-sizing: border-box;
        }
        .mobile-menu-overlay a:hover, .mobile-menu-overlay button:hover {
          color: #fff; background: rgba(212,175,55,0.1);
        }
        .mobile-register-wrap { margin-top: 30px; padding: 0 40px; text-align: center; }
        .mobile-register-btn {
          background: linear-gradient(135deg, #d4af37 0%, #f2d06b 100%);
          color: #0a0014 !important; border-radius: 50px;
          font-size: 20px; padding: 18px 50px;
          display: inline-block; text-decoration: none;
          font-weight: 700; box-shadow: 0 8px 30px rgba(212,175,55,0.5);
        }
        @media (max-width: 1024px) {
          .enigma-navbar { padding: 0 30px; }
          .nav-center { gap: 25px; }
          .nav-center a, .nav-center button { font-size: 14px; }
        }
        @media (max-width: 968px) {
          .enigma-navbar { padding: 0 20px; height: 70px; }
          .nav-left img { height: 40px !important; }
          .nav-center { display: none !important; }
          .nav-right { display: none !important; }
          .mobile-menu-toggle { display: flex !important; }
          .mobile-menu-overlay { display: flex !important; }
        }
        @media (max-width: 480px) {
          .nav-left img { height: 35px !important; }
          .mobile-menu-overlay a, .mobile-menu-overlay button { font-size: 20px; padding: 18px 30px; }
          .mobile-register-btn { font-size: 18px; padding: 15px 40px; }
        }
      `}</style>

      <nav className="enigma-navbar">
        <div className="nav-left">
          <img src="/images/cit.png" alt="CIT Logo" onError={e => e.target.style.display = 'none'} />
          <img src="/images/FC_logo.png" alt="Film Club Logo" onError={e => e.target.style.display = 'none'} />
        </div>

        <ul className="nav-center">
          {navLinks.map(({ label, id, to }) => (
            <li key={label}>
              {to ? (
                <Link to={to}>{label}</Link>
              ) : (
                <button onClick={() => scrollTo(id)}>{label}</button>
              )}
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <Link to="/rules" className="register-btn">Register Now →</Link>
        </div>

        <button
          className={`mobile-menu-toggle ${menuOpen ? 'mobile-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      {/* Mobile overlay */}
      <ul className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(({ label, id, to }, i) => (
          <li key={label} style={{ opacity: menuOpen ? 1 : 0, transform: menuOpen ? 'translateY(0)' : 'translateY(20px)', transition: `all 0.4s ease ${0.1 + i * 0.05}s` }}>
            {to ? (
              <Link to={to} onClick={closeMenu}>{label}</Link>
            ) : (
              <button onClick={() => scrollTo(id)}>{label}</button>
            )}
          </li>
        ))}
        <li className="mobile-register-wrap" style={{ opacity: menuOpen ? 1 : 0, transition: `all 0.4s ease ${0.1 + navLinks.length * 0.05}s` }}>
          <Link to="/rules" onClick={closeMenu} className="mobile-register-btn">Register Now →</Link>
        </li>
      </ul>
    </>
  )
}
