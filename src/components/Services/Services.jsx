import { motion } from 'framer-motion'
import { Globe, Smartphone, ShoppingBag, Palette, Code2, Cloud } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    desc: 'Pixel-perfect, blazing-fast websites built with modern frameworks. From landing pages to full-stack web apps.',
    tags: ['React', 'Next.js', 'Node.js'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Native-quality cross-platform apps for iOS and Android, built with React Native for a seamless experience.',
    tags: ['React Native', 'iOS', 'Android'],
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce Development',
    desc: 'High-converting online stores with seamless payment integrations, inventory management, and analytics.',
    tags: ['Shopify', 'WooCommerce', 'Custom'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'Research-driven design that balances aesthetic excellence with frictionless usability and conversion.',
    tags: ['Figma', 'Prototyping', 'Design Systems'],
  },
  {
    icon: Code2,
    title: 'Custom Software',
    desc: 'Bespoke business software engineered to automate your workflows, reduce overhead, and scale with you.',
    tags: ['Python', 'Databases', 'APIs'],
  },
  {
    icon: Cloud,
    title: 'SaaS Solutions',
    desc: 'End-to-end SaaS product development — from architecture and backend to billing and customer dashboards.',
    tags: ['Multi-tenant', 'Stripe', 'AWS'],
  },
]

const CSS = `
  .services {
    position: relative;
    background:
      radial-gradient(circle at 12% 10%, rgba(138,184,122,0.18), transparent 30%),
      radial-gradient(circle at 90% 70%, rgba(61,110,56,0.10), transparent 34%),
      var(--sage);
    padding: 110px 56px;
    overflow: hidden;
  }

  .services__header {
    max-width: 760px;
    margin: 0 auto 64px;
    text-align: center;
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
    margin: 0 0 22px;
    letter-spacing: 0.02em;
  }

  .gradient-text {
    color: var(--green2);
    font-style: italic;
  }

  .services__sub {
    font-family: 'Jost', sans-serif;
    font-weight: 300;
    font-size: 13px;
    letter-spacing: 0.1em;
    line-height: 2;
    color: var(--muted);
    max-width: 520px;
    margin: 0 auto;
  }

  .services__grid {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 26px;
    position: relative;
    z-index: 2;
  }

  .service-card {
    position: relative;
    background: rgba(240,245,238,0.82);
    border: 0.5px solid var(--sage3);
    padding: 34px 30px;
    min-height: 310px;
    overflow: hidden;
    backdrop-filter: blur(12px);
    box-shadow: 0 20px 50px rgba(61,110,56,0.08);
    transition: border-color 0.3s, box-shadow 0.3s;
  }

  .service-card::before {
    content: '';
    position: absolute;
    inset: 16px;
    border: 0.5px solid rgba(138,184,122,0.25);
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
  }

  .service-card:hover {
    border-color: var(--green3);
    box-shadow: 0 26px 70px rgba(61,110,56,0.14);
  }

  .service-card:hover::before {
    opacity: 1;
  }

  .service-card__icon {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    color: var(--green);
    background: var(--sage2);
    border: 0.5px solid var(--sage3);
    margin-bottom: 26px;
  }

  .service-card__title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 28px;
    font-weight: 400;
    color: var(--ink);
    margin: 0 0 14px;
    letter-spacing: 0.04em;
  }

  .service-card__desc {
    font-family: 'Jost', sans-serif;
    font-weight: 300;
    font-size: 12.5px;
    line-height: 1.9;
    letter-spacing: 0.07em;
    color: var(--muted);
    margin: 0 0 24px;
  }

  .service-card__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .service-card__tag {
    font-family: 'Jost', sans-serif;
    font-size: 8.5px;
    font-weight: 400;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--green2);
    background: var(--sage2);
    border: 0.5px solid var(--sage3);
    padding: 6px 10px;
  }

  .service-card__number {
    position: absolute;
    right: 24px;
    bottom: 18px;
    font-family: 'Cormorant Garamond', serif;
    font-size: 54px;
    color: rgba(61,110,56,0.08);
  }

  @media (max-width: 1000px) {
    .services__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 650px) {
    .services {
      padding: 80px 20px;
    }

    .services__grid {
      grid-template-columns: 1fr;
    }
  }
`

const cardVariants = {
  hidden: { opacity: 0, y: 45 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.09,
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export default function Services({ limit }) {
  const items = limit ? services.slice(0, limit) : services

  return (
    <>
      <style>{CSS}</style>

      <section className="services" id="services">
        <motion.div
          className="services__header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-eyebrow">What We Do</span>

          <h2 className="section-heading">
            Services built for <br />
            <span className="gradient-text">ambitious brands</span>
          </h2>

          <p className="services__sub">
            Every service we offer is engineered to deliver measurable results —
            not just beautiful outputs.
          </p>
        </motion.div>

        <div className="services__grid">
          {items.map((s, i) => (
            <motion.div
              key={s.title}
              className="service-card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="service-card__icon">
                <s.icon size={22} />
              </div>

              <h3 className="service-card__title">{s.title}</h3>

              <p className="service-card__desc">{s.desc}</p>

              <div className="service-card__tags">
                {s.tags.map((t) => (
                  <span key={t} className="service-card__tag">
                    {t}
                  </span>
                ))}
              </div>

              <span className="service-card__number">
                {String(i + 1).padStart(2, '0')}
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}