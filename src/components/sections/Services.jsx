import './Services.css'

const SERVICES = [
  {
    title: 'Custom Development Services',
    bullets: [
      'Tailored solution design built on the Breakwalls platform to match your exact business processes and integration requirements',
      'End-to-end delivery from scoping and architecture through to testing and hypercare — with a dedicated team that carries deep SCM domain expertise',
      'Post-go-live ownership model: we stay engaged to iterate, optimise, and evolve the solution as your business grows',
    ],
  },
  {
    title: 'Project Audits to Maximise Value and Minimise Risks',
    bullets: [
      'Structured health-check of your existing supply chain technology implementations — identifying gaps between intended and realised value',
      'Actionable remediation roadmap prioritised by business impact and implementation complexity',
      'Independent risk assessment covering data quality, process alignment, change management, and technical architecture',
    ],
  },
  {
    title: 'SCM Stimulator Workshop',
    bullets: [
      'Immersive, hands-on simulation of your supply chain operating scenarios — surfacing constraints, bottlenecks, and decision trade-offs in a controlled environment',
      'Collaborative workshop format bringing together planning, commercial, operations, and IT stakeholders to build shared understanding',
      'Workshop outputs include a prioritised opportunity map and a concrete roadmap for supply chain capability improvement',
    ],
  },
]

export default function Services() {
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <h2 className="section-heading">Services</h2>
          <p className="section-subtext">
            Our services are designed to accelerate value realisation, reduce implementation risk,
            and build long-term supply chain capability within your organisation.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map(({ title, bullets }) => (
            <div key={title} className="services__card">
              <div className="services__card-icon" aria-hidden />
              <h3 className="services__card-title">{title}</h3>
              <ul className="services__card-list">
                {bullets.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
