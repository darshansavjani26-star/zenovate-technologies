import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check, ArrowRight, MessageCircle, X } from "lucide-react"

const PHONE = "919898194788"

const plans = [
  {
    name: "Website Development",
    price: "₹7,999",
    tag: "Starter",
    desc: "Perfect for small businesses & startups",
    features: ["Responsive Design", "5 Pages", "Contact Form", "Basic SEO", "WhatsApp Integration"],
  },
  {
    name: "Business Website",
    price: "₹14,999",
    tag: "Most Popular",
    popular: true,
    desc: "Ideal for growing businesses",
    features: ["10+ Pages", "Premium Design", "Blog System", "Advanced SEO", "Performance Optimization"],
  },
  {
    name: "E-Commerce Store",
    price: "₹24,999",
    tag: "Advanced",
    desc: "Full-featured online store",
    features: ["Product Management", "Payment Gateway", "Cart System", "Admin Dashboard", "Mobile Responsive"],
  },
]

const faqs = [
  { q: "How long does a project take?", a: "Typically 2–4 weeks depending on complexity." },
  { q: "Do you provide post-launch support?", a: "Yes, we offer 30-day free support after launch." },
  { q: "Can I customize a package?", a: "Yes, every package can be customized as per your requirement." },
  { q: "What is your payment process?", a: "50% advance to start, 50% on final delivery." },
]

const trustStats = [
  { value: "50+", label: "Projects" },
  { value: "35+", label: "Clients" },
  { value: "95%", label: "Success Rate" },
  { value: "24h", label: "Response" },
]

const basePrices = {
  "Website Development": 7999,
  "Business Website": 14999,
  "E-Commerce Store": 24999,
  "App Development": 34999,
  "UI/UX Design": 9999,
  "Digital Solutions": 19999,
  "IT Consulting": 4999,
}

