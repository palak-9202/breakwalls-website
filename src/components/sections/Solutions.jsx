import './Solutions.css'
import {
  LineChart,
  PackageSearch,
  Handshake,
  Network,
  Tags,
  PackageCheck,
} from 'lucide-react'

const CARDS = [
  {
    icon: LineChart,
    iconColor: '#22d3ee',
    title: 'Integrated Business Planning (IBP), S & OP',
    bullets: [
      'Collaborative workflows and scenarios to finalise the business plan',
      'Advanced statistical demand forecasting for secondary and primary sales',
      'Learning algorithms for demand shaping and sensing',
      'Integrated with channel information and supply plans-related analytics',
      'Determine inventory targets and primary demand based on secondary demand',
    ],
  },
  {
    icon: PackageSearch,
    iconColor: '#a78bfa',
    title: 'Integrated Supply Planning',
    bullets: [
      'Material requirements planning driven by real-time supply signals',
      'Capacity and constraint-aware scheduling across manufacturing and distribution',
      'Automated purchase order recommendations with exception-based review',
    ],
  },
  {
    icon: Handshake,
    iconColor: '#fb923c',
    title: 'Supply Partners Collaboration',
    bullets: [
      'Vendor-facing portal for order confirmations, updates, and forecasts',
      'Collaborative exception management with shared resolution workflows',
      'Joint KPI dashboards giving supply partners full visibility into shared commitments',
    ],
  },
  {
    icon: Network,
    iconColor: '#4ade80',
    title: 'Channel Management',
    bullets: [
      'Management of channel sales plans and actuals, channel inventory targets and actuals, and end-user reporting',
      'Integrated with the business plan and S&OP',
      'Data gathering, business partner management, and consolidated supply chain visibility',
    ],
  },
  {
    icon: Tags,
    iconColor: '#f472b6',
    title: 'Product Mix and Price Optimization',
    bullets: [
      'Margin-aware product portfolio analysis and optimisation',
      'Scenario modelling to evaluate pricing decisions against demand and supply constraints',
      'Integrated signals from channel and demand plans to inform mix decisions',
    ],
  },
  {
    icon: PackageCheck,
    iconColor: '#fbbf24',
    title: 'Detailed Order Tracking',
    bullets: [
      'End-to-end order lifecycle visibility from placement to delivery',
      'Real-time status updates across every fulfilment stage',
      'Customer-facing and internal tracking dashboards with configurable alerts',
    ],
  },
]

export default function Solutions() {
  return (
    <div className="solutions">
      <div className="container">
        <div className="solutions__header">
          <h2 className="section-heading">Solutions</h2>
          <p className="section-subtext">
            From integrated business planning to last-mile order tracking, Breakwalls covers
            the full breadth of supply chain decision-making in one connected platform.
          </p>
        </div>

        <div className="solutions__grid">
          {CARDS.map(({ icon: Icon, iconColor, title, bullets }) => (
            <div key={title} className="solutions__card">
              <div className="solutions__card-header">
                <div className="solutions__card-icon-wrap" style={{ '--icon-color': iconColor }}>
                  <Icon className="solutions__card-icon" size={32} strokeWidth={1.6} aria-hidden />
                </div>
                <h3 className="solutions__card-title">{title}</h3>
              </div>
              <ul className="solutions__card-bullets">
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
