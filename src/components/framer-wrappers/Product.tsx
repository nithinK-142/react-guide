import { ProductPropTypes } from "@/utils/constants";
import { motion } from "framer-motion";

export const Product: React.FC<ProductPropTypes> = (props) => {
  const { src, alt, title, description, delay } = props;
  return (
    <motion.div
      initial={{ y: "10px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{
        y: "50%",
        overflow: "hidden",
        opacity: 0,
        transition: { duration: 0.25, delay, ease: "easeInOut" },
      }}
      transition={{ duration: 0.75, ease: "easeInOut", delay }}
      className="bg-[#ffd4bf] rounded-[10px] flex flex-col p-[10px] gap-[10px] w-[30vw] max-w-[320px] shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px]"
    >
      <img src={src} alt={alt} className="rounded-[10px]" />
      <h2>{title}</h2>
      <p>{description}</p>
    </motion.div>
  );
};
