import linkedIn from "@/assets/linkedin.png";
import facebook from "@/assets/facebook.png";
import discord from "@/assets/discord.png";
import github from "@/assets/github.png";
import mail from "@/assets/email.png";
import { motion } from "framer-motion";

const iconsAnimation = {
  icon_1: {
    initial: {
      opacity: 0,
      x: 150,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        mass: 1.3,
      },
    },
  },
  icon_2: {
    initial: {
      opacity: 0,
      y: -150,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        mass: 1.3,
      },
    },
  },
  icon_3: {
    initial: {
      opacity: 0,
      x: -150,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        mass: 1.3,
      },
    },
  },
  icon_4: {
    initial: {
      opacity: 0,
      y: 150,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        mass: 1.3,
      },
    },
  },
  icon_5: {
    initial: {
      opacity: 0,
      rotate: 180,
      // scale: 0
    },
    animate: {
      opacity: 1,
      rotate: 0,
      // scale:1,
      transition: {
        type: "spring",
        mass: 1.3,
      },
    },
  },
};

const iconsData = [
  {
    href: "https://www.linkedin.com/in/nithin142",
    iconVariant: iconsAnimation.icon_1,
    icon: "icon_1",
    imgSrc: linkedIn,
    altText: "LinkedIn",
  },
  {
    href: "https://www.facebook.com",
    iconVariant: iconsAnimation.icon_2,
    icon: "icon_2",
    imgSrc: facebook,
    altText: "Facebook",
  },
  {
    href: "https://discordapp.com",
    iconVariant: iconsAnimation.icon_3,
    icon: "icon_3",
    imgSrc: discord,
    altText: "Discord",
  },
  {
    href: "https://github.com/nithinK-142",
    iconVariant: iconsAnimation.icon_4,
    icon: "icon_4",
    imgSrc: github,
    altText: "GitHub",
  },
  {
    href: "mailto:nithin.sagar.359@gmail.com",
    iconVariant: iconsAnimation.icon_5,
    icon: "icon_5",
    imgSrc: mail,
    altText: "Mail",
  },
];

const App = () => {
  return (
    <div className="h-screen home">
      <div className="animation-wrapper">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{
            delayChildren: 0,
            staggerChildren: 0.3,
          }}
          className="animation-wrapper-inner"
        >
          {iconsData.map(
            ({ altText, href, icon, iconVariant, imgSrc }, index) => (
              <motion.div
                key={index}
                variants={iconVariant}
                whileHover={{ scale: 1.2 }}
                className={icon}
              >
                <a href={href} target="_blank" rel="noreferrer noopener">
                  <img src={imgSrc} alt={altText} />
                </a>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default App;
