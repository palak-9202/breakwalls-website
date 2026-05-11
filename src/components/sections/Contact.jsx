import './Contact.css'

export default function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact__inner">
          <p className="section-eyebrow contact__eyebrow">Contact</p>
          <h2 className="contact__heading">
            Let's build something<br />together.
          </h2>
          <p className="contact__sub">
            Have a question or want to work with us?<br />
            We'd love to hear from you.
          </p>
          <a href="mailto:hello@example.com" className="contact__btn">
            Say hello →
          </a>
        </div>
      </div>
    </div>
  )
}
