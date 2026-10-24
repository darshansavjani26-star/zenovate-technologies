import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { gsap } from 'gsap'
import {
  ArrowRight,
  Check,
  Sparkles,
  Star,
} from 'lucide-react'


/* =========================================================
   PARTICLE FIELD
========================================================= */

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
    if (ref.current) {
      ref.current.rotation.y =
        state.clock.elapsedTime * 0.035
    }
  })

  return (
    <Points
      ref={ref}
      positions={positions}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#d4b06a"
        size={0.026}
        sizeAttenuation
        depthWrite={false}
        opacity={0.35}
      />
    </Points>
  )
}


/* =========================================================
   DIWALI SPARKLES
========================================================= */

const DIWALI_SPARKLES = Array.from(
  { length: 22 },
  (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 4,
    duration: 2.5 + Math.random() * 2,
    size: 5 + Math.random() * 5,
  })
)


/* =========================================================
   OFFER
========================================================= */

const offerHighlights = [
  '7 Page Professional Website',
  'FREE Hosting (1 Year)',
  'FREE Premium Domain (1 Year)',
  '1 FREE Service',
]


/* =========================================================
   RANGOLI PETALS
========================================================= */

const OUTER_PETALS = Array.from(
  { length: 12 },
  (_, i) => i * 30
)

const INNER_PETALS = Array.from(
  { length: 12 },
  (_, i) => ({
    rotate: 15 + i * 30,
    fill: i % 2 === 0 ? '#5a8e54' : '#d4b06a',
    opacity: i % 2 === 0 ? 0.3 : 0.5,
  })
)


