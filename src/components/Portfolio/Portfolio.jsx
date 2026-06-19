import { motion } from "framer-motion";
import { ExternalLink, Lock } from "lucide-react";

const projects = [
  {
    title: "DS Store",
    category: "Full E-Commerce Website",
    image: "/ds.png",
    desc: "Modern shopping website with product listing, cart and responsive design.",
    link: "https://ds-store-kappa.vercel.app/",
    live: true,
  },
  {
    title: "DS Store Admin Panel",
    category: "Admin Dashboard",
    image: "/dsadmin.png",
    desc: "Admin panel for managing products, categories and store content.",
    link: "https://ds-store-8gyj.vercel.app/",
    live: true,
  },
  {
    title: "Corporate Website",
    category: "Corporate Website",
    image: "/Corporate Website.png",
    desc: "Professional company website with clean sections and premium layout.",
    live: false,
  },
  {
    title: "Restaurant Website",
    category: "Business Website",
    image: "res.png",
    desc: "Elegant restaurant website concept with menu, gallery and booking CTA.",
    live: false,
  },
  {
    title: "Mobile App Landing",
    category: "App Development",
    image: "mobile.png",
    desc: "Modern landing page for mobile app, startup and digital products.",
    live: false,
  },
  {
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    image: "/Saas.png",
    desc: "Premium dashboard concept for analytics, CRM and SaaS platforms.",
    live: false,
  },
];

const CSS = `
.portfolio-section {
  background: #f4f7f2;
  padding: 90px 48px;
}

.portfolio-container {
  max-width: 1220px;
  margin: 0 auto;
}

.portfolio-heading {
  margin-bottom: 48px;
}

.portfolio-eyebrow {
  color: #5a8e54;
  text-transform: uppercase;
  letter-spacing: 0.26em;
  font-size: 12px;
  font-weight: 700;
}

.portfolio-heading h2 {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(42px, 6vw, 72px);
  font-weight: 400;
  color: #1e3a1a;
  margin: 12px 0;
}

.portfolio-heading p {
  max-width: 620px;
  color: #6b7f66;
  line-height: 1.8;
  font-size: 15px;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;
}

.portfolio-card {
  background: #ffffff;
  border: 1px solid rgba(61,110,56,0.16);
  overflow: hidden;
  transition: 0.35s ease;
}

.portfolio-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 60px rgba(61,110,56,0.14);
}

.portfolio-img {
  height: 245px;
  overflow: hidden;
  background: #e4ede1;
}

.portfolio-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.55s ease;
}

.portfolio-card:hover .portfolio-img img {
  transform: scale(1.08);
}

.portfolio-body {
  padding: 26px;
}

.portfolio-category {
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #5a8e54;
  font-weight: 700;
}

.portfolio-body h3 {
  font-family: "Cormorant Garamond", serif;
  font-size: 30px;
  font-weight: 400;
  color: #1e3a1a;
  margin: 12px 0 10px;
}

.portfolio-body p {
  color: #6b7f66;
  font-size: 14px;
  line-height: 1.75;
  margin-bottom: 22px;
}

.portfolio-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #1e3a1a;
  text-decoration: none;
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 700;
  border-bottom: 1px solid #8ab87a;
  padding-bottom: 5px;
}

.portfolio-btn:hover {
  color: #5a8e54;
}

.portfolio-btn.disabled {
  color: #8a9e84;
  border-bottom-color: rgba(138,158,132,0.4);
  cursor: default;
}

.portfolio-cta {
  margin-top: 70px;
  background: #071006;
  color: #ffffff;
  padding: 46px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}

.portfolio-cta h2 {
  font-family: "Cormorant Garamond", serif;
  font-size: 44px;
  font-weight: 400;
  margin-bottom: 8px;
}

.portfolio-cta p {
  color: rgba(255,255,255,0.62);
}

.portfolio-cta a {
  background: #8ab87a;
  color: #071006;
  padding: 15px 24px;
  text-decoration: none;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-weight: 800;
}

@media (max-width: 1000px) {
  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 700px) {
  .portfolio-section {
    padding: 70px 22px;
  }

  .portfolio-grid {
    grid-template-columns: 1fr;
  }

  .portfolio-img {
    height: 230px;
  }

  .portfolio-cta {
    flex-direction: column;
    align-items: flex-start;
    padding: 34px 24px;
  }
}
`;

export default function Portfolio() {
  return (
    <>
      <style>{CSS}</style>

      <section className="portfolio-section">
        <div className="portfolio-container">
          <div className="portfolio-heading">
            <span className="portfolio-eyebrow">Selected Projects</span>
            <h2>Digital work that builds trust.</h2>
            <p>
              A collection of websites, admin dashboards, e-commerce stores and
              digital product concepts crafted for modern businesses.
            </p>
          </div>

          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="portfolio-card"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="portfolio-img">
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="portfolio-body">
                  <span className="portfolio-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>

                  {project.live ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="portfolio-btn"
                    >
                      View Project <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="portfolio-btn disabled">
                      Concept Project <Lock size={13} />
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="portfolio-cta">
            <div>
              <h2>Have a project idea?</h2>
              <p>Let’s build a premium website or digital solution for your business.</p>
            </div>

            <a href="/contact">Start Project</a>
          </div>
        </div>
      </section>
    </>
  );
}