import { motion } from 'framer-motion'
import Services from '../components/Services/Services'
import Process from '../components/Process/Process'
import './Page.css'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

export default function ServicesPage() {
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
          <span className="section-eyebrow">Services</span>
          <h1 className="section-heading page__hero-heading">
            Six disciplines, <br />
            <span className="gradient-text">one accountable team</span>
          </h1>
          <p className="page__hero-sub">
            From a single landing page to a multi-service SaaS platform — we do it all, and we do it well.
          </p>
        </motion.div>
      </div>
      <Services />
      <Process />
    </motion.main>
  )
}
