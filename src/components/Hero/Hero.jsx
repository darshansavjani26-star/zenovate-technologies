import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { gsap } from 'gsap'
import { ArrowRight, Zap } from 'lucide-react'

function ParticleField() {
  const ref = useRef()
  const count = 1600
  const positions = new Float32Array(count * 3)

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
  }

  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.035
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8ab87a"
        size={0.026}
        sizeAttenuation
        depthWrite={false}
        opacity={0.42}
      />
    </Points>
  )
}

const words = ['Websites', 'Mobile Apps', 'SaaS Products', 'E-commerce']

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap');

  :root {
    --sage: #f0f5ee;
    --sage2: #e4ede1;
    --sage3: #c8ddc4;
    --green: #3d6e38;
    --green2: #5a8e54;
    --green3: #8ab87a;
    --ink: #1e3a1a;
    --muted: #7a9a74;
  }

  .hero {
    position: relative;
    min-height: 100vh;
    background: var(--sage);
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    align-items: center;
    overflow: hidden;
    padding: 110px 56px 90px;
    gap: 70px;
  }

  .hero__canvas {
    position: absolute;
    inset: 0;
    z-index: 0;
    opacity: 0.45;
  }

  .hero__glow {
    position: absolute;
    width: 520px;
    height: 520px;
    right: -120px;
    top: 18%;
    background: radial-gradient(circle, rgba(138,184,122,0.22), transparent 68%);
    z-index: 1;
    pointer-events: none;
  }

  .hero__content {
    position: relative;
    z-index: 2;
    max-width: 620px;
  }

  .hero__badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: 0.5px solid var(--sage3);
    background: rgba(228,237,225,0.7);
    padding: 6px 15px;
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    font-size: 9px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--green2);
    margin-bottom: 26px;
  }

  .hero__badge-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--green3);
    animation: heroBlink 2s ease-in-out infinite;
  }

  @keyframes heroBlink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.25; }
  }

  .hero__heading {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 400;
    font-size: clamp(46px, 6vw, 76px);
    line-height: 1.05;
    letter-spacing: 0.02em;
    color: var(--ink);
    margin-bottom: 22px;
    display: flex;
    flex-direction: column;
  }

  .hero__word {
    font-style: italic;
    color: var(--green2);
  }

  .hero__sub {
    font-family: 'Jost', sans-serif;
    font-weight: 300;
    font-size: 13px;
    letter-spacing: 0.1em;
    line-height: 2;
    color: var(--muted);
    max-width: 460px;
    margin-bottom: 36px;
  }

  .hero__cta {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 42px;
  }

  .hero__btn-main {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'Jost', sans-serif;
    font-weight: 500;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--sage);
    background: var(--green);
    border: none;
    padding: 14px 30px;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.3s;
  }

  .hero__btn-main:hover {
    background: var(--ink);
  }

  .hero__btn-ghost {
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--green);
    background: transparent;
    border: 0.5px solid var(--green3);
    padding: 14px 30px;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.3s, color 0.3s;
  }

  .hero__btn-ghost:hover {
    background: var(--green3);
    color: var(--ink);
  }

  .hero__trust {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  .hero__trust-pill {
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--green2);
    border: 0.5px solid var(--sage3);
    padding: 5px 13px;
    background: var(--sage2);
  }

  .hero__visual {
    position: relative;
    z-index: 2;
    min-height: 500px;
    overflow: hidden;
    border: 0.5px solid var(--sage3);
    background: var(--sage2);
    box-shadow: 0 24px 60px rgba(61,110,56,0.12);
  }

  .hero__image {
    width: 100%;
    height: 500px;
    object-fit: cover;
    display: block;
    filter: grayscale(10%) contrast(0.95) brightness(1.05);
  }

  .hero__image-overlay {
    position: absolute;
    left: 24px;
    bottom: 24px;
    right: 24px;
    background: rgba(240,245,238,0.9);
    backdrop-filter: blur(10px);
    border: 0.5px solid var(--sage3);
    padding: 18px 22px;
  }

  .hero__image-overlay span {
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    font-size: 9px;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--green2);
  }

  .hero__image-overlay h3 {
    margin: 6px 0 0;
    font-family: 'Cormorant Garamond', serif;
    font-size: 30px;
    font-weight: 400;
    color: var(--ink);
    letter-spacing: 0.08em;
  }

  @media (max-width: 900px) {
    .hero {
      grid-template-columns: 1fr;
      padding: 95px 24px 80px;
    }

    .hero__visual {
      width: 100%;
      min-height: 420px;
    }

    .hero__image {
      height: 420px;
    }
  }

  @media (max-width: 600px) {
    .hero {
      padding: 82px 20px 70px;
    }

    .hero__cta {
      flex-direction: column;
      align-items: flex-start;
    }

    .hero__visual {
      min-height: 360px;
    }

    .hero__image {
      height: 360px;
    }
  }
