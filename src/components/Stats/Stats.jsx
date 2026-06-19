import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 35, suffix: '+', label: 'Happy Clients' },
  { value: 3, suffix: 'yr', label: 'Years of Excellence' },
  { value: 95, suffix: '%', label: 'On-Time Delivery' },
]

const CSS = `
  .stats {
    position: relative;
    background: var(--sage);
    padding: 30px 56px 110px;
    overflow: hidden;
  }

  .stats__inner {
    max-width: 1280px;
    margin: 0 auto;
    border: 0.5px solid var(--sage3);
    background: rgba(240,245,238,0.82);
    backdrop-filter: blur(12px);
    box-shadow: 0 24px 70px rgba(61,110,56,0.1);
    padding: 44px 34px;
  }

  .stats__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .stat {
    position: relative;
    text-align: center;
    padding: 28px 18px;
  }

  .stat:not(:last-child) {
    border-right: 0.5px solid var(--sage3);
  }

  .stat__value {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(42px, 5vw, 66px);
    font-weight: 400;
    line-height: 1;
    color: var(--green2);
    margin-bottom: 14px;
  }

  .stat__label {
    font-family: 'Jost', sans-serif;
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .stat::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 8px;
    width: 24px;
    height: 2px;
    background: var(--green3);
    transform: translateX(-50%);
    opacity: 0.7;
  }

  @media (max-width: 900px) {
    .stats {
      padding: 20px 24px 90px;
    }

    .stats__grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .stat:nth-child(2) {
      border-right: none;
    }

    .stat:nth-child(1),
    .stat:nth-child(2) {
      border-bottom: 0.5px solid var(--sage3);
    }
  }

  @media (max-width: 600px) {
    .stats {
      padding: 10px 20px 80px;
    }

    .stats__inner {
      padding: 24px 16px;
    }

    .stats__grid {
      grid-template-columns: 1fr;
    }

    .stat {
      border-right: none !important;
      border-bottom: 0.5px solid var(--sage3);
    }

    .stat:last-child {
      border-bottom: none;
    }
  }
`

function Counter({ value, suffix }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const counter = { val: 0 }

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.fromTo(
          counter,
          { val: 0 },
          {
            val: value,
            duration: 2,
            ease: 'power2.out',
            onUpdate: () => {
              if (ref.current) {
                ref.current.textContent =
                  Math.round(counter.val) + suffix
              }
            },
          }
        )
      },
    })

    return () => {
      trigger.kill()
    }
  }, [value, suffix])

  return <span ref={ref}>0{suffix}</span>
}

export default function Stats() {
  return (
    <>
      <style>{CSS}</style>

      <section className="stats">
        <motion.div
          className="stats__inner"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="stats__grid">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="stat"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="stat__value">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>

                <div className="stat__label">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  )
}