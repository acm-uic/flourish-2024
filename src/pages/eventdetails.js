import Events from "../components/Events";
import "./eventdetails.css";

import DummyEvents from "../api/DummyEvents";
import { motion } from "framer-motion";

export default function EventDetails() {
  return (
    <motion.div className="flex"
    initial={{opacity:0}}
    animate={{opacity:1}}
    // exit={{opacity:0}}
    transition={{ delay: 0.65 }}>
      <Events events={DummyEvents} />
    </motion.div>
  );
}
