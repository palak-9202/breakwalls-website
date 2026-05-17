import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import WhatWeDo from './components/sections/WhatWeDo'
import Solutions from './components/sections/Solutions'
import Testimonials from './components/sections/Testimonials'
import Services from './components/sections/Services'
import WhyUs from './components/sections/WhyUs'
import About from './components/sections/About'
import Contact from './components/sections/Contact'

// ─── Section registry ──────────────────────────────────────────────────────
// Add a section:    import it above, add an entry here.
// Remove a section: delete its entry — nothing else needs to change.
// label: null       section is rendered but won't appear in the navbar.
// theme:            'dark' | 'light' — controls navbar logo/text colour.
const SECTIONS = [
  { id: 'hero',         label: null,          component: Hero,         theme: 'dark'  },
  { id: 'what-we-do',  label: 'What We Do',  component: WhatWeDo,     theme: 'light' },
  { id: 'solutions',   label: 'Solutions',   component: Solutions,    theme: 'light' },
  { id: 'testimonials',label: null,          component: Testimonials, theme: 'dark'  },
  { id: 'services',    label: 'Services',    component: Services,     theme: 'light' },
  { id: 'why-us',      label: 'Why Us',      component: WhyUs,        theme: 'light' },
  { id: 'about',       label: 'About',       component: About,        theme: 'dark'  },
  { id: 'contact',    label: 'Contact',     component: Contact,      theme: 'light' },
]

const navLinks = SECTIONS.filter(s => s.label !== null)

export default function App() {
  return (
    <>
      <Navbar links={navLinks} />
      <main>
        {SECTIONS.map(({ id, component: Section, theme }) => (
          <section key={id} id={id} data-navbar-theme={theme}>
            <Section />
          </section>
        ))}
      </main>
    </>
  )
}