/* =========================================================
   CSS
========================================================= */

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500&display=swap');


  :root {
    --sage: #f0f5ee;
    --sage2: #e4ede1;
    --sage3: #c8ddc4;

    --green: #3d6e38;
    --green2: #5a8e54;
    --green3: #8ab87a;

    --ink: #1e3a1a;
    --muted: #4d6e48;

    --gold: #d4b06a;
    --gold2: #b88a3b;
    --gold3: #f0d596;
    --gold-text: #85621c;

    --cream: #faf7ed;
  }


  /* =====================================================
     HERO
  ===================================================== */

  .hero {
    position: relative;

    min-height: 100vh;

    background:
      radial-gradient(
        circle at 78% 40%,
        rgba(212,176,106,0.20),
        transparent 34%
      ),
      radial-gradient(
        circle at 0% 100%,
        rgba(138,184,122,0.26),
        transparent 36%
      ),
      var(--sage);

    display: grid;

    grid-template-columns: 1.05fr 0.95fr;

    align-items: center;

    overflow: hidden;

    padding: 110px 56px 90px;

    gap: 70px;
  }


  /* =====================================================
     PARTICLE CANVAS
  ===================================================== */

  .hero__canvas {
    position: absolute;

    inset: 0;

    z-index: 0;

    opacity: 0.35;

    pointer-events: none;
  }


  /* =====================================================
     GOLD SPARKLES
  ===================================================== */

  .hero__sparkles {
    position: absolute;

    inset: 0;

    z-index: 1;

    overflow: hidden;

    pointer-events: none;
  }


  .hero__sparkle {
    position: absolute;

    width: var(--sparkle-size);
    height: var(--sparkle-size);

    opacity: 0;

    color: var(--gold);

    animation:
      diwaliSparkle
      var(--sparkle-duration)
      ease-in-out
      var(--sparkle-delay)
      infinite;
  }


  .hero__sparkle::before,
  .hero__sparkle::after {
    content: '';

    position: absolute;

    left: 50%;
    top: 50%;

    background: currentColor;

    border-radius: 50%;

    transform: translate(-50%, -50%);
  }


  .hero__sparkle::before {
    width: 100%;
    height: 20%;
  }


  .hero__sparkle::after {
    width: 20%;
    height: 100%;
  }


  @keyframes diwaliSparkle {

    0% {
      opacity: 0;

      transform:
        translateY(12px)
        scale(0.5)
        rotate(0deg);
    }

    30% {
      opacity: 0.5;
    }

    50% {
      opacity: 0.9;

      transform:
        translateY(-8px)
        scale(1)
        rotate(45deg);
    }

    80% {
      opacity: 0.4;
    }

    100% {
      opacity: 0;

      transform:
        translateY(-22px)
        scale(0.5)
        rotate(90deg);
    }
  }


  /* =====================================================
     CONTENT
  ===================================================== */

  .hero__content {
    position: relative;

    z-index: 3;

    max-width: 620px;
  }


  /* =====================================================
     BADGE
  ===================================================== */

  .hero__badge {
    display: inline-flex;

    align-items: center;

    gap: 8px;

    border: 1px solid var(--gold);

    background: rgba(212,176,106,0.14);

    padding: 7px 16px;

    font-family: 'Jost', sans-serif;

    font-weight: 400;

    font-size: 10px;

    letter-spacing: 0.3em;

    text-transform: uppercase;

    color: var(--gold-text);

    margin-bottom: 28px;
  }


  .hero__badge-dot {
    width: 6px;
    height: 6px;

    border-radius: 50%;

    background: var(--gold2);

    animation:
      heroBlink
      2s
      ease-in-out
      infinite;
  }


  @keyframes heroBlink {

    0%,
    100% {
      opacity: 1;
    }

    50% {
      opacity: 0.25;
    }
  }


  /* =====================================================
     HEADING
  ===================================================== */

  .hero__heading {
    font-family:
      'Cormorant Garamond',
      serif;

    font-weight: 400;

    font-size:
      clamp(46px, 6vw, 82px);

    line-height: 1.03;

    letter-spacing: 0.01em;

    color: var(--ink);

    margin: 0 0 18px;

    display: flex;

    flex-direction: column;

    text-wrap: balance;
  }


  .hero__word {
    font-style: italic;

    font-weight: 500;

    color: var(--green2);
  }


  .hero__gold-word {
    color: var(--gold2);

    font-style: italic;
  }


  /* =====================================================
     SUBTITLE
  ===================================================== */

  .hero__subtitle {
    font-family: 'Jost', sans-serif;

    font-weight: 400;

    font-size: 16px;

    letter-spacing: 0.03em;

    color: var(--green);

    margin: 0 0 14px;
  }


  .hero__sub {
    font-family: 'Jost', sans-serif;

    font-weight: 300;

    font-size: 14px;

    letter-spacing: 0.04em;

    line-height: 1.9;

    color: var(--muted);

    max-width: 470px;

    margin: 0 0 32px;
  }


  /* =====================================================
     BUTTONS
  ===================================================== */

  .hero__cta {
    display: flex;

    flex-wrap: wrap;

    align-items: center;

    gap: 14px;

    margin-bottom: 40px;
  }


  .hero__btn-main {
    display: inline-flex;

    align-items: center;

    gap: 10px;

    min-height: 48px;

    font-family: 'Jost', sans-serif;

    font-weight: 500;

    font-size: 11px;

    letter-spacing: 0.24em;

    text-transform: uppercase;

    color: var(--sage);

    background: var(--green);

    border: none;

    padding: 0 30px;

    cursor: pointer;

    text-decoration: none;

    transition:
      background 0.3s,
      transform 0.3s,
      box-shadow 0.3s;
  }


  .hero__btn-main:hover {
    background: var(--ink);

    transform: translateY(-2px);

    box-shadow:
      0 14px 28px
      rgba(30,58,26,0.18);
  }


  .hero__btn-ghost {
    display: inline-flex;

    align-items: center;

    gap: 8px;

    min-height: 48px;

    font-family: 'Jost', sans-serif;

    font-weight: 400;

    font-size: 11px;

    letter-spacing: 0.24em;

    text-transform: uppercase;

    color: var(--green);

    background: transparent;

    border: 1px solid var(--green3);

    padding: 0 30px;

    cursor: pointer;

    text-decoration: none;

    transition:
      background 0.3s,
      color 0.3s,
      transform 0.3s;
  }


  .hero__btn-ghost:hover {
    background: var(--green3);

    color: var(--ink);

    transform: translateY(-2px);
  }


  .hero__btn-main:focus-visible,
  .hero__btn-ghost:focus-visible {
    outline: 2px solid var(--green);

    outline-offset: 3px;
  }


  /* =====================================================
     HIGHLIGHTS
  ===================================================== */

  .hero__highlights {
    display: grid;

    grid-template-columns:
      repeat(auto-fit, minmax(230px, 1fr));

    gap: 12px 24px;

    padding-top: 24px;

    border-top:
      1px solid
      rgba(184,138,59,0.45);
  }


  .hero__highlight-item {
    display: flex;

    align-items: center;

    gap: 12px;

    font-family: 'Jost', sans-serif;

    font-weight: 400;

    font-size: 13px;

    letter-spacing: 0.04em;

    color: var(--ink);
  }


  .hero__highlight-check {
    display: grid;

    place-items: center;

    width: 20px;
    height: 20px;

    border-radius: 50%;

    background: rgba(90,142,84,0.16);

    color: var(--green);

    flex-shrink: 0;
  }


  /* =====================================================
     RIGHT SIDE - ARCH
  ===================================================== */

  .hero__visual-wrap {
    position: relative;

    z-index: 3;

    display: flex;

    justify-content: center;
  }


  .arch {
    position: relative;

    width: 100%;

    max-width: 440px;

    aspect-ratio: 440 / 560;

    overflow: hidden;

    border-radius: 220px 220px 0 0;

    border:
      1px solid
      rgba(184,138,59,0.7);

    background:
      linear-gradient(
        160deg,
        #faf7ed 0%,
        #edf4e9 55%,
        #dfeadb 100%
      );

    box-shadow:
      0 0 0 8px rgba(212,176,106,0.12),
      0 34px 70px rgba(61,110,56,0.16);
  }


  .arch__art {
    position: absolute;

    left: 0;
    right: 0;
    top: 17%;

    width: 100%;
    height: auto;

    display: block;
  }


  .arch__label {
    position: absolute;

    left: 0;
    right: 0;
    top: 11%;

    text-align: center;

    font-family: 'Jost', sans-serif;

    font-size: 10px;

    letter-spacing: 0.34em;

    text-transform: uppercase;

    color: var(--gold-text);
  }


  /* Rangoli motion */

  .arch__spin {
    transform-box: fill-box;

    transform-origin: center;

    animation: archSpin 90s linear infinite;
  }


  .arch__spin--rev {
    animation:
      archSpin
      140s
      linear
      reverse
      infinite;
  }


  @keyframes archSpin {

    to {
      transform: rotate(360deg);
    }
  }


  .arch__flame {
    transform-box: fill-box;

    transform-origin: 50% 100%;

    animation:
      flameFlicker
      1.8s
      ease-in-out
      infinite;
  }


  @keyframes flameFlicker {

    0%,
    100% {
      transform: rotate(2deg) scaleY(1);
    }

    35% {
      transform: rotate(-3deg) scaleY(1.07);
    }

    70% {
      transform: rotate(3deg) scaleY(0.96);
    }
  }


  .arch__halo {
    animation:
      archHalo
      3.6s
      ease-in-out
      infinite;
  }


  @keyframes archHalo {

    0%,
    100% {
      opacity: 0.7;
    }

    50% {
      opacity: 1;
    }
  }


  /* Lanterns */

  .arch__lantern {
    position: absolute;

    top: 0;

    transform-origin: 50% 0;

    animation:
      lanternSwing
      5s
      ease-in-out
      infinite;

    z-index: 4;
  }


  .arch__lantern::before {
    content: '';

    display: block;

    width: 1px;

    height: var(--string);

    margin: 0 auto;

    background: rgba(184,138,59,0.6);
  }


  .arch__lantern span {
    display: block;

    width: var(--w);
    height: var(--h);

    border: 1px solid var(--gold2);

    background:
      linear-gradient(
        180deg,
        rgba(255,225,150,0.95),
        var(--tail)
      );

    box-shadow:
      0 0 20px
      rgba(212,176,106,0.55);
  }


  .arch__lantern--one {
    left: 24%;

    --string: 54px;
    --w: 22px;
    --h: 30px;
    --tail: rgba(212,176,106,0.3);
  }


  .arch__lantern--two {
    right: 22%;

    --string: 84px;
    --w: 18px;
    --h: 25px;
    --tail: rgba(138,184,122,0.4);

    animation-delay: -2s;
  }


  @keyframes lanternSwing {

    0%,
    100% {
      transform: rotate(1.8deg);
    }

    50% {
      transform: rotate(-1.8deg);
    }
  }


  /* Offer ribbon */

  .arch__offer {
    position: absolute;

    left: 0;
    right: 0;
    bottom: 0;

    z-index: 8;

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 12px;

    padding: 18px 24px;

    background: rgba(255,255,255,0.6);

    border-top:
      1px solid
      rgba(184,138,59,0.4);
  }


  .arch__offer span {
    font-family: 'Jost', sans-serif;

    font-weight: 500;

    font-size: 10px;

    letter-spacing: 0.24em;

    text-transform: uppercase;

    color: var(--green);
  }


  .arch__offer svg {
    color: var(--gold2);
  }


  /* =====================================================
     RESPONSIVE
  ===================================================== */

  @media (max-width: 900px) {

    .hero {
      grid-template-columns: 1fr;

      padding:
        95px
        24px
        80px;

      gap: 56px;
    }
  }


  @media (max-width: 600px) {

    .hero {
      padding:
        82px
        20px
        70px;
    }


    .hero__cta {
      flex-direction: column;

      align-items: flex-start;
    }


    .arch {
      border-radius: 180px 180px 0 0;
    }
  }


  @media (prefers-reduced-motion: reduce) {

    .hero__sparkle,
    .hero__badge-dot,
    .arch__spin,
    .arch__flame,
    .arch__halo,
    .arch__lantern {
      animation: none;
    }

    .hero__sparkle {
      opacity: 0.6;
    }
  }
