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
  Flame,
} from 'lucide-react'


/* =========================================================
   GOLDEN PARTICLE FIELD
========================================================= */

function ParticleField() {
  const ref = useRef()

  const count = 1800
  const positions = new Float32Array(count * 3)

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
  }

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.025
      ref.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.15) * 0.04
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
        size={0.028}
        sizeAttenuation
        depthWrite={false}
        opacity={0.55}
      />
    </Points>
  )
}


/* =========================================================
   DIWALI FLOATING SPARKLES
========================================================= */

const DIWALI_SPARKLES = Array.from({ length: 26 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  delay: Math.random() * 4,
  duration: 2.5 + Math.random() * 2.5,
  size: 5 + Math.random() * 7,
}))


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
   CSS
========================================================= */

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

    --gold: #d4b06a;
    --gold2: #b88a3b;
    --gold3: #f0d596;

    --cream: #fbfaf2;
    --deepGreen: #0d2410;
  }


  /* =====================================================
     HERO
  ===================================================== */

  .hero {
    position: relative;
    min-height: 100vh;

    background:
      radial-gradient(
        circle at 78% 28%,
        rgba(212,176,106,0.16),
        transparent 28%
      ),
      radial-gradient(
        circle at 15% 75%,
        rgba(138,184,122,0.10),
        transparent 30%
      ),
      var(--sage);

    display: grid;
    grid-template-columns: 1.02fr 0.98fr;

    align-items: center;

    overflow: hidden;

    padding: 110px 56px 90px;

    gap: 65px;
  }


  /* =====================================================
     GOLDEN PARTICLE CANVAS
  ===================================================== */

  .hero__canvas {
    position: absolute;
    inset: 0;

    z-index: 0;

    opacity: 0.45;

    pointer-events: none;
  }


  /* =====================================================
     DIWALI SPARKLES
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

    color: var(--gold);

    opacity: 0;

    animation:
      sparkleFloat var(--sparkle-duration) ease-in-out
      var(--sparkle-delay) infinite;
  }


  .hero__sparkle::before,
  .hero__sparkle::after {
    content: '';

    position: absolute;

    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);

    background: currentColor;

    border-radius: 50%;
  }


  .hero__sparkle::before {
    width: 100%;
    height: 22%;
  }


  .hero__sparkle::after {
    width: 22%;
    height: 100%;
  }


  @keyframes sparkleFloat {
    0% {
      opacity: 0;
      transform: translateY(15px) scale(0.6) rotate(0deg);
    }

    25% {
      opacity: 0.65;
    }

    50% {
      opacity: 1;
      transform: translateY(-8px) scale(1) rotate(45deg);
    }

    75% {
      opacity: 0.55;
    }

    100% {
      opacity: 0;
      transform: translateY(-25px) scale(0.6) rotate(90deg);
    }
  }


  /* =====================================================
     GOLDEN GLOW
  ===================================================== */

  .hero__glow {
    position: absolute;

    width: 620px;
    height: 620px;

    right: -160px;
    top: 5%;

    background:
      radial-gradient(
        circle,
        rgba(212,176,106,0.25),
        rgba(212,176,106,0.10) 32%,
        transparent 70%
      );

    z-index: 1;

    pointer-events: none;

    filter: blur(5px);
  }


  .hero__glow-left {
    position: absolute;

    width: 420px;
    height: 420px;

    left: -200px;
    bottom: -150px;

    background:
      radial-gradient(
        circle,
        rgba(138,184,122,0.18),
        transparent 68%
      );

    z-index: 1;

    pointer-events: none;
  }


  /* =====================================================
     RANGOLI DECORATION
  ===================================================== */

  .hero__rangoli {
    position: absolute;

    width: 190px;
    height: 190px;

    right: 4%;
    top: 8%;

    border: 1px solid rgba(212,176,106,0.20);

    border-radius: 50%;

    transform: rotate(45deg);

    z-index: 1;

    opacity: 0.75;
  }


  .hero__rangoli::before {
    content: '';

    position: absolute;

    inset: 22px;

    border: 1px solid rgba(212,176,106,0.22);

    transform: rotate(45deg);
  }


  .hero__rangoli::after {
    content: '✦';

    position: absolute;

    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%) rotate(-45deg);

    font-size: 42px;

    color: rgba(212,176,106,0.42);
  }


  /* =====================================================
     HERO CONTENT
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

    border: 0.5px solid var(--gold);

    background: rgba(212,176,106,0.12);

    padding: 7px 15px;

    font-family: 'Jost', sans-serif;

    font-weight: 400;

    font-size: 9px;

    letter-spacing: 0.3em;

    text-transform: uppercase;

    color: #a3813c;

    margin-bottom: 26px;
  }


  .hero__badge-dot {
    width: 6px;
    height: 6px;

    border-radius: 50%;

    background: var(--gold);

    animation: heroBlink 2s ease-in-out infinite;
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
     HERO HEADING
  ===================================================== */

  .hero__heading {
    font-family: 'Cormorant Garamond', serif;

    font-weight: 400;

    font-size: clamp(44px, 5.4vw, 72px);

    line-height: 1.04;

    letter-spacing: 0.015em;

    color: var(--ink);

    margin-bottom: 16px;

    display: flex;

    flex-direction: column;
  }


  .hero__word {
    font-style: italic;

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

    font-size: 15px;

    letter-spacing: 0.03em;

    color: var(--green);

    margin-bottom: 16px;
  }


  .hero__sub {
    font-family: 'Jost', sans-serif;

    font-weight: 300;

    font-size: 13px;

    letter-spacing: 0.07em;

    line-height: 2;

    color: var(--muted);

    max-width: 480px;

    margin-bottom: 30px;
  }


  /* =====================================================
     CTA
  ===================================================== */

  .hero__cta {
    display: flex;

    align-items: center;

    gap: 14px;

    margin-bottom: 34px;
  }


  .hero__btn-main {
    display: inline-flex;

    align-items: center;

    gap: 8px;

    font-family: 'Jost', sans-serif;

    font-weight: 500;

    font-size: 9px;

    letter-spacing: 0.22em;

    text-transform: uppercase;

    color: var(--sage);

    background: var(--green);

    border: none;

    padding: 14px 27px;

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
      0 10px 30px rgba(30,58,26,0.18);
  }


  .hero__btn-ghost {
    display: inline-flex;

    align-items: center;

    gap: 7px;

    font-family: 'Jost', sans-serif;

    font-weight: 400;

    font-size: 9px;

    letter-spacing: 0.22em;

    text-transform: uppercase;

    color: var(--green);

    background: transparent;

    border: 0.5px solid var(--green3);

    padding: 14px 27px;

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


  /* =====================================================
     HIGHLIGHTS
  ===================================================== */

  .hero__highlights {
    display: flex;

    flex-direction: column;

    gap: 9px;
  }


  .hero__highlight-item {
    display: flex;

    align-items: center;

    gap: 10px;

    font-family: 'Jost', sans-serif;

    font-weight: 400;

    font-size: 11.5px;

    letter-spacing: 0.05em;

    color: var(--ink);
  }


  .hero__highlight-check {
    display: grid;

    place-items: center;

    width: 17px;
    height: 17px;

    border-radius: 50%;

    background: rgba(90,142,84,0.15);

    color: var(--green2);

    flex-shrink: 0;
  }


  /* =====================================================
     DIWALI VISUAL CARD
  ===================================================== */

  .hero__visual {
    position: relative;

    z-index: 3;

    min-height: 500px;

    overflow: hidden;

    border: 0.5px solid rgba(212,176,106,0.45);

    background:
      linear-gradient(
        145deg,
        #eef5eb 0%,
        #f7f4e8 48%,
        #e7eddf 100%
      );

    box-shadow:
      0 30px 70px rgba(61,110,56,0.13);

    display: flex;

    align-items: center;

    justify-content: center;
  }


  /* =====================================================
     CARD DECORATION
  ===================================================== */

  .diwali-card-glow {
    position: absolute;

    width: 360px;
    height: 360px;

    right: -90px;
    top: -90px;

    border-radius: 50%;

    background:
      radial-gradient(
        circle,
        rgba(212,176,106,0.32),
        transparent 68%
      );

    filter: blur(4px);
  }


  .diwali-card-glow-left {
    position: absolute;

    width: 260px;
    height: 260px;

    left: -100px;
    bottom: -100px;

    border-radius: 50%;

    background:
      radial-gradient(
        circle,
        rgba(90,142,84,0.17),
        transparent 70%
      );
  }


  /* =====================================================
     HANGING LANTERNS
  ===================================================== */

  .diwali-lantern {
    position: absolute;

    width: 22px;
    height: 32px;

    border: 1px solid rgba(184,138,59,0.65);

    background:
      linear-gradient(
        180deg,
        rgba(255,224,148,0.75),
        rgba(212,176,106,0.25)
      );

    box-shadow:
      0 0 18px rgba(212,176,106,0.35);

    transform-origin: top center;

    animation: lanternSwing 4s ease-in-out infinite;
  }


  .diwali-lantern::before {
    content: '';

    position: absolute;

    width: 1px;
    height: 45px;

    background: rgba(184,138,59,0.55);

    left: 50%;
    bottom: 100%;
  }


  .diwali-lantern::after {
    content: '';

    position: absolute;

    width: 8px;
    height: 8px;

    border-radius: 50%;

    background: #f3c85f;

    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);

    box-shadow:
      0 0 16px #f3c85f;
  }


  .diwali-lantern--one {
    top: 0;
    right: 16%;

    animation-delay: -1s;
  }


  .diwali-lantern--two {
    top: 0;
    right: 8%;

    transform: scale(0.75);

    animation-delay: -2s;
  }


  @keyframes lanternSwing {
    0%,
    100% {
      transform: rotate(3deg);
    }

    50% {
      transform: rotate(-3deg);
    }
  }


  /* =====================================================
     CENTRAL DIYA
  ===================================================== */

  .diya-wrapper {
    position: absolute;

    bottom: 62px;
    left: 50%;

    transform: translateX(-50%);

    width: 180px;
    height: 100px;

    display: flex;

    justify-content: center;

    align-items: flex-end;
  }


  .diya {
    position: relative;

    width: 130px;
    height: 48px;

    background:
      linear-gradient(
        180deg,
        #e3bf70,
        #a97830
      );

    border-radius:
      50%
      50%
      45%
      45%;

    box-shadow:
      0 12px 30px rgba(184,138,59,0.25);
  }


  .diya::before {
    content: '';

    position: absolute;

    width: 88px;
    height: 24px;

    left: 21px;
    top: -7px;

    background:
      radial-gradient(
        ellipse,
        #fff0bd,
        #d4b06a
      );

    border-radius: 50%;
  }


  .diya__flame {
    position: absolute;

    width: 23px;
    height: 39px;

    left: 54px;
    top: -42px;

    background:
      linear-gradient(
        180deg,
        #fff7cf,
        #f0c55b 55%,
        #d98232
      );

    border-radius:
      55% 45% 60% 40%;

    transform: rotate(3deg);

    filter:
      drop-shadow(
        0 0 13px rgba(240,197,91,0.85)
      );

    animation: flameFlicker 1.8s ease-in-out infinite;
  }


  .diya__flame::after {
    content: '';

    position: absolute;

    width: 8px;
    height: 18px;

    left: 7px;
    top: 11px;

    background: #fffdf0;

    border-radius: 50%;
  }


  @keyframes flameFlicker {
    0%,
    100% {
      transform: rotate(3deg) scale(1);
    }

    50% {
      transform: rotate(-4deg) scale(1.08);
    }
  }


  /* =====================================================
     CARD CONTENT
  ===================================================== */

  .diwali-card-content {
    position: relative;

    z-index: 5;

    width: 100%;

    height: 100%;

    min-height: 500px;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    text-align: center;

    padding: 50px 35px 145px;
  }


  .diwali-card-icon {
    width: 48px;
    height: 48px;

    border-radius: 50%;

    display: grid;

    place-items: center;

    color: var(--gold2);

    border: 1px solid rgba(184,138,59,0.35);

    background: rgba(255,255,255,0.45);

    margin-bottom: 20px;

    box-shadow:
      0 10px 30px rgba(184,138,59,0.08);
  }


  .diwali-card-small {
    font-family: 'Jost', sans-serif;

    font-size: 9px;

    letter-spacing: 0.35em;

    text-transform: uppercase;

    color: var(--gold2);

    margin-bottom: 12px;
  }


  .diwali-card-title {
    font-family: 'Cormorant Garamond', serif;

    font-weight: 400;

    font-size: clamp(38px, 4vw, 58px);

    line-height: 0.95;

    color: var(--ink);

    margin: 0 0 12px;
  }


  .diwali-card-title span {
    color: var(--gold2);

    font-style: italic;
  }


  .diwali-card-subtitle {
    font-family: 'Jost', sans-serif;

    font-size: 10px;

    line-height: 1.8;

    letter-spacing: 0.15em;

    text-transform: uppercase;

    color: var(--green);

    max-width: 300px;
  }


  .diwali-card-brand {
    position: absolute;

    top: 30px;
    left: 30px;

    display: flex;

    align-items: center;

    gap: 9px;

    font-family: 'Jost', sans-serif;

    font-size: 9px;

    letter-spacing: 0.22em;

    text-transform: uppercase;

    color: var(--ink);
  }


  .diwali-card-brand-mark {
    width: 27px;
    height: 27px;

    display: grid;

    place-items: center;

    border: 1px solid rgba(184,138,59,0.5);

    color: var(--gold2);

    font-family: 'Cormorant Garamond', serif;

    font-size: 17px;
  }


  /* =====================================================
     BOTTOM OFFER LABEL
  ===================================================== */

  .diwali-offer-strip {
    position: absolute;

    left: 25px;
    right: 25px;
    bottom: 25px;

    padding: 13px 17px;

    background:
      rgba(255,255,255,0.55);

    backdrop-filter: blur(10px);

    border:
      1px solid rgba(212,176,106,0.28);

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 8px;
  }


  .diwali-offer-strip span {
    font-family: 'Jost', sans-serif;

    font-size: 8px;

    letter-spacing: 0.2em;

    text-transform: uppercase;

    color: var(--green);
  }


  /* =====================================================
     RESPONSIVE
  ===================================================== */

  @media (max-width: 1000px) {

    .hero {
      grid-template-columns: 1fr;

      padding:
        100px
        35px
        80px;

      gap: 45px;
    }


    .hero__content {
      max-width: 760px;
    }


    .hero__visual {
      width: 100%;

      min-height: 500px;
    }


    .hero__rangoli {
      right: -60px;
      top: 8%;
    }
  }


  @media (max-width: 600px) {

    .hero {
      padding:
        85px
        20px
        65px;

      gap: 35px;
    }


    .hero__heading {
      font-size: 48px;
    }


    .hero__cta {
      flex-direction: column;

      align-items: flex-start;
    }


    .hero__btn-main,
    .hero__btn-ghost {
      width: auto;
    }


    .hero__visual {
      min-height: 430px;
    }


    .diwali-card-content {
      min-height: 430px;

      padding:
        45px
        25px
        125px;
    }


    .diwali-card-title {
      font-size: 43px;
    }


    .diya-wrapper {
      bottom: 58px;

      transform:
        translateX(-50%)
        scale(0.78);
    }


    .diwali-offer-strip {
      left: 15px;
      right: 15px;
      bottom: 15px;
    }


    .hero__rangoli {
      width: 130px;
      height: 130px;

      right: -45px;
    }
  }
