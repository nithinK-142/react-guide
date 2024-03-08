import { motion } from "framer-motion";
import { PropTypes } from "@/utils/constants";

export const Title: React.FC<PropTypes> = ({ children, delay = 0 }) => {
  return (
    <div className="overflow-hidden mt-[100px] mb-[30px]">
      <motion.h1
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.5, delay }}
        className="text-[64px] font-bold"
      >
        {children}
      </motion.h1>
    </div>
  );
};
