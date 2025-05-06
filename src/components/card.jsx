import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Card({ title, creator, preview, date, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div layout onClick={() => setIsOpen(!isOpen)} className="card">
      <motion.div className="card-info">
        <motion.div>
          <motion.h2 className="card-title">{title}</motion.h2>
          <motion.h4 className="card-creator">{creator}</motion.h4>
        </motion.div>
        <motion.p className="card-date">{date}</motion.p>
      </motion.div>

      <motion.div className="card-preview">
        <p className="card-preview-text">{preview}</p>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            className="card-description"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{ overflow: "hidden" }}
          >
            <br />
            <p className="card-preview-text">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
