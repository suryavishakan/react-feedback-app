import { useState, useContext, useEffect } from "react";
// context
import FeedbackContext from "../context/FeedbackContext";

const RatingSelect = ({ select }) => {
  const [selected, setSelected] = useState(10);
  const { edit } = useContext(FeedbackContext);
  const radioButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    setSelected(edit.item.rating);
  }, [edit]);

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };
  return (
    <ul className="rating">
      {radioButtons.map((button, index) => (
        <li key={index}>
          <input
            type="radio"
            id={`button${index}`}
            name="rating"
            onChange={handleChange}
            value={`${button}`}
            checked={selected === button}
          />
          <label htmlFor={`button${index}`}>{`${button}`}</label>
        </li>
      ))}
    </ul>
  );
};

export default RatingSelect;
