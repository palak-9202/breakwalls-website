import './About.css'

const FIGURES = [
  {
    name: 'Rajesh Verma',
    role: 'Founder & CEO',
    bio: 'Rajesh brings 25 years of supply chain consulting and technology leadership across Asia-Pacific, the Middle East, and Europe. Before founding Breakwalls, he led global S&OP transformations at multinational FMCG and pharmaceutical companies, and held senior roles at SAP and IBM. His belief that most planning failures are systems problems — not people problems — is the founding idea behind Breakwalls.',
  },
  {
    name: 'Ananya Krishnan',
    role: 'Chief Product Officer',
    bio: 'Ananya has spent her career at the intersection of supply chain operations and enterprise software. She joined Breakwalls after a decade in supply chain planning at a Fortune 500 consumer goods company, where she led the global rollout of an integrated demand and supply planning platform. She leads product strategy with a relentless focus on making complex planning workflows genuinely usable.',
  },
  {
    name: 'Marco Delgado',
    role: 'Head of Delivery',
    bio: "Marco oversees all client implementations globally. With a background in large-scale ERP and planning system rollouts across manufacturing, retail, and logistics, he is the architect of Breakwalls' rapid deployment methodology. His team has delivered over 40 supply chain transformation programmes across 18 countries.",
  },
  {
    name: 'Priya Shah',
    role: 'Head of Technology',
    bio: 'Priya leads the engineering and platform team, responsible for the architecture, performance, and security of the Breakwalls platform. She has a deep background in distributed systems and enterprise integration, having previously built data platforms at a global supply chain technology company. She is the driving force behind the cloud-native, open-API architecture.',
  },
]

export default function About() {
  return (
    <div className="about">
      <div className="container">

        <div className="about__header">
          <h2 className="section-heading">About Us</h2>
          <p className="section-subtext">
            We are a team of supply chain practitioners and technologists who have spent careers
            inside the problem. Breakwalls exists because we believe that the tools most
            organisations use to plan and manage their supply chains are simply not good enough.
          </p>
        </div>

        <div className="about__figures">
          {FIGURES.map(({ name, role, bio }) => (
            <div key={name} className="about__figure">
              <div className="about__figure-avatar" aria-hidden />
              <div className="about__figure-text">
                <h3 className="about__figure-name">{name}</h3>
                <p className="about__figure-role">{role}</p>
                <p className="about__figure-bio">{bio}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
