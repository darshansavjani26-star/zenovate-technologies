import { motion } from 'framer-motion'
import { Search, PenTool, Code2, Rocket } from 'lucide-react'
import './Process.css'

const steps = [
  { icon: Search, label: 'Discovery', desc: 'We audit your goals, audience, and competitive landscape to define a clear brief.' },
  { icon: PenTool, label: 'Design', desc: 'UI/UX wireframes and high-fidelity prototypes — reviewed until they feel right.' },
  { icon: Code2, label: 'Build', desc: 'Clean, tested code with CI/CD pipelines and regular milestone demos.' },
  { icon: Rocket, label: 'Launch', desc: 'Deployment, performance tuning, and a 30-day support window post-launch.' },
]

export default function Process() {
  return (
    <section className="process">
      <div className="process__header">
        <span className="section-eyebrow">How We Work</span>
        <h2 className="section-heading">
          From idea to <span className="gradient-text">live product</span>
        </h2>
      </div>

      <div className="process__track">
        <div className="process__line" />
        {steps.map((s, i) => (
          <motion.div
            key={s.label}
            className="process__step"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="process__step-num">{String(i + 1).padStart(2, '0')}</div>
            <div className="process__icon glass">
              <s.icon size={20} />
            </div>
            <h3 className="process__step-title">{s.label}</h3>
            <p className="process__step-desc">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
