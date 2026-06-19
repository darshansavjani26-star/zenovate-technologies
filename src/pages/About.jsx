import { motion } from 'framer-motion'
import About from '../components/About/About'
import Stats from '../components/Stats/Stats'
import Testimonials from '../components/Testimonials/Testimonials'
import './Page.css'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

export default function AboutPage() {
  return (
    <motion.main variants={pageVariants} initial="initial" animate="animate" exit="exit" className="page">
      <div className="page__hero">
        <div className="page__hero-glow" />
        <motion.div
          className="page__hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-eyebrow">About Zenovate</span>
          <h1 className="section-heading page__hero-heading">
            The studio behind<br />
            <span className="gradient-text">your digital edge</span>
          </h1>
          <p className="page__hero-sub">
            Founded with a belief that great design and great engineering are inseparable —
            Zenovate Technologies is where craft meets commercial ambition.
          </p>
        </motion.div>
      </div>

      <About />
      <Stats />
      <Testimonials />
    </motion.main>
  )
}
