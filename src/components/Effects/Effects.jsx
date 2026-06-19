import { useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Effects() {
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray("section").forEach((section) => {
                gsap.from(section, {
                    opacity: 0,
                    y: 45,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 88%",
                        once: true,
                    },
                });
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <>
            <motion.div
                className="scroll-progress"
                style={{ scaleX: scrollYProgress }}
            />

            <div className="floating-dock">
                <a href="https://wa.me/919898194788" target="_blank" rel="noreferrer">
                    <MessageCircle size={18} />
                </a>

                <a href="mailto:contact.zenovate@gmail.com">
                    <Mail size={18} />
                </a>

                <a href="tel:+919898194788">
                    <Phone size={18} />
                </a>
            </div>
        </>
    );
}