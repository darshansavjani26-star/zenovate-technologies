import { motion, AnimatePresence } from "framer-motion";

const CSS = `
.loader {
  position: fixed;
  inset: 0;
  z-index: 999999;
  background:
    radial-gradient(circle at 50% 40%, rgba(138,184,122,0.16), transparent 34%),
    #f0f5ee;
  display: grid;
  place-items: center;
}

.loader__box {
  text-align: center;
}

.loader__logo {
  width: 96px;
  height: auto;
  margin-bottom: 22px;
}

.loader__title {
  font-family: var(--font-display);
  font-size: 34px;
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink);
}

.loader__text {
  margin-top: 8px;
  font-family: var(--font-body);
  font-size: 9px;
  letter-spacing: 0.34em;
  text-transform: uppercase;
  color: var(--green2);
}

.loader__line {
  width: 180px;
  height: 1px;
  background: var(--sage3);
  margin: 22px auto 0;
  overflow: hidden;
}

.loader__line span {
  display: block;
  height: 100%;
  width: 45%;
  background: var(--green3);
}
`;

export default function Loader({ show }) {
    return (
        <>
            <style>{CSS}</style>

            <AnimatePresence>
                {show && (
                    <motion.div
                        className="loader"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.div
                            className="loader__box"
                            initial={{ opacity: 0, y: 26 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -18 }}
                            transition={{ duration: 0.7 }}
                        >
                            <motion.img
                                src="/ZenovateApp.png"
                                alt="Zenovate Technologies"
                                className="loader__logo"
                                animate={{ scale: [1, 1.06, 1] }}
                                transition={{ repeat: Infinity, duration: 2.2 }}
                            />

                            <div className="loader__title">Zenovate</div>
                            <div className="loader__text">Technology · Design · Craft</div>

                            <div className="loader__line">
                                <motion.span
                                    animate={{ x: ["-100%", "250%"] }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 1.4,
                                        ease: "easeInOut",
                                    }}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}