import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import './Testimonials.css'

const testimonials = [
  {
    text: "Zenovate delivered our e-commerce platform three weeks ahead of schedule. Conversions jumped 40% in the first month. Genuinely impressive work.",
    name: "Arjun Mehta",
    role: "Founder, CraftHive India",
    avatar: "AM",
    rating: 5,
  },
  {
    text: "The attention to design detail is outstanding. Our SaaS dashboard looks more polished than anything our in-house team had ever produced.",
    name: "Sarah O'Brien",
    role: "CTO, CloudNine Solutions (UK)",
    avatar: "SO",
    rating: 5,
  },
  {
    text: "From discovery to deployment in 8 weeks. The team's communication was impeccable and the final product exceeded every expectation.",
    name: "Rajesh Patel",
    role: "CEO, GreenRoute Logistics",
    avatar: "RP",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__header">
        <span className="section-eyebrow">Client Voices</span>
        <h2 className="section-heading">
          What our clients <span className="gradient-text">actually say</span>
        </h2>
      </div>

      <div className="testimonials__grid">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="tcard glass"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
          >
            <Quote size={28} className="tcard__quote" />
            <p className="tcard__text">{t.text}</p>
            <div className="tcard__stars">{'★'.repeat(t.rating)}</div>
            <div className="tcard__author">
              <div className="tcard__avatar">{t.avatar}</div>
              <div>
                <div className="tcard__name">{t.name}</div>
                <div className="tcard__role">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