`


/* =========================================================
   HERO
========================================================= */

export default function Hero() {

  const headingRef = useRef()
  const subtitleRef = useRef()
  const subRef = useRef()

  const badgeRef = useRef()
  const ctaRef = useRef()
  const highlightsRef = useRef()


  useEffect(() => {

    const ctx = gsap.context(() => {

      /* Badge */

      gsap.from(badgeRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
      })


      /* Heading */

      gsap.from(
        headingRef.current.children,
        {
          opacity: 0,
          y: 60,
          stagger: 0.12,
          duration: 1,
          delay: 0.4,
          ease: 'power4.out',
        }
      )


      /* Subtitle */

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.8,
        delay: 0.85,
        ease: 'power3.out',
      })


      /* Description */

      gsap.from(subRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 1,
        ease: 'power3.out',
      })


      /* Buttons */

      gsap.from(
        ctaRef.current.children,
        {
          opacity: 0,
          y: 20,
          stagger: 0.12,
          duration: 0.7,
          delay: 1.2,
          ease: 'power3.out',
        }
      )


      /* Highlights */

      gsap.from(
        highlightsRef.current.children,
        {
          opacity: 0,
          x: -16,
          stagger: 0.1,
          duration: 0.6,
          delay: 1.5,
          ease: 'power3.out',
        }
      )

    })


    return () => ctx.revert()

  }, [])


  return (
    <>
      <style>{CSS}</style>


      <section className="hero">


        {/* =================================================
            PARTICLE BACKGROUND
        ================================================= */}

        <div
          className="hero__canvas"
          aria-hidden="true"
        >
          <Canvas
            camera={{
              position: [0, 0, 6],
              fov: 60,
            }}
            gl={{
              antialias: false,
            }}
          >

            <ambientLight intensity={0.4} />

            <pointLight
              position={[5, 5, 5]}
              intensity={0.4}
              color="#d4b06a"
            />

            <ParticleField />

          </Canvas>
        </div>


        {/* =================================================
            DIWALI SPARKLES
        ================================================= */}

        <div
          className="hero__sparkles"
          aria-hidden="true"
        >

          {DIWALI_SPARKLES.map((sparkle) => (

            <span
              key={sparkle.id}
              className="hero__sparkle"

              style={{
                left: `${sparkle.left}%`,
                top: `${sparkle.top}%`,

                '--sparkle-size':
                  `${sparkle.size}px`,

                '--sparkle-duration':
                  `${sparkle.duration}s`,

                '--sparkle-delay':
                  `${sparkle.delay}s`,
              }}
            />

          ))}

        </div>


        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="hero__content">


          {/* Badge */}

          <div
            className="hero__badge"
            ref={badgeRef}
          >

            <span className="hero__badge-dot" />

            <Sparkles size={11} />

            Diwali Special Offer

          </div>


          {/* Heading */}

          <h1
            className="hero__heading"
            ref={headingRef}
          >

            <span>
              Make Your Business
            </span>

            <span className="hero__word">

              Shine This

              <span className="hero__gold-word">
                {' '}Diwali
              </span>

            </span>

          </h1>


          {/* Subtitle */}

          <p
            className="hero__subtitle"
            ref={subtitleRef}
          >
            Launch Your Business Website
            This Diwali
          </p>


          {/* Description */}

          <p
            className="hero__sub"
            ref={subRef}
          >
            Give your business a brighter digital
            presence this festive season with a
            professional website designed to attract
            customers and grow your brand.
          </p>


          {/* Buttons */}

          <div
            className="hero__cta"
            ref={ctaRef}
          >

            <Link
              to="/contact"
              className="hero__btn-main"
            >

              Start Your Project

              <ArrowRight size={15} />

            </Link>


            <Link
              to="/pricing"
              className="hero__btn-ghost"
            >

              View Offer

            </Link>

          </div>


          {/* Highlights */}

          <div
            className="hero__highlights"
            ref={highlightsRef}
          >

            {offerHighlights.map((item) => (

              <div
                className="hero__highlight-item"
                key={item}
              >

                <span
                  className="hero__highlight-check"
                >

                  <Check
                    size={11}
                    strokeWidth={3}
                  />

                </span>

                {item}

              </div>

            ))}

          </div>

        </div>


        {/* =================================================
            RIGHT SIDE
            ARCH WITH RANGOLI AND DIYA
        ================================================= */}

        <motion.div
          className="hero__visual-wrap"

          initial={{
            opacity: 0,
            x: 70,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            delay: 0.8,
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div className="arch">


            {/* Hanging lanterns */}

            <div
              className="
                arch__lantern
                arch__lantern--one
              "
              aria-hidden="true"
            >
              <span />
            </div>

            <div
              className="
                arch__lantern
                arch__lantern--two
              "
              aria-hidden="true"
            >
              <span />
            </div>


            {/* Rangoli + diya */}

            <svg
              className="arch__art"
              viewBox="0 0 480 480"
              role="img"
              aria-label="Rangoli pattern around a lit diya"
            >

              <defs>

                <radialGradient
                  id="archGlow"
                  cx="50%"
                  cy="50%"
                  r="50%"
                >
                  <stop
                    offset="0"
                    stopColor="#FFD66E"
                    stopOpacity="0.8"
                  />
                  <stop
                    offset="0.5"
                    stopColor="#E9B94F"
                    stopOpacity="0.26"
                  />
                  <stop
                    offset="1"
                    stopColor="#E9B94F"
                    stopOpacity="0"
                  />
                </radialGradient>

                <linearGradient
                  id="archBowl"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0" stopColor="#E2BE6B" />
                  <stop offset="1" stopColor="#A97931" />
                </linearGradient>

                <linearGradient
                  id="archFlame"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0" stopColor="#FFF8D7" />
                  <stop offset="0.55" stopColor="#F0C55B" />
                  <stop offset="1" stopColor="#D98232" />
                </linearGradient>

              </defs>


              {/* Dotted rings */}

              <circle
                className="arch__spin arch__spin--rev"
                cx="240"
                cy="240"
                r="226"
                fill="none"
                stroke="#b88a3b"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="0.1 13"
                opacity="0.75"
              />

              <circle
                cx="240"
                cy="240"
                r="208"
                fill="none"
                stroke="#b88a3b"
                strokeWidth="1"
                opacity="0.35"
              />


              {/* Outer petals */}

              <g
                className="arch__spin"
                fill="none"
                stroke="#b88a3b"
                strokeWidth="1.4"
                opacity="0.85"
              >
                {OUTER_PETALS.map((rotate) => (
                  <ellipse
                    key={rotate}
                    cx="240"
                    cy="62"
                    rx="13"
                    ry="34"
                    transform={`rotate(${rotate} 240 240)`}
                  />
                ))}
              </g>


              {/* Inner petals */}

              <g
                className="arch__spin arch__spin--rev"
                stroke="#b88a3b"
                strokeWidth="1"
                strokeOpacity="0.65"
              >
                {INNER_PETALS.map((petal) => (
                  <ellipse
                    key={petal.rotate}
                    cx="240"
                    cy="112"
                    rx="15"
                    ry="30"
                    fill={petal.fill}
                    fillOpacity={petal.opacity}
                    transform={`rotate(${petal.rotate} 240 240)`}
                  />
                ))}
              </g>


              {/* Centre disc */}

              <circle
                cx="240"
                cy="240"
                r="132"
                fill="#faf7ed"
                stroke="#b88a3b"
                strokeWidth="1"
                strokeOpacity="0.6"
              />

              <circle
                cx="240"
                cy="240"
                r="120"
                fill="none"
                stroke="#5a8e54"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="0.1 9"
                opacity="0.5"
              />


              {/* Glow */}

              <circle
                className="arch__halo"
                cx="240"
                cy="226"
                r="118"
                fill="url(#archGlow)"
              />


              {/* Diya */}

              <path
                d="M168 258 C176 306 304 306 312 258 Z"
                fill="url(#archBowl)"
              />

              <ellipse
                cx="240"
                cy="258"
                rx="72"
                ry="12"
                fill="#FFF0BD"
              />

              <ellipse
                cx="240"
                cy="258"
                rx="52"
                ry="7"
                fill="#d4b06a"
              />

              <path
                d="M312 258 C330 254 338 246 342 238 C332 240 322 246 312 250 Z"
                fill="#b8832f"
              />

              <path
                className="arch__flame"
                d="M240 168 C262 200 264 228 240 254 C216 228 218 200 240 168 Z"
                fill="url(#archFlame)"
              />

              <path
                className="arch__flame"
                d="M240 214 C247 226 247 238 240 250 C233 238 233 226 240 214 Z"
                fill="#FFFDF0"
              />

            </svg>


            {/* Label */}

            <div className="arch__label">
              Zenovate · Shubh Diwali
            </div>


            {/* Bottom offer ribbon */}

            <div className="arch__offer">

              <Star
                size={12}
                fill="currentColor"
              />

              <span>
                Special Diwali Website Offer
              </span>

              <Star
                size={12}
                fill="currentColor"
              />

            </div>

          </div>

        </motion.div>


      </section>
    </>
  )
}