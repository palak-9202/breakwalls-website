import './About.css'

const STATS = [
  { value: '10×',   label: 'Faster deployment' },
  { value: '99.9%', label: 'Uptime guarantee'  },
  { value: '<5ms',  label: 'Average latency'   },
]

export default function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="about__layout">

          <div className="about__text">
            <p className="section-eyebrow">About</p>
            <h2 className="section-heading">
              Built for those<br />who care about craft.
            </h2>
            <p className="section-subtext">
              We believe great software is invisible — it just works. Our platform
              removes the friction between your idea and its execution.
            </p>
            <p className="section-subtext about__text-p2">
              Since day one we've prioritised simplicity, transparency, and developer
              experience above all else.
            </p>
          </div>

          <div className="about__stats">
            {STATS.map(({ value, label }) => (
              <div key={label} className="about__stat">
                <span className="about__stat-value">{value}</span>
                <span className="about__stat-label">{label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