`

export default function Hero() {
  const headingRef = useRef()
  const subRef = useRef()
  const badgeRef = useRef()
  const ctaRef = useRef()
  const wordRef = useRef()
  const wordIdx = useRef(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(badgeRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
      })

      gsap.from(headingRef.current.children, {
        opacity: 0,
        y: 60,
        stagger: 0.12,
        duration: 1,
        delay: 0.4,
        ease: 'power4.out',
      })

      gsap.from(subRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 1,
        ease: 'power3.out',
      })

      gsap.from(ctaRef.current.children, {
        opacity: 0,
        y: 20,
        stagger: 0.12,
        duration: 0.7,
        delay: 1.2,
        ease: 'power3.out',
      })

      const cycle = () => {
        wordIdx.current = (wordIdx.current + 1) % words.length

        gsap.to(wordRef.current, {
          opacity: 0,
          y: -18,
          duration: 0.35,
          delay: 1.8,
          ease: 'power2.in',
          onComplete: () => {
            wordRef.current.textContent = words[wordIdx.current]

            gsap.fromTo(
              wordRef.current,
              { opacity: 0, y: 18 },
              {
                opacity: 1,
                y: 0,
                duration: 0.45,
                ease: 'power2.out',
                onComplete: cycle,
              }
            )
          },
        })
      }

      gsap.delayedCall(2, cycle)
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <style>{CSS}</style>

      <section className="hero">
        <div className="hero__canvas">
          <Canvas camera={{ position: [0, 0, 6], fov: 60 }} gl={{ antialias: false }}>
            <ambientLight intensity={0.4} />
            <pointLight position={[5, 5, 5]} intensity={0.4} color="#8ab87a" />
            <ParticleField />
          </Canvas>
        </div>

        <div className="hero__glow" />

        <div className="hero__content">
          <div className="hero__badge" ref={badgeRef}>
            <span className="hero__badge-dot" />
            <Zap size={11} />
            Premium Digital Studio
          </div>

          <h1 className="hero__heading" ref={headingRef}>
            <span>We Design</span>
            <span>
              Smart <span ref={wordRef} className="hero__word">Websites</span>
            </span>
            <span>For Growth</span>
          </h1>

          <p className="hero__sub" ref={subRef}>
            Zenovate Technologies builds clean, premium and conversion-focused digital
            products for modern brands, startups and businesses.
          </p>

          <div className="hero__cta" ref={ctaRef}>
            <Link to="/contact" className="hero__btn-main">
              Start Your Project <ArrowRight size={15} />
            </Link>

            <Link to="/portfolio" className="hero__btn-ghost">
              View Work
            </Link>
          </div>

          <div className="hero__trust">
            <div className="hero__trust-pill">Web Design</div>
            <div className="hero__trust-pill">React Apps</div>
            <div className="hero__trust-pill">SaaS UI</div>
          </div>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="/te.jpg"
            alt="Zenovate Technology"
            className="hero__image"
          />

          <div className="hero__image-overlay">
            <span>Digital Craft</span>
            <h3>Web · Apps · SaaS</h3>
          </div>
        </motion.div>
      </section>
    </>
  )
}