const CSS = `
.pg {
  background: var(--sage);
  font-family: 'Jost', sans-serif;
  color: var(--ink);
  overflow-x: hidden;
}

.ph {
  padding: 96px 48px 80px;
  text-align: center;
  background: #fff;
  border-bottom: 0.5px solid var(--sage3);
  position: relative;
  overflow: hidden;
}

.ph::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 60% 50% at 50% 0%, rgba(106,170,94,0.08), transparent 70%);
  pointer-events: none;
}

.ph-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 9px;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: var(--green2);
  border: 0.5px solid var(--sage3);
  padding: 5px 14px;
  margin-bottom: 24px;
}

.ph-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--green3);
  animation: blink 2s ease-in-out infinite;
}

@keyframes blink {
  0%,100% { opacity: 1; }
  50% { opacity: 0.25; }
}

.ph-h1 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 300;
  font-size: clamp(38px, 5vw, 64px);
  line-height: 1.08;
  color: var(--ink);
  margin-bottom: 16px;
}

.ph-h1 em {
  color: var(--green2);
}

.ph-sub {
  font-size: 13px;
  letter-spacing: 0.08em;
  line-height: 1.9;
  color: var(--muted);
  max-width: 520px;
  margin: 0 auto;
}

.trust-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 900px;
  margin: 48px auto 0;
  border: 0.5px solid var(--sage3);
  background: var(--sage);
}

.trust-item {
  padding: 20px 12px;
  border-right: 0.5px solid var(--sage3);
}

.trust-item:last-child {
  border-right: none;
}

.trust-value {
  font-family: 'Cormorant Garamond', serif;
  font-size: 34px;
  color: var(--green2);
}

.trust-label {
  font-size: 8px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--muted);
}

.plans-wrap {
  padding: 72px 48px;
  background: var(--sage);
}

.plans-section-label {
  font-size: 9px;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: var(--green2);
  text-align: center;
  margin-bottom: 40px;
}

.plans-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--sage3);
  border: 0.5px solid var(--sage3);
  max-width: 1080px;
  margin: 0 auto;
}

.plan {
  background: #fff;
  padding: 36px 30px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.plan:hover {
  background: var(--sage);
}

.plan--pop {
  background: #1a2e17;
  color: #fff;
}

.plan--pop:hover {
  background: #0e1a0c;
}

.premium-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  background: #d4b06a;
  color: #0e1a0c;
  font-size: 8px;
  letter-spacing: 0.22em;
  padding: 5px 10px;
  text-transform: uppercase;
}

.plan-tag {
  display: inline-block;
  font-size: 9px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--green2);
  border: 0.5px solid var(--sage3);
  padding: 4px 12px;
  margin-bottom: 20px;
  align-self: flex-start;
}

.plan--pop .plan-tag {
  color: #d4b06a;
  border-color: rgba(212,176,106,0.35);
}

.plan-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 24px;
  color: var(--ink);
  margin-bottom: 4px;
}

.plan--pop .plan-name {
  color: #fff;
}

.plan-desc {
  font-size: 10px;
  letter-spacing: 0.08em;
  color: var(--muted);
  margin-bottom: 22px;
}

.plan--pop .plan-desc {
  color: rgba(255,255,255,0.45);
}

.plan-price {
  font-family: 'Cormorant Garamond', serif;
  font-size: 44px;
  color: var(--green2);
  line-height: 1;
}

.plan--pop .plan-price {
  color: #d4b06a;
}

.plan-from {
  font-size: 9px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--muted);
  margin: 6px 0 24px;
}

.plan-divider {
  height: 0.5px;
  background: var(--sage3);
  margin-bottom: 22px;
}

.plan--pop .plan-divider {
  background: rgba(255,255,255,0.08);
}

.plan-features {
  list-style: none;
  flex: 1;
  margin-bottom: 28px;
}

.plan-features li {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 11px;
  letter-spacing: 0.06em;
  color: var(--muted);
  padding: 7px 0;
  border-bottom: 0.5px solid var(--sage2);
}

.plan--pop .plan-features li {
  color: rgba(255,255,255,0.65);
  border-bottom-color: rgba(255,255,255,0.06);
}

.plan-check {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: rgba(106,170,94,0.15);
  display: grid;
  place-items: center;
  color: var(--green3);
}

.plan-btn {
  width: 100%;
  padding: 12px 18px;
  font-size: 9px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: var(--green);
  color: #fff;
}

.plan--pop .plan-btn {
  background: #d4b06a;
  color: #0e1a0c;
}

.calculator-wrap {
  padding: 72px 48px;
  background: #fff;
  border-top: 0.5px solid var(--sage3);
  border-bottom: 0.5px solid var(--sage3);
}

.calculator {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 0.7fr;
  gap: 32px;
  align-items: stretch;
}

.calc-form,
.calc-result {
  border: 0.5px solid var(--sage3);
  background: var(--sage);
  padding: 32px;
}

.calc-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 38px;
  font-weight: 300;
  margin-bottom: 10px;
}

.calc-title em {
  color: var(--green2);
}

.calc-sub {
  font-size: 12px;
  color: var(--muted);
  line-height: 1.8;
  margin-bottom: 24px;
}

.calc-field {
  margin-bottom: 16px;
}

.calc-field label {
  display: block;
  font-size: 8.5px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 7px;
}

.calc-field select,
.calc-field input {
  width: 100%;
  padding: 12px 14px;
  border: 0.5px solid var(--sage3);
  background: #fff;
  color: var(--ink);
  outline: none;
}

.calc-result {
  background: #1a2e17;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.calc-label {
  font-size: 9px;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: #d4b06a;
}

.calc-price {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(46px, 6vw, 76px);
  color: #d4b06a;
  line-height: 1;
  margin: 18px 0;
}

.calc-note {
  font-size: 11px;
  color: rgba(255,255,255,0.5);
  line-height: 1.8;
  margin-bottom: 24px;
}

.custom-wrap {
  padding: 72px 48px;
  background: var(--sage);
}

.custom-inner {
  max-width: 860px;
  margin: 0 auto;
}

.custom-h {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(28px, 4vw, 44px);
  font-weight: 300;
  margin-bottom: 8px;
}

.custom-h em {
  color: var(--green2);
}

.custom-p {
  font-size: 12px;
  letter-spacing: 0.08em;
  line-height: 1.9;
  color: var(--muted);
  margin-bottom: 32px;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-field label {
  font-size: 8.5px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--muted);
}

.form-field input,
.form-field select,
.form-field textarea {
  width: 100%;
  padding: 11px 14px;
  border: 0.5px solid var(--sage3);
  background: #fff;
  color: var(--ink);
  outline: none;
  border-radius: 0;
}

.form-field textarea {
  min-height: 110px;
  resize: vertical;
}

.form-full,
.form-submit {
  grid-column: 1 / -1;
}

.form-submit {
  padding: 14px 28px;
  background: var(--ink);
  color: #fff;
  font-size: 10px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.form-submit:hover {
  background: var(--green);
}

.faq-wrap {
  padding: 64px 48px;
  background: var(--sage);
}

.faq-inner {
  max-width: 720px;
  margin: 0 auto;
}

.faq-head {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(26px, 3vw, 38px);
  font-weight: 300;
  margin-bottom: 32px;
  text-align: center;
}

.faq-head em {
  color: var(--green2);
}

.faq-item {
  border-bottom: 0.5px solid var(--sage3);
}

.faq-q {
  width: 100%;
  background: none;
  border: none;
  padding: 18px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 13px;
  color: var(--ink);
  text-align: left;
}

.faq-a {
  font-size: 11px;
  letter-spacing: 0.08em;
  line-height: 1.9;
  color: var(--muted);
  overflow: hidden;
}

.cta-band {
  padding: 56px 48px;
  background: #1a2e17;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
}

.cta-band-h {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(26px, 3.5vw, 44px);
  color: #fff;
  line-height: 1.1;
}

.cta-band-h em {
  color: #d4b06a;
}

.cta-band-p {
  font-size: 11px;
  letter-spacing: 0.1em;
  color: rgba(255,255,255,0.45);
  margin-top: 8px;
}

.cta-band-btn {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-size: 10px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #0e1a0c;
  background: #d4b06a;
  padding: 14px 28px;
  text-decoration: none;
}

.toast {
  position: fixed;
  bottom: 28px;
  right: 28px;
  background: var(--ink);
  color: #fff;
  font-size: 11px;
  letter-spacing: 0.1em;
  padding: 14px 20px;
  border-left: 3px solid var(--green3);
  z-index: 999;
  display: flex;
  align-items: center;
  gap: 10px;
}

@media (max-width: 900px) {
  .ph {
    padding: 72px 24px 56px;
  }

  .trust-strip {
    grid-template-columns: repeat(2, 1fr);
  }

  .plans-wrap,
  .calculator-wrap,
  .custom-wrap,
  .faq-wrap {
    padding: 48px 20px;
  }

  .plans-grid,
  .calculator,
  .form-grid {
    grid-template-columns: 1fr;
  }

  .cta-band {
    padding: 44px 24px;
    flex-direction: column;
    align-items: flex-start;
  }

  .cta-band-btn {
    width: 100%;
    justify-content: center;
  }
}
`

