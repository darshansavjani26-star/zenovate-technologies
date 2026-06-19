import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const CSS = `
  .footer {
    background:
      radial-gradient(circle at top left, rgba(138,184,122,0.16), transparent 32%),
      linear-gradient(180deg, #071006 0%, #020402 100%);
    color: #f0f5ee;
    padding: 80px 48px 24px;
    border-top: 1px solid rgba(138,184,122,0.25);
    overflow: hidden;
  }

  .footer__inner {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.4fr 1fr 0.8fr 1fr;
    gap: 56px;
  }

  .footer__brand {
    max-width: 360px;
  }

  .footer__logo {
    width: 170px;
    height: auto;
    margin-bottom: 22px;
  }

  .footer__tagline {
    font-family: 'Jost', sans-serif;
    font-size: 13px;
    font-weight: 300;
    letter-spacing: 0.08em;
    line-height: 1.9;
    color: rgba(240,245,238,0.68);
    margin-bottom: 28px;
  }

  .footer__socials {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .footer__social {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    color: #8ab87a;
    border: 1px solid rgba(138,184,122,0.35);
    background: rgba(240,245,238,0.04);
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .footer__social:hover {
    background: #8ab87a;
    color: #071006;
    transform: translateY(-4px);
  }

  .footer__col h4 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 0.08em;
    color: #f0f5ee;
    margin-bottom: 22px;
  }

  .footer__col ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer__col li {
    margin-bottom: 13px;
    font-family: 'Jost', sans-serif;
    font-size: 12px;
    letter-spacing: 0.12em;
    color: rgba(240,245,238,0.62);
  }

  .footer__col a {
    color: rgba(240,245,238,0.62);
    text-decoration: none;
    transition: all 0.25s ease;
  }

  .footer__col a:hover {
    color: #8ab87a;
    padding-left: 6px;
  }

  .footer__contact-list li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    line-height: 1.7;
  }

  .footer__contact-list svg {
    color: #8ab87a;
    margin-top: 3px;
    flex-shrink: 0;
  }

  .footer__bottom {
    max-width: 1280px;
    margin: 60px auto 0;
    padding-top: 22px;
    border-top: 1px solid rgba(138,184,122,0.2);
    display: flex;
    justify-content: space-between;
    gap: 20px;
    font-family: 'Jost', sans-serif;
    font-size: 10px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(240,245,238,0.48);
  }

  @media (max-width: 900px) {
    .footer {
      padding: 64px 24px 24px;
    }

    .footer__inner {
      grid-template-columns: 1fr 1fr;
      gap: 42px;
    }
  }

  @media (max-width: 600px) {
    .footer__inner {
      grid-template-columns: 1fr;
    }

    .footer__bottom {
      flex-direction: column;
    }
  }
`;

export default function Footer() {
  const socialLinks = [
    {
      Icon: Github,
      href: "https://github.com/",
      label: "Github",
    },
    {
      Icon: Twitter,
      href: "https://twitter.com/",
      label: "Twitter",
    },
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/company/zenovate-technologies/",
      label: "LinkedIn",
    },
    {
      Icon: Instagram,
      href: "https://www.instagram.com/zenovate_technologies?igsh=MTVpbTY2amh4cXM5cw==",
      label: "Instagram",
    },
  ];

  return (
    <>
      <style>{CSS}</style>

      <footer className="footer">
        <motion.div
          className="footer__inner"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="footer__brand">
            <Link to="/">
              <img
                src="/ZenovateHeader.png"
                alt="Zenovate Technologies"
                className="footer__logo"
              />
            </Link>

            <p className="footer__tagline">
              Building digital futures for ambitious brands — from Ahmedabad to the world.
            </p>

            <div className="footer__socials">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer__social"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer__col">
            <h4>Services</h4>
            <ul>
              {[
                "Website Development",
                "Mobile App Development",
                "E-commerce",
                "UI/UX Design",
                "Custom Software",
                "SaaS Solutions",
              ].map((s) => (
                <li key={s}>
                  <Link to="/services">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Company</h4>
            <ul>
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Pricing", "/pricing"],
                ["Portfolio", "/portfolio"],
                ["Contact", "/contact"],
              ].map(([l, h]) => (
                <li key={l}>
                  <Link to={h}>{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
            <ul className="footer__contact-list">
              <li>
                <MapPin size={15} />
                <span>Ahmedabad, Gujarat, India</span>
              </li>

              <li>
                <Mail size={15} />
                <a href="mailto:contact.zenovate@gmail.com">
                  contact.zenovate@gmail.com
                </a>
              </li>

              <li>
                <Phone size={15} />
                <a href="tel:+919898194788">+91 98981 94788</a>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} Zenovate Technologies. All rights reserved.
          </span>
          <span>Made with ❤ in India</span>
        </div>
      </footer>
    </>
  );
}