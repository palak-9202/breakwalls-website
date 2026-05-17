import './Testimonials.css'
import asianPaints from '../../assets/images/asian_paints_logo.webp'
import pidilite    from '../../assets/images/pidilite_logo.webp'
import akzoNobel  from '../../assets/images/akzo_nobel_logo.webp'

const TESTIMONIALS = [
  {
    logo: asianPaints,
    alt: 'Asian Paints',
    quote: 'Breakwalls transformed the way our planning and commercial teams work together. For the first time, everyone is looking at the same numbers in real time — disagreements that used to take days to resolve now get sorted in a single meeting.',
    name: 'Head of Supply Chain',
    company: 'Leading FMCG Manufacturer',
  },
  {
    logo: pidilite,
    alt: 'Pidilite',
    quote: "The channel visibility module gave us a level of trade inventory insight we simply did not have before. We've reduced excess stock at our distributors by 30% within two quarters while actually improving service levels to end customers. The channel visibility module gave us a level of trade inventory insight we simply did not have before. We've reduced excess stock at our distributors by 30% within two quarters while actually improving service levels to end customers.",
    name: 'VP Operations',
    company: 'Regional Distribution Company',
  },
  {
    logo: akzoNobel,
    alt: 'Akzo Nobel',
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
          <h2 className="section-heading">What Our Customers Say</h2>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map(({ logo, alt, quote, name, company }) => (
            <div key={company} className="testimonials__card">
              <div className="testimonials__header-row">
                <div className="testimonials__logo-wrap">
                  <img src={logo} alt={alt} className="testimonials__logo" />
                </div>
                <div className="testimonials__attribution">
                  <span className="testimonials__name">{name}</span>
                  <span className="testimonials__company">{company}</span>
                </div>
              </div>
              <p className="testimonials__quote">"{quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
