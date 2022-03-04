import { useState } from "react";
import Card from "./card/Card";

const FeedbackForm = () => {
  const [text, setText] = useState("");

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us</h2>
        {/*  @todo - rating select component */}
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button>Send</button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
