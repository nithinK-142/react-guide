import { motion } from "framer-motion";
import { PropTypes } from "@/utils/constants";

export const Body: React.FC<PropTypes> = ({ children, delay = 0 }) => {
  return (
    <div className="overflow-hidden">
      <motion.p
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.5, delay }}
        className="text-2xl"
      >
        {children}
      </motion.p>
    </div>
  );
};
