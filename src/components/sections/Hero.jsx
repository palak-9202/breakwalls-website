import { useEffect, useRef, useState } from 'react'
import p5 from 'p5'
import pulseSketch from '../../sketches/pulseNetwork'
import './Hero.css'

const SLIDES = [
  {
    heading: (
      <>
        Sense and Response Systems beyond ERP, BI, and Snapshot-Based Planning
      </>
    ),
    // subtext:
    //   'Real-time sensing of demand and supply signals — so your organisation responds to change before it becomes a problem.',
  },
  {
    heading: (
      <>
        Integrated Planning, Execution Tracking, and Advanced Analytics<br />
      </>
    ),
    // subtext:
    //   'From integrated business planning to last-mile order tracking, Breakwalls brings every layer of supply chain decision-making into one connected platform.',
  },
]

const INTERVAL = 7000

export default function Hero() {
  const mountRef  = useRef(null)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!mountRef.current) return
    const sketch = new p5(pulseSketch, mountRef.current)
    return () => sketch.remove()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % SLIDES.length)
    }, INTERVAL)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="hero">
      <div ref={mountRef} className="hero__canvas-mount" aria-hidden="true" />

      <div className="hero__content">
        <p className="hero__eyebrow">Welcome to Breakwalls</p>

        <div className="hero__carousel" key={current}>
          <h1 className="hero__heading">{SLIDES[current].heading}</h1>
          <p className="hero__subtext">{SLIDES[current].subtext}</p>
        </div>

        <div className="hero__dots" aria-hidden="true">
          {SLIDES.map((_, i) => (
            <span
              key={i}
              className={`hero__dot${i === current ? ' hero__dot--active' : ''}`}
            />
          ))}
        </div>

        <div className="hero__actions">
          <a href="#solutions" className="btn btn--primary">Explore</a>
          <a href="#contact"   className="btn btn--ghost">Get in touch</a>
        </div>
      </div>
    </div>
  )
}
