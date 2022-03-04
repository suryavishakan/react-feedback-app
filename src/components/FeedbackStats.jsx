import PropTypes from "prop-types";

const FeedbackStats = ({ feedback }) => {
  // calculate ratings average
  let average =
    feedback.reduce((acc, { rating }) => {
      return acc + rating;
    }, 0) / feedback.length;
  average = average.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>
        {feedback.length} {feedback.length > 1 ? "Reviews" : "Review"}
      </h4>
      <h4>Average Rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  );
};

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
