import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, MapPin, Mail, Phone, CheckCircle2, XCircle } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const COMPANY_EMAIL = "contact.zenovate@gmail.com";
const COMPANY_PHONE = "+91 98981 94788";
const COMPANY_PHONE_LINK = "+919898194788";
const API_URL = "http://localhost:5000/api/contact/create";

const CSS = `
.contact {
  position: relative;
  background:
    radial-gradient(circle at 10% 10%, rgba(138,184,122,0.16), transparent 32%),
    radial-gradient(circle at 90% 70%, rgba(61,110,56,0.1), transparent 34%),
    var(--sage);
  padding: 110px 56px;
  overflow: hidden;
}

.contact__inner {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 70px;
  align-items: start;
}

.contact__info {
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

.contact__sub {
  font-family: 'Jost', sans-serif;
  font-weight: 300;
  font-size: 13px;
  letter-spacing: 0.08em;
  line-height: 2;
  color: var(--muted);
  max-width: 520px;
  margin: 0 0 34px;
}

.contact__details {
  display: grid;
  gap: 16px;
}

.contact__detail {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  background: rgba(240,245,238,0.78);
  border: 0.5px solid var(--sage3);
  padding: 18px 20px;
  box-shadow: 0 16px 40px rgba(61,110,56,0.06);
}

.contact__detail-icon {
  color: var(--green);
  margin-top: 3px;
  flex-shrink: 0;
}

.contact__detail strong {
  display: block;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 400;
  font-size: 22px;
  color: var(--ink);
  margin-bottom: 4px;
}

.contact__detail span,
.contact__detail a {
  font-family: 'Jost', sans-serif;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted);
  text-decoration: none;
}

.contact__detail a:hover {
  color: var(--green);
}

.contact__form {
  position: relative;
  z-index: 2;
  background: rgba(240,245,238,0.86);
  border: 0.5px solid var(--sage3);
  padding: 36px;
  box-shadow: 0 24px 70px rgba(61,110,56,0.1);
  backdrop-filter: blur(12px);
}

.contact__form::before {
  content: '';
  position: absolute;
  inset: 18px;
  border: 0.5px solid rgba(138,184,122,0.25);
  pointer-events: none;
}

.contact__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.contact__field {
  position: relative;
  z-index: 2;
  margin-bottom: 20px;
}

.contact__field label {
  display: block;
  font-family: 'Jost', sans-serif;
  font-size: 9px;
  font-weight: 400;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--green2);
  margin-bottom: 9px;
}

.contact__field input,
.contact__field select,
.contact__field textarea {
  width: 100%;
  border: 0.5px solid var(--sage3);
  background: rgba(228,237,225,0.55);
  color: var(--ink);
  padding: 14px 15px;
  font-family: 'Jost', sans-serif;
  font-size: 12px;
  letter-spacing: 0.08em;
  outline: none;
  resize: none;
  transition: border-color 0.3s, background 0.3s;
}

.contact__field input:focus,
.contact__field select:focus,
.contact__field textarea:focus {
  border-color: var(--green3);
  background: rgba(240,245,238,0.9);
}

.contact__field input::placeholder,
.contact__field textarea::placeholder {
  color: rgba(122,154,116,0.65);
}

.contact__submit {
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  width: 100%;
  border: none;
  background: var(--green);
  color: var(--sage);
  padding: 15px 28px;
  font-family: 'Jost', sans-serif;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.3s;
}

.contact__submit:hover {
  background: var(--ink);
}

.contact__submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.contact-toast {
  position: fixed;
  right: 28px;
  bottom: 28px;
  z-index: 99999;
  min-width: 310px;
  max-width: 420px;
  background: rgba(30, 58, 26, 0.96);
  color: #f0f5ee;
  border: 1px solid rgba(138,184,122,0.35);
  box-shadow: 0 22px 60px rgba(30,58,26,0.28);
  padding: 16px 18px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  backdrop-filter: blur(12px);
}

.contact-toast.error {
  background: rgba(75, 22, 22, 0.96);
  border-color: rgba(255, 130, 130, 0.35);
}

.contact-toast__icon {
  color: #8ab87a;
  margin-top: 1px;
  flex-shrink: 0;
}

.contact-toast.error .contact-toast__icon {
  color: #ff9a9a;
}

.contact-toast__title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 20px;
  line-height: 1;
  margin-bottom: 5px;
}

.contact-toast__msg {
  font-family: 'Jost', sans-serif;
  font-size: 11px;
  letter-spacing: 0.08em;
  line-height: 1.7;
  color: rgba(240,245,238,0.72);
}

@media (max-width: 900px) {
  .contact {
    padding: 90px 24px;
  }

  .contact__inner {
    grid-template-columns: 1fr;
    gap: 52px;
  }
}

@media (max-width: 600px) {
  .contact {
    padding: 78px 20px;
  }

  .contact__form {
    padding: 26px;
  }

  .contact__row {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .contact-toast {
    left: 18px;
    right: 18px;
    bottom: 18px;
    min-width: auto;
  }
}
`;

