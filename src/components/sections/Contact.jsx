import './Contact.css'

export default function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact__inner">
          <h2 className="section-heading">Get in Touch</h2>

          <ul className="contact__details">
            <li className="contact__item">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
              <a href="mailto:hello@breakwalls.com">information@breakwalls.biz</a>
            </li>
            <li className="contact__item">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.5 2 2 0 0 1 3.6 1.32h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.06 6.06l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>
              <div className="contact__multiline">
                <a href="tel:+912212345678">+91 78998 24798</a>
                <a href="tel:+919876543210">+1 214 572 5224</a>
              </div>
            </li>
            <li className="contact__item">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.998 0C5.372 0 0 5.373 0 12.004c0 2.117.554 4.102 1.522 5.833L.022 24l6.335-1.66A11.945 11.945 0 0 0 12 24c6.626 0 12-5.373 12-11.996C24 5.373 18.626 0 11.998 0zm.002 21.818a9.816 9.816 0 0 1-5.006-1.366l-.36-.214-3.757.984 1.003-3.651-.234-.374A9.808 9.808 0 0 1 2.182 12c0-5.42 4.4-9.818 9.818-9.818 5.42 0 9.818 4.399 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/></svg>
              <a href="https://wa.me/919988776655" target="_blank" rel="noreferrer">+91 78998 24798</a>
            </li>
            <li className="contact__item">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <address className="contact__address">
                breakWalls Technologies Private Limited <br />
                708, Oxford Towers, Kodihalli, HAL Airport Road, <br />
                Bangalore, Karnataka, <br />
                Pin Code - 560008, <br />
                India
              </address>
            </li>
          </ul>
        </div>
      </div>

      <div className="contact__footer">
        <p className="contact__copyright">© Copyright {new Date().getFullYear()}. All Rights Reserved.</p>
      </div>
    </div>
  )
}
