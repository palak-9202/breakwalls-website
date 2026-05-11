import { useState, useEffect } from 'react'
import './Navbar.css'
// import logo from '../assets/icons/logo.svg'   ← uncomment once you have a logo file

export default function Navbar({ links }) {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">

        {/* ── Logo ── */}
        <a href="#hero" className="navbar__logo" onClick={close}>
          {/*
            To use an image logo:
              1. Drop your file in src/assets/icons/ (e.g. logo.svg)
              2. Uncomment the import at the top of this file
              3. Replace the <span> below with:  <img src={logo} alt="Logo" />
          */}
          <span className="navbar__logo-wordmark">LOGO</span>
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
