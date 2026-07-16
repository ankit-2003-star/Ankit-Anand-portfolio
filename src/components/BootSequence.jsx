import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINES = [
  "booting portfolio.sys …",
  "loading modules: react, three.js, vite ✓",
  "compiling profile → ankit-2003-star ✓",
  "mounting hero scene …",
  "welcome.",
];

export default function BootSequence({ onDone }) {
  const [visible, setVisible] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDone(true);
      const t = setTimeout(onDone, 200);
      return () => clearTimeout(t);
    }

    let i = 0;
    const step = () => {
      i += 1;
      setVisible((v) => [...v, LINES[i - 1]]);
      if (i < LINES.length) {
        setTimeout(step, i === LINES.length - 1 ? 420 : 260);
      } else {
        setTimeout(() => setDone(true), 500);
      }
    };
    const start = setTimeout(step, 200);
    return () => clearTimeout(start);
  }, [onDone]);

  useEffect(() => {
    if (done) {
      const t = setTimeout(onDone, 550);
      return () => clearTimeout(t);
    }
  }, [done, onDone]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="boot-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="boot-lines mono">
            {visible.map((line, idx) => (
              <p key={idx}>
                <span className="boot-caret">&gt;</span> {line}
              </p>
            ))}
            <span className="blink boot-cursor" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
