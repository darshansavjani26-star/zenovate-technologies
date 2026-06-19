import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
]

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap');

  :root {
    --sage:   #f0f5ee;
    --sage2:  #e4ede1;
    --sage3:  #c8ddc4;
    --green:  #3d6e38;
    --green2: #5a8e54;
    --green3: #8ab87a;
    --ink:    #1e3a1a;
    --muted:  #7a9a74;
  }

  /* ── TOP UTILITY BAR ── */
  .nb-utility {
    background: var(--ink);
    border-bottom: 1px solid rgba(255,255,255,0.06);
    padding: 0 48px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nb-utility__left {
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: 'Jost', sans-serif;
    font-weight: 200;
    font-size: 9px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.38);
  }

  .nb-utility__dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--green3);
    animation: utilBlink 2s ease-in-out infinite;
    flex-shrink: 0;
  }

  @keyframes utilBlink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.25; }
  }

  .nb-utility__right {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .nb-utility__link {
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: 'Jost', sans-serif;
    font-weight: 200;
    font-size: 9px;
    letter-spacing: 0.18em;
    color: rgba(255,255,255,0.38);
    text-decoration: none;
    transition: color 0.25s;
  }

  .nb-utility__link:hover {
    color: var(--green3);
  }

  /* ── MAIN NAVBAR ── */
  .navbar {
    background: var(--ink);
    border-bottom: 1px solid rgba(255,255,255,0.07);
    padding: 0 48px;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 100;
    transition: background 0.4s, box-shadow 0.4s;
  }

  .navbar--scrolled {
    background: rgba(30, 58, 26, 0.97);
    box-shadow: 0 2px 0 rgba(138,184,122,0.15);
    backdrop-filter: blur(12px);
  }

  /* ── LOGO ── */
  .navbar__logo {
    display: flex;
    align-items: center;
    gap: 0;
    text-decoration: none;
    flex-shrink: 0;
  }

  .navbar__wordmark {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: 21px;
    letter-spacing: 0.2em;
    color: rgba(255,255,255,0.92);
    text-transform: uppercase;
    transition: color 0.25s;
  }

  .navbar__wordmark em {
    font-style: italic;
    color: var(--green3);
  }

  .navbar__logo:hover .navbar__wordmark {
    color: var(--white, #fff);
  }

  /* ── NAV LINKS ── */
  .navbar__nav {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .navbar__link {
    font-family: 'Jost', sans-serif;
    font-weight: 200;
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.45);
    text-decoration: none;
    position: relative;
    padding-bottom: 3px;
    transition: color 0.25s;
    white-space: nowrap;
  }

  .navbar__link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--green3);
    transition: width 0.38s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .navbar__link:hover {
    color: rgba(255,255,255,0.85);
  }

  .navbar__link:hover::after,
  .navbar__link--active::after {
    width: 100%;
  }

  .navbar__link--active {
    color: var(--green3);
  }

  /* ── CTA ── */
  .navbar__cta {
    font-family: 'Jost', sans-serif;
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--ink);
    background: var(--green3);
    border: none;
    padding: 9px 20px;
    cursor: pointer;
    text-decoration: none;
    white-space: nowrap;
    flex-shrink: 0;
    transition: background 0.3s, color 0.3s;
  }

  .navbar__cta:hover {
    background: var(--white, #fff);
    color: var(--ink);
  }

  /* ── BURGER ── */
  .navbar__burger {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    color: rgba(255,255,255,0.7);
    padding: 4px;
    flex-shrink: 0;
  }

  /* ── MOBILE DRAWER ── */
  .mobile-menu {
    position: fixed;
    inset: 0;
    z-index: 200;
    background: var(--ink);
  }

  .mobile-menu__inner {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 32px 28px 44px;
  }

  .mobile-menu__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(255,255,255,0.07);
    margin-bottom: 40px;
  }

  .mobile-menu__logo {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: 20px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.88);
    text-decoration: none;
  }

  .mobile-menu__logo em {
    font-style: italic;
    color: var(--green3);
  }

  .mobile-menu__close {
    background: none;
    border: none;
    cursor: pointer;
    color: rgba(255,255,255,0.6);
    padding: 4px;
  }

  .mobile-menu__nav {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .mobile-menu__link {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: 32px;
    letter-spacing: 0.03em;
    color: rgba(255,255,255,0.22);
    text-decoration: none;
    padding: 13px 0;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    transition: color 0.25s;
    display: block;
  }

  .mobile-menu__link:hover,
  .mobile-menu__link--active {
    color: var(--green3);
  }

  .mobile-menu__link--active {
    font-style: italic;
  }

  .mobile-menu__cta {
    font-family: 'Jost', sans-serif;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--ink);
    background: var(--green3);
    border: none;
    padding: 15px 28px;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    margin-top: 32px;
    display: block;
    transition: background 0.3s;
  }

  .mobile-menu__cta:hover {
    background: var(--white, #fff);
  }

  .mobile-menu__contact {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
    padding-top: 18px;
    border-top: 1px solid rgba(255,255,255,0.06);
  }

  .mobile-menu__contact-link {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'Jost', sans-serif;
    font-weight: 200;
    font-size: 10px;
    letter-spacing: 0.15em;
    color: rgba(255,255,255,0.3);
    text-decoration: none;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 960px) {
    .navbar       { padding: 0 28px; }
    .nb-utility   { padding: 0 28px; }
    .navbar__nav  { gap: 20px; }
    .navbar__link { font-size: 9px; }
  }

  @media (max-width: 768px) {
    .navbar        { padding: 0 20px; }
    .nb-utility    { display: none; }
    .navbar__nav,
    .navbar__cta   { display: none; }
    .navbar__burger { display: flex; }
  }
`

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <style>{CSS}</style>

      {/* ── Top Utility Bar ── */}
      <div className="nb-utility">
        <div className="nb-utility__left">
          <span className="nb-utility__dot" />
          Available for new projects
        </div>
        <div className="nb-utility__right">
          <a href="tel:+919898194788" className="nb-utility__link">
            <Phone size={11} />
            +91 98981 94788
          </a>
          <a href="mailto:contact.zenovate@gmail.com" className="nb-utility__link">
  <Mail size={11} />
  contact.zenovate@gmail.com
</a>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <motion.header
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -68, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <span className="navbar__wordmark">
            ZENO<em>VATE</em>
          </span>
        </Link>

        {/* Nav links */}
        <nav className="navbar__nav" aria-label="Main navigation">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <Link to="/contact" className="navbar__cta">
          Get Quote
        </Link>

        {/* Burger — mobile */}
        <button
          className="navbar__burger"
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mobile-menu__inner">
              {/* Top */}
              <div className="mobile-menu__top">
                <Link to="/" className="mobile-menu__logo">
                  ZENO<em>VATE</em>
                </Link>
                <button
                  className="mobile-menu__close"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Links */}
              <nav className="mobile-menu__nav" aria-label="Mobile navigation">
                {navLinks.map(({ to, label }, i) => (
                  <motion.div
                    key={to}
                    initial={{ opacity: 0, x: 28 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <NavLink
                      to={to}
                      end={to === '/'}
                      className={({ isActive }) =>
                        `mobile-menu__link ${isActive ? 'mobile-menu__link--active' : ''}`
                      }
                    >
                      {label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* CTA */}
              <Link to="/contact" className="mobile-menu__cta">
                Get a Free Quote
              </Link>

              {/* Contact info */}
              <div className="mobile-menu__contact">
                <a href="tel:+919898194788" className="mobile-menu__contact-link">
                  <Phone size={12} />
                  +91 98981 94788
                </a>
                <a href="mailto:contact.zenovate@gmail.com" className="mobile-menu__contact-link">
  <Mail size={12} />
  contact.zenovate@gmail.com
</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}