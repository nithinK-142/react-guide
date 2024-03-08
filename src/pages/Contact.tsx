import { motion } from "framer-motion";
import { Title } from "@/components/framer-wrappers/Title";
import { Body } from "@/components/framer-wrappers/Body";

const Contact = () => {
  return (
    <div className="page bg-[#ffcf81]">
      <Title delay={0.75}>Contact</Title>
      <Body delay={0.75}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam nemo
        facere commodi ipsum labore. Officia, quia ullam exercitationem iure
        sapiente suscipit architecto voluptatum eaque itaque molestiae
        recusandae, cum mollitia, blanditiis error nihil sunt. Doloremque
        tempore quibusdam aperiam sed aut minus nulla quisquam ex nihil.
        Molestiae neque reprehenderit cumque laudantium quo!
      </Body>
      <motion.div
        initial={{ y: "-100%" }}
        animate={{
          y: "100%",
        }}
        transition={{ duration: 2, ease: [0.2, 1, 0.2, 1] }} // Cubic bezier curve for easing
        className="fixed w-full h-screen bg-[#0f0f0f] left-0 top-0"
      />
      <motion.div
        animate={{
          width: "0",
          height: "0",
          borderRadius: "100%",
        }}
        exit={{
          width: "100%",
          height: "100%",
          borderRadius: "0",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 bg-[#ffcf81] -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default Contact;
