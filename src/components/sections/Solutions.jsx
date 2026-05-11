import './Solutions.css'

const CARDS = [
  {
    title: 'Integrated Business Planning (IBP), S & OP',
    description: [
      'Collaborative Workflows and Scenarios to finalize the Business Plan',
      'Advanced Statistical Demand Forecasting for Secondary / Primary Sales',
      'Learning algorithms for Demand Shaping and Sensing',
      'Integrated with Channel Information and Supply Plans-related Analytics',
      'Determine Inventory Targets', 
      'Primary Demand Planning based on Secondary Demand'
    ],
  },
  {
    title: 'Channel Management',
    description: [
      'Management of the Channel Sales Plans and Actuals, Channel Inventory Targets and Actuals, related Analytics and End User Reporting',
      'Integrated with Business Plan and S & OP',
      'Data gathering and Business Partners Management',
      'Consolidated Supply Chain Visibility, Early Warnings,Planning and Decision Making'
    ]
  },
  {
    title: 'Global Scale',
    description:
      ['Deploy across regions with a single config. Automatic failover and load distribution are included by default.']
  },
]

export default function Solutions() {
  return (
    <div className="solutions">
      <div className="container">
        <div className="solutions__header">
          <p className="section-eyebrow">Our Solutions</p>
          <h2 className="section-heading">
            Everything you need<br />to move fast.
          </h2>
          <p className="section-subtext">
            Designed from the ground up for builders who refuse to compromise
            between speed and reliability.
          </p>
        </div>

        <div className="solutions__grid">
          {CARDS.map(({ title, description }) => (
            <div key={title} className="solutions__card">
              <div className="solutions__card-icon" aria-hidden />
              <h3 className="solutions__card-title">{title}</h3>
              <p className="solutions__card-desc">
                <ul>
                  {description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
