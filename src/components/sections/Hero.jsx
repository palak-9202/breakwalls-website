import { useEffect, useRef } from 'react'
import p5 from 'p5'
import pulseSketch from '../../sketches/pulseNetwork'
import './Hero.css'

export default function Hero() {
  const mountRef = useRef(null)

  useEffect(() => {
    if (!mountRef.current) return
    const sketch = new p5(pulseSketch, mountRef.current)
    return () => sketch.remove()
  }, [])

  return (
    <div className="hero">
      {/* p5 canvas mount — sits behind all content */}
      <div ref={mountRef} className="hero__canvas-mount" aria-hidden="true" />

      <div className="hero__content">
        <p className="hero__eyebrow">Welcome to Breakwalls. We specialise in</p>
        <h1 className="hero__heading">
          Sense and Response <br />Systems<br />
          <em>which go beyond ERP, BI, and Snapshot-Based Planning</em>
        </h1>
        <p className="hero__subtext">
          A minimal, fast, and flexible foundation for your next idea.
          Designed for clarity, built for scale.
        </p>
        <div className="hero__actions">
          <a href="#solutions" className="btn btn--primary">Explore</a>
          <a href="#contact"   className="btn btn--ghost">Get in touch</a>
        </div>
      </div>
    </div>
  )
}
