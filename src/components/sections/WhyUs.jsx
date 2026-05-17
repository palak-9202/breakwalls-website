import './WhyUs.css'

const REASONS = [
  {
    number: '01',
    title: 'Deep Supply Chain Domain Expertise',
    body: 'Over two decades of combined experience delivering supply chain solutions across FMCG, pharmaceuticals, and industrial sectors gives our team the domain depth to solve problems most software vendors never encounter.',
  },
  {
    number: '02',
    title: 'Proven Rapid Deployment Methodology',
    body: 'Our modular architecture and pre-built ERP connectors are designed to get you live in weeks, not months — with minimal disruption to day-to-day operations and a clear, structured path from kick-off to go-live.',
  },
  {
    number: '03',
    title: 'End-to-End Ownership',
    body: "We don't implement and walk away. Our team stays engaged through go-live and beyond, owning outcomes alongside you — iterating on the solution, supporting your users, and ensuring long-term value is realised.",
  },
  {
    number: '04',
    title: 'Technology-Agnostic Integration',
    body: 'Built to connect with SAP, Oracle, and all major ERP and data platforms, Breakwalls gives you the flexibility to integrate without a wholesale technology overhaul — protecting your existing investments while extending their value.',
  },
]

export default function WhyUs() {
  return (
    <div className="why-us">
      <div className="container">
        <div className="why-us__header">
          <p className="section-eyebrow">Why Us</p>
          <h2 className="section-heading">
            What makes Breakwalls<br />the right choice.
          </h2>
        </div>

        <div className="why-us__grid">
          {REASONS.map(({ number, title, body }) => (
            <div key={number} className="why-us__item">
              <span className="why-us__number">{number}</span>
              <h3 className="why-us__title">{title}</h3>
              <p className="why-us__body">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
