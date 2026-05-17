import { useState, useEffect } from 'react'
import './Navbar.css'
import logoWhite from '../assets/images/Asset 1@3x.png'
import logoBlack from '../assets/images/Asset 2@3x.png'

const NAV_HEIGHT = 64

export default function Navbar({ links }) {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [isDark,    setIsDark]    = useState(true) // hero is first and dark

  useEffect(() => {
    const checkTheme = () => {
      const midY = NAV_HEIGHT / 2
      const themed = document.querySelectorAll('[data-navbar-theme]')
      let theme = 'dark'
      themed.forEach(el => {
        const rect = el.getBoundingClientRect()
        if (rect.top <= midY && rect.bottom > midY) {
          theme = el.dataset.navbarTheme // last (most nested) match wins
        }
      })
      setIsDark(theme === 'dark')
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      checkTheme()
    }

    checkTheme()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}${isDark ? ' navbar--dark' : ''}`}>
      <div className="navbar__inner">

        {/* ── Logo ── */}
        <a href="#hero" className="navbar__logo" onClick={close}>
          <div className="navbar__logo-wrap">
            <img
              src={logoWhite}
              alt="Breakwalls"
              className="navbar__logo-img"
              style={{ opacity: isDark ? 1 : 0 }}
            />
            <img
              src={logoBlack}
              alt=""
              aria-hidden="true"
              className="navbar__logo-img navbar__logo-img--overlay"
              style={{ opacity: isDark ? 0 : 1 }}
            />
          </div>
        </a>

        {/* ── Desktop nav links ── */}
        <ul className="navbar__links">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className="navbar__link">{label}</a>
            </li>
          ))}
        </ul>

        {/* ── CTA button ── */}
        <a href="#contact" className="navbar__cta">Get in touch</a>

        {/* ── Mobile hamburger ── */}
        <button
          className={`navbar__burger${menuOpen ? ' navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      <div className={`navbar__drawer${menuOpen ? ' navbar__drawer--open' : ''}`}>
        {links.map(({ id, label }) => (
          <a key={id} href={`#${id}`} className="navbar__drawer-link" onClick={close}>
            {label}
          </a>
        ))}
        <a href="#contact" className="navbar__drawer-cta" onClick={close}>
          Get in touch
        </a>
      </div>
    </nav>
  )
}
