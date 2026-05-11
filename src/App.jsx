import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import Solutions from './components/sections/Solutions'
import About from './components/sections/About'
import Contact from './components/sections/Contact'

// ─── Section registry ──────────────────────────────────────────────────────
// Add a section:    import it above, add an entry here.
// Remove a section: delete its entry — nothing else needs to change.
// label: null       section is rendered but won't appear in the navbar.
const SECTIONS = [
  { id: 'hero',      label: null,        component: Hero },
  { id: 'solutions', label: 'Solutions', component: Solutions },
  { id: 'about',     label: 'About',     component: About },
  { id: 'contact',   label: 'Contact',   component: Contact },
]

const navLinks = SECTIONS.filter(s => s.label !== null)

export default function App() {
  return (
    <>
      <Navbar links={navLinks} />
      <main>
        {SECTIONS.map(({ id, component: Section }) => (
          <section key={id} id={id}>
            <Section />
          </section>
        ))}
      </main>
    </>
  )
}
