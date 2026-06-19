import { motion } from "framer-motion";
import Portfolio from "../components/Portfolio/Portfolio";
import "./Page.css";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

export default function PortfolioPage() {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="page"
    >
      <div className="page__hero">
        <div className="page__hero-glow" />

        <motion.div
          className="page__hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="section-eyebrow">Portfolio</span>

          <h1 className="section-heading page__hero-heading">
            Work we're <br />
            <span className="gradient-text">proud to show</span>
          </h1>

          <p className="page__hero-sub">
            A curated selection of e-commerce, business websites, mobile app
            concepts, dashboards, and UI/UX design work.
          </p>
        </motion.div>
      </div>

      <Portfolio />
    </motion.main>
  );
}