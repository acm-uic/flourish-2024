import "./social.css";
import DesktopSMBubbles from "../components/DesktopSMBubbles";
import DesktopNewsletter from "../components/DesktopNewsletter";
import MobileSMBubbles from "../components/MobileSMBubbles";
import MobileNewsletter from "../components/MobileNewsletter"
import { motion } from "framer-motion";

export default function Social() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{ delay: 0.65 }}
    >
      <div className="hidden lg:block">
        <DesktopNewsletter />
        <DesktopSMBubbles />
      </div>
      <div className="lg:hidden">
        <MobileNewsletter />
        <MobileSMBubbles />
      </div>
    </motion.div>
  );
}