export default function Contact() {
  const sectionRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact__detail", {
        y: 30,
        opacity: 0,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact__details",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".contact__form", {
        y: 38,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact__form",
          start: "top 84%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const showToast = (type, title, message) => {
    setToast({ type, title, message });
    setTimeout(() => setToast(null), 4200);
  };

  const handle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        setForm({
          name: "",
          email: "",
          service: "",
          message: "",
        });

        showToast(
          "success",
          "Message Sent",
          "Thank you! Your inquiry has been sent successfully."
        );
      } else {
        showToast(
          "error",
          "Sending Failed",
          data.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.log("Contact API Error:", error);
      showToast(
        "error",
        "Server Not Connected",
        "Backend terminal check karo and server run rakho."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{CSS}</style>

      <section className="contact" id="contact" ref={sectionRef}>
        <div className="contact__inner">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-eyebrow">Let's Talk</span>

            <h2 className="section-heading">
              Ready to build <br />
              <span className="gradient-text">something great?</span>
            </h2>

            <p className="contact__sub">
              Tell us about your project and we'll get back to you within 24 hours
              with a tailored proposal.
            </p>

            <div className="contact__details">
              <div className="contact__detail">
                <MapPin size={18} className="contact__detail-icon" />
                <div>
                  <strong>Ahmedabad, India</strong>
                  <span>Serving clients worldwide</span>
                </div>
              </div>

              <div className="contact__detail">
                <Mail size={18} className="contact__detail-icon" />
                <div>
                  <strong>{COMPANY_EMAIL}</strong>
                  <a href={`mailto:${COMPANY_EMAIL}`}>We reply within 24 hours</a>
                </div>
              </div>

              <div className="contact__detail">
                <Phone size={18} className="contact__detail-icon" />
                <div>
                  <strong>{COMPANY_PHONE}</strong>
                  <a href={`tel:${COMPANY_PHONE_LINK}`}>
                    Mon – Sat, 10am – 7pm IST
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact__form"
            onSubmit={submit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="contact__row">
              <div className="contact__field">
                <label>Your Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handle}
                  placeholder="Arjun Mehta"
                  required
                />
              </div>

              <div className="contact__field">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handle}
                  placeholder="arjun@company.com"
                  required
                />
              </div>
            </div>

            <div className="contact__field">
              <label>Service Needed</label>
              <select
                name="service"
                value={form.service}
                onChange={handle}
                required
              >
                <option value="">Select a service…</option>
                <option>Website Development</option>
                <option>Mobile App Development</option>
                <option>E-commerce Development</option>
                <option>UI/UX Design</option>
                <option>Custom Software</option>
                <option>SaaS Solutions</option>
              </select>
            </div>

            <div className="contact__field">
              <label>Tell us about your project</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handle}
                rows={5}
                placeholder="Give us a brief overview — scope, timeline, budget range…"
                required
              />
            </div>

            <button type="submit" className="contact__submit" disabled={loading}>
              {loading ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send size={15} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </section>

      <AnimatePresence>
        {toast && (
          <motion.div
            className={`contact-toast ${toast.type === "error" ? "error" : ""}`}
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="contact-toast__icon">
              {toast.type === "error" ? (
                <XCircle size={22} />
              ) : (
                <CheckCircle2 size={22} />
              )}
            </div>

            <div>
              <div className="contact-toast__title">{toast.title}</div>
              <div className="contact-toast__msg">{toast.message}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}