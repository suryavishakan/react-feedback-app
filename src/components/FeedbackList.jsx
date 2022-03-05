import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";
// framer motion
import { motion, AnimatePresence } from "framer-motion";

const FeedbackList = ({ feedback, handleDelete }) => {
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
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
    // feedback without animations
    //  {!feedback && <p>No feedback yet</p>}
    // {feedback.map((item) => (
    //   <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
    // ))}
  );
};

FeedbackList.propType = {
  feedback: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
};

export default FeedbackList;
