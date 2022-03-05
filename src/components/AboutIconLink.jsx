// react router link
import { Link } from "react-router-dom";
// react icons
import { FaQuestion } from "react-icons/fa";

const AboutIconLink = () => {
  return (
    <div className="about-link">
      <Link to="/about">
        <FaQuestion size={30} />
      </Link>
    </div>
  );
};

export default AboutIconLink;