`


/* =========================================================
   HERO COMPONENT
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

      gsap.from(headingRef.current.children, {
        opacity: 0,
        y: 60,
        stagger: 0.12,
        duration: 1,
        delay: 0.4,
        ease: 'power4.out',
      })


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

      gsap.from(ctaRef.current.children, {
        opacity: 0,
        y: 20,
        stagger: 0.12,
        duration: 0.7,
        delay: 1.2,
        ease: 'power3.out',
      })


      /* Offer list */

      gsap.from(highlightsRef.current.children, {
        opacity: 0,
        x: -16,
        stagger: 0.1,
        duration: 0.6,
        delay: 1.5,
        ease: 'power3.out',
      })

    })


    return () => ctx.revert()

  }, [])


  return (
    <>
      <style>{CSS}</style>


      <section className="hero">


        {/* =================================================
            GOLDEN PARTICLES
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
              intensity={0.5}
              color="#d4b06a"
            />

            <ParticleField />

          </Canvas>
        </div>


        {/* =================================================
            FLOATING SPARKLES
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
            BACKGROUND GLOW
        ================================================= */}

        <div className="hero__glow" />

        <div className="hero__glow-left" />

        <div className="hero__rangoli" />


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
            Give your business a brighter digital presence
            this festive season.
          </p>


          {/* Description */}

          <p
            className="hero__sub"
            ref={subRef}
          >
            Build a professional website that makes your
            brand stand out, attract more customers and
            turn your ideas into a powerful digital presence.
          </p>


          {/* CTA */}

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

              <Sparkles size={13} />

            </Link>

          </div>


          {/* Offer Highlights */}

          <div
            className="hero__highlights"
            ref={highlightsRef}
          >

            {offerHighlights.map((item) => (

              <div
                className="hero__highlight-item"
                key={item}
              >

                <span className="hero__highlight-check">

                  <Check
                    size={10}
                    strokeWidth={3}
                  />

                </span>

                {item}

              </div>

            ))}

          </div>

        </div>


        {/* =================================================
            RIGHT DIWALI CREATIVE
        ================================================= */}

        <motion.div
          className="hero__visual"

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


          {/* Background glows */}

          <div className="diwali-card-glow" />

          <div className="diwali-card-glow-left" />


          {/* Hanging lanterns */}

          <div className="diwali-lantern diwali-lantern--one" />

          <div className="diwali-lantern diwali-lantern--two" />


          {/* Brand */}

          <div className="diwali-card-brand">

            <div className="diwali-card-brand-mark">
              Z
            </div>

            Zenovate

          </div>


          {/* Main card content */}

          <div className="diwali-card-content">


            <div className="diwali-card-icon">

              <Flame size={21} />

            </div>


            <div className="diwali-card-small">

              Festive Digital Celebration

            </div>


            <h2 className="diwali-card-title">

              Happy

              <br />

              <span>Diwali</span>

            </h2>


            <p className="diwali-card-subtitle">

              Brighter Ideas
              <br />

              Bigger Dreams
              <br />

              Powerful Digital Experiences

            </p>


            {/* Diya */}

            <div className="diya-wrapper">

              <div className="diya">

                <div className="diya__flame" />

              </div>

            </div>


          </div>


          {/* Offer strip */}

          <div className="diwali-offer-strip">

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

        </motion.div>


      </section>
    </>
  )
}