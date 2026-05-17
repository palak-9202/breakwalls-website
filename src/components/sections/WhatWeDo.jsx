import './WhatWeDo.css'

const SUBSECTIONS = [
  {
    title: 'Integrated Plan, Execution Tracking and Analytics',
    bullets: [
      'End-to-end visibility connecting your business plan to live execution across every function',
      'Real-time tracking of key performance indicators with automated variance alerts',
      'Unified analytics layer enabling faster, evidence-based decisions at every level of the organisation',
    ],
  },
  {
    title: 'Multi Tier Extended Supply Chain',
    bullets: [
      'Full visibility across Tier 1, 2, and 3 supply partners — not just your direct suppliers',
      'Collaborative planning workflows that pull upstream and downstream partners into a single view',
      'Early warning systems that surface disruption signals before they impact production or service levels',
    ],
  },
  {
    title: 'Sense and Response',
    bullets: [
      'Continuous sensing of demand signals, supply variances, and market events in near real time',
      'Automated alert and response workflows that trigger the right actions without manual intervention',
      'Adaptive planning engines that rebalance inventory, capacity, and commitments as conditions change',
    ],
  },
  {
    title: 'Modular, Flexible and Rapid Implementations',
    bullets: [
      'Deploy only the modules you need today — expand incrementally without rearchitecting',
      'Pre-built connectors for SAP, Oracle, and all major ERP and data platforms reduce integration effort dramatically',
      'Structured rapid-deployment methodology gets you live in weeks, not months',
    ],
  },
  {
    title: 'In-Line, Contextual Analytics',
    bullets: [
      'Insights surfaced directly inside planning and execution workflows — no tab-switching, no separate BI tool',
      'Contextual recommendations presented at the exact moment a decision needs to be made',
      'Full drill-down from executive summary to individual transaction without leaving your workflow',
    ],
  },
  {
    title: 'Include Innovations in IT Roadmap',
    bullets: [
      'Cloud-native architecture designed to absorb new capabilities — AI, ML, IoT — as your IT roadmap evolves',
      'Open APIs and modular design make it straightforward to plug in emerging technologies without rework',
      'Governance-ready security and compliance framework aligned with enterprise IT standards',
    ],
  },
]

export default function WhatWeDo() {
  return (
    <div className="what-we-do">
      <div className="container">
        <div className="what-we-do__header">
          <h2 className="section-heading">What We Do</h2>
          <p className="section-subtext">
            Breakwalls brings together demand, supply, channel, and partner data into a single,
            actionable system — so your organisation can sense change and respond faster than
            the competition.
          </p>
        </div>

        <div className="what-we-do__grid">
          {SUBSECTIONS.map(({ title, bullets }) => (
            <div key={title} className="what-we-do__card">
              <h3 className="what-we-do__card-title">{title}</h3>
              <ul className="what-we-do__card-bullets">
                {bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
