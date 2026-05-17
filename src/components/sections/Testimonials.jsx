import './Testimonials.css'

const TESTIMONIALS = [
  {
    logo: 'ClientCo',
    quote: 'Breakwalls transformed the way our planning and commercial teams work together. For the first time, everyone is looking at the same numbers in real time — disagreements that used to take days to resolve now get sorted in a single meeting.',
    name: 'Head of Supply Chain',
    company: 'Leading FMCG Manufacturer',
  },
  {
    logo: 'PartnerGroup',
    quote: "The channel visibility module gave us a level of trade inventory insight we simply did not have before. We've reduced excess stock at our distributors by 30% within two quarters while actually improving service levels to end customers.",
    name: 'VP Operations',
    company: 'Regional Distribution Company',
  },
  {
    logo: 'EnterpriseInc',
    quote: 'We evaluated several platforms before choosing Breakwalls. The depth of S&OP functionality combined with the speed of implementation was the deciding factor. We were live in eight weeks — far ahead of our original project plan.',
    name: 'Chief Operating Officer',
    company: 'Multinational Pharma Company',
  },
]

export default function Testimonials() {
  return (
    <div className="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <p className="section-eyebrow">What Our Customers Say</p>
          <h2 className="section-heading">
            Trusted by operations leaders<br />across industries.
          </h2>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map(({ logo, quote, name, company }) => (
            <div key={company} className="testimonials__card">
              <div className="testimonials__logo">{logo}</div>
              <p className="testimonials__quote">"{quote}"</p>
              <div className="testimonials__attribution">
                <span className="testimonials__name">{name}</span>
                <span className="testimonials__company">{company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
