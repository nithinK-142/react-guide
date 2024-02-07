import { motion } from "framer-motion";
import "./Title.css";
import { PropTypes } from "@/constants";

export const Title: React.FC<PropTypes> = ({ children, delay = 0 }) => {
  return (
    <div className="title-container">
      <motion.h1
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.h1>
    </div>
  );
};
