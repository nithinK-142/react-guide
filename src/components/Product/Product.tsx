import { motion } from "framer-motion";

import "./Product.css";

export interface PropTypes {
  src: string;
  alt: string;
  title: string;
  description: string;
  delay?: number;
}

export const Product: React.FC<PropTypes> = ({
  src,
  alt,
  title,
  description,
  delay,
}) => {
  return (
    <motion.div
      initial={{ y: "10px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{
        y: "50%",
        opacity: 0,
        transition: { duration: 0.25, delay, ease: "easeInOut" },
      }}
      transition={{ duration: 0.75, ease: "easeInOut", delay }}
      className="product"
    >
      <img src={src} alt={alt} />
      <h2>{title}</h2>
      <p>{description}</p>
    </motion.div>
  );
};