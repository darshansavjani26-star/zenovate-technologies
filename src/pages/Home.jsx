import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import Stats from '../components/Stats/Stats'
import About from '../components/About/About'
import Portfolio from '../components/Portfolio/Portfolio'
import Process from '../components/Process/Process'
import Testimonials from '../components/Testimonials/Testimonials'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit:    { opacity: 0, transition: { duration: 0.3 } },
}

export default function Home() {
  return (
    <motion.main variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Hero />
      <Stats />
      <Services limit={6} />
      <About compact />
      <Process />
      <Portfolio limit={3} />

      {/* CTA Banner */}
      <section style={{ padding: 'var(--section-pad)' }}>
        <motion.div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            background: 'linear-gradient(135deg, rgba(0,229,160,0.1) 0%, rgba(0,170,255,0.1) 100%)',
            border: '1px solid rgba(0,229,160,0.2)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(2.5rem, 5vw, 4rem)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-eyebrow" style={{ justifyContent: 'center' }}>
            Let's build together
          </span>
          <h2 className="section-heading" style={{ marginBottom: '1rem' }}>
            Your next project starts <span className="gradient-text">right here</span>
          </h2>
          <p style={{ color: 'var(--clr-muted)', maxWidth: 480, margin: '0 auto 2rem', fontSize: '1rem', lineHeight: 1.7 }}>
            Whether you have a fully-formed brief or just a spark of an idea, we'd love to hear from you.
          </p>
          <Link to="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
            Start a conversation <ArrowRight size={17} />
          </Link>
        </motion.div>
      </section>

      <Testimonials />
    </motion.main>
  )
}
