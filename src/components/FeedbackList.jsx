// hooks
import { useContext } from "react";
// components
import FeedbackItem from "./FeedbackItem";
// context
import FeedbackContext from "../context/FeedbackContext";
// framer motion
import { motion, AnimatePresence } from "framer-motion";

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {!feedback && <p>No feedback yet</p>}
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