const FadeIn = ({ children, delay = 0, y = 24 }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="faq-item">
      <button className="faq-q" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span>{open ? <X size={14} /> : "+"}</span>
      </button>

      <motion.div
        className="faq-a"
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35 }}
      >
        {a}
      </motion.div>
    </div>
  )
}

export default function Pricing() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Website Development",
    budget: "₹10k – ₹25k",
    details: "",
  })

  const [calc, setCalc] = useState({
    service: "Website Development",
    pages: 5,
    admin: "No",
  })

  const [toast, setToast] = useState(false)

  const estimatedPrice =
    (basePrices[calc.service] || 7999) +
    Number(calc.pages) * 800 +
    (calc.admin === "Yes" ? 7000 : 0)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const updateCalc = (e) => setCalc({ ...calc, [e.target.name]: e.target.value })

  const openWhatsApp = (service) => {
    const msg = encodeURIComponent(
      `Hello Zenovate Technologies,\n\nI am interested in: ${service}\n\nPlease share more details.`
    )
    window.open(`https://wa.me/${PHONE}?text=${msg}`, "_blank")
  }

  const submitForm = (e) => {
    e.preventDefault()

    const msg = encodeURIComponent(
      `New Project Inquiry — Zenovate Technologies\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\nBudget: ${form.budget}\n\nProject Details:\n${form.details}`
    )

    window.open(`https://wa.me/${PHONE}?text=${msg}`, "_blank")
    setForm({ name: "", email: "", phone: "", service: "Website Development", budget: "₹10k – ₹25k", details: "" })
    setToast(true)
    setTimeout(() => setToast(false), 3000)
  }

  return (
    <>
      <style>{CSS}</style>

      <div className="pg">
        <section className="ph">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="ph-eyebrow">
              <span className="ph-dot" />
              Zenovate Pricing
            </div>

            <h1 className="ph-h1">
              Transparent Pricing.<br />
              <em>Tailored Solutions.</em>
            </h1>

            <p className="ph-sub">
              Choose a starting package or calculate an estimated project cost based on your requirement.
            </p>

            <div className="trust-strip">
              {trustStats.map((s) => (
                <div className="trust-item" key={s.label}>
                  <div className="trust-value">{s.value}</div>
                  <div className="trust-label">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="plans-wrap">
          <FadeIn>
            <div className="plans-section-label">Pricing Plans</div>
          </FadeIn>

          <div className="plans-grid">
            {plans.map((plan, i) => (
              <FadeIn key={plan.name} delay={i * 0.1}>
                <div className={`plan${plan.popular ? " plan--pop" : ""}`}>
                  {plan.popular && <div className="premium-badge">Best Value</div>}
                  <span className="plan-tag">{plan.tag}</span>
                  <div className="plan-name">{plan.name}</div>
                  <div className="plan-desc">{plan.desc}</div>
                  <div className="plan-price">{plan.price}</div>
                  <div className="plan-from">Starting From</div>
                  <div className="plan-divider" />

                  <ul className="plan-features">
                    {plan.features.map((f) => (
                      <li key={f}>
                        <span className="plan-check">
                          <Check size={8} strokeWidth={2.5} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button className="plan-btn" onClick={() => openWhatsApp(plan.name)}>
                    <MessageCircle size={13} />
                    Discuss on WhatsApp
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="calculator-wrap">
          <FadeIn>
            <div className="calculator">
              <div className="calc-form">
                <h2 className="calc-title">
                  Website Cost <em>Calculator</em>
                </h2>

                <p className="calc-sub">
                  Get a quick estimate for your project. Final pricing may vary after discussion.
                </p>

                <div className="calc-field">
                  <label>Service Type</label>
                  <select name="service" value={calc.service} onChange={updateCalc}>
                    {Object.keys(basePrices).map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="calc-field">
                  <label>Number of Pages</label>
                  <input
                    type="number"
                    name="pages"
                    min="1"
                    max="50"
                    value={calc.pages}
                    onChange={updateCalc}
                  />
                </div>

                <div className="calc-field">
                  <label>Admin Panel Required?</label>
                  <select name="admin" value={calc.admin} onChange={updateCalc}>
                    <option>No</option>
                    <option>Yes</option>
                  </select>
                </div>
              </div>

              <div className="calc-result">
                <div className="calc-label">Estimated Cost</div>
                <div className="calc-price">
                  ₹{estimatedPrice.toLocaleString("en-IN")}
                </div>
                <p className="calc-note">
                  This is an approximate estimate. For exact pricing, send us your requirement.
                </p>
                <button className="plan-btn" onClick={() => openWhatsApp(`Estimated Project Cost: ₹${estimatedPrice.toLocaleString("en-IN")}`)}>
                  <MessageCircle size={13} />
                  Discuss Estimate
                </button>
              </div>
            </div>
          </FadeIn>
        </section>

        <section className="custom-wrap">
          <div className="custom-inner">
            <FadeIn>
              <h2 className="custom-h">
                Need Something <em>Custom?</em>
              </h2>
              <p className="custom-p">
                Tell us your requirement and we will connect with you directly on WhatsApp within 24 hours.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <form className="form-grid" onSubmit={submitForm}>
                <div className="form-field">
                  <label>Your Name</label>
                  <input name="name" placeholder="John Doe" value={form.name} onChange={update} required />
                </div>

                <div className="form-field">
                  <label>Email Address</label>
                  <input name="email" type="email" placeholder="john@company.com" value={form.email} onChange={update} required />
                </div>

                <div className="form-field">
                  <label>Phone Number</label>
                  <input name="phone" placeholder="+91 98765 43210" value={form.phone} onChange={update} required />
                </div>

                <div className="form-field">
                  <label>Service Required</label>
                  <select name="service" value={form.service} onChange={update}>
                    {Object.keys(basePrices).map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="form-field">
                  <label>Budget Range</label>
                  <select name="budget" value={form.budget} onChange={update}>
                    <option>₹10k – ₹25k</option>
                    <option>₹25k – ₹50k</option>
                    <option>₹50k – ₹1L</option>
                    <option>₹1L+</option>
                  </select>
                </div>

                <div className="form-field form-full">
                  <label>Project Details</label>
                  <textarea name="details" placeholder="Tell us about your project..." value={form.details} onChange={update} />
                </div>

                <button type="submit" className="form-submit">
                  <MessageCircle size={15} />
                  Send Inquiry on WhatsApp
                </button>
              </form>
            </FadeIn>
          </div>
        </section>

        <section className="faq-wrap">
          <div className="faq-inner">
            <FadeIn>
              <h2 className="faq-head">
                Common <em>Questions</em>
              </h2>
            </FadeIn>

            {faqs.map((item, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <FaqItem q={item.q} a={item.a} />
              </FadeIn>
            ))}
          </div>
        </section>

        <FadeIn>
          <section className="cta-band">
            <div>
              <div className="cta-band-h">
                Ready to build something<br />
                <em>remarkable?</em>
              </div>
              <p className="cta-band-p">
                Let's turn your idea into a powerful digital product.
              </p>
            </div>

            <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noreferrer" className="cta-band-btn">
              Get Free Consultation <ArrowRight size={14} />
            </a>
          </section>
        </FadeIn>

        {toast && (
          <motion.div
            className="toast"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Check size={14} /> Inquiry sent! We'll contact you shortly.
          </motion.div>
        )}
      </div>
    </>
  )
}