import { useState, useEffect } from "react";
// context
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
// components
import RatingSelect from "./RatingSelect";
import Card from "./card/Card";
import Button from "./button/Button";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  // context
  const { addFeedback, edit, setEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (edit.edit === true) {
      setBtnDisabled(false);
      setText(edit.item.text);
      setRating(edit.item.rating);
    }
  }, [edit]);

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 characters");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length >= 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (edit.edit === true) {
        updateFeedback(edit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setText("");
      setEdit({
        item: {},
        edit: false,
      });
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
