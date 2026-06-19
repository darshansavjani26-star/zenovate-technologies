import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const highlights = [
  'India & internationally experienced team',
  'Agile development with weekly milestone demos',
  'Post-launch support & maintenance plans',
  'Transparent pricing, no hidden charges',
]

const CSS = `
  .about {
    position: relative;
    background: var(--sage);
    padding: 110px 56px;
    overflow: hidden;
  }

  .about__inner {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 0.95fr 1.05fr;
    gap: 72px;
    align-items: center;
  }

  .about__visual {
    position: relative;
    min-height: 460px;
  }

  .about__img-frame {
    position: relative;
    height: 430px;
    border: 0.5px solid var(--sage3);
    background:
      radial-gradient(circle at 30% 20%, rgba(138,184,122,0.22), transparent 36%),
      rgba(240,245,238,0.86);
    display: grid;
    place-items: center;
    overflow: hidden;
    box-shadow: 0 24px 70px rgba(61,110,56,0.1);
  }

  .about__img-frame::before {
    content: '';
    position: absolute;
    inset: 22px;
    border: 0.5px solid rgba(138,184,122,0.35);
    pointer-events: none;
  }

  .about__logo {
    position: relative;
    z-index: 2;
    width: 58%;
    max-width: 280px;
    height: auto;
  }

  .about__orb {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(138,184,122,0.25), transparent 68%);
    pointer-events: none;
  }

  .about__orb--1 {
    width: 240px;
    height: 240px;
    left: -70px;
    bottom: -80px;
  }

  .about__orb--2 {
    width: 180px;
    height: 180px;
    right: -55px;
    top: -55px;
  }

  .about__badge {
    position: absolute;
    right: 24px;
    bottom: 0;
    display: inline-flex;
    align-items: center;
    gap: 9px;
    background: rgba(240,245,238,0.92);
    border: 0.5px solid var(--sage3);
    padding: 14px 18px;
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--green2);
    backdrop-filter: blur(10px);
    box-shadow: 0 18px 50px rgba(61,110,56,0.12);
  }

  .about__badge-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--green3);
    animation: aboutBlink 2s ease-in-out infinite;
  }

  @keyframes aboutBlink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.25; }
  }

  .about__content {
    position: relative;
    z-index: 2;
  }

  .section-eyebrow {
    display: inline-block;
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    font-size: 9px;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: var(--green2);
    border: 0.5px solid var(--sage3);
    background: rgba(228,237,225,0.7);
    padding: 7px 16px;
    margin-bottom: 22px;
  }

  .section-heading {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 400;
    font-size: clamp(42px, 5vw, 68px);
    line-height: 1.05;
    color: var(--ink);
    margin: 0 0 24px;
    letter-spacing: 0.02em;
  }

  .gradient-text {
    color: var(--green2);
    font-style: italic;
  }

  .about__text {
    font-family: 'Jost', sans-serif;
    font-weight: 300;
    font-size: 13px;
    letter-spacing: 0.08em;
    line-height: 2;
    color: var(--muted);
    max-width: 610px;
    margin: 0 0 18px;
  }

  .about__list {
    list-style: none;
    padding: 0;
    margin: 32px 0 0;
    display: grid;
    gap: 14px;
  }

  .about__list-item {
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    font-size: 11px;
    letter-spacing: 0.12em;
    color: var(--green2);
    text-transform: uppercase;
  }

  .about__list-item svg {
    color: var(--green);
    flex-shrink: 0;
  }

  @media (max-width: 900px) {
    .about {
      padding: 90px 24px;
    }

    .about__inner {
      grid-template-columns: 1fr;
      gap: 52px;
    }

    .about__visual {
      min-height: 420px;
    }
  }

  @media (max-width: 600px) {
    .about {
      padding: 78px 20px;
    }

    .about__img-frame {
      height: 340px;
    }

    .about__visual {
      min-height: 370px;
    }

    .about__badge {
      right: 12px;
      left: 12px;
      justify-content: center;
    }
  }
`

export default function About({ compact }) {
  return (
    <>
      <style>{CSS}</style>

      <section className="about" id="about">
        <div className="about__inner">
          <motion.div
            className="about__visual"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about__img-frame">
              <img
                src="/ZenovateMain.png"
                alt="Zenovate Technologies"
                className="about__logo"
              />
              <div className="about__orb about__orb--1" />
              <div className="about__orb about__orb--2" />
            </div>

            <motion.div
              className="about__badge"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            >
              <div className="about__badge-dot" />
              <span>Open for Projects</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="about__content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-eyebrow">About Us</span>

            <h2 className="section-heading">
              A studio obsessed with <br />
              <span className="gradient-text">craft & outcomes</span>
            </h2>

            <p className="about__text">
              Zenovate Technologies is a full-service digital studio based in Ahmedabad,
              India. We partner with founders, enterprises, and growth-stage startups to
              design and engineer digital products that look world-class and perform at scale.
            </p>

            {!compact && (
              <p className="about__text">
                Our multidisciplinary team spans design, frontend, backend, and DevOps —
                giving you a single, accountable partner from discovery through to deployment
                and beyond.
              </p>
            )}

            <ul className="about__list">
              {highlights.map((h) => (
                <li key={h} className="about__list-item">
                  <CheckCircle2 size={17} />
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  )
}