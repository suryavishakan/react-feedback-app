// components
import Card from "../components/card/Card";
// react router link
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>This is a React app to leave feedback for a product or service</p>
        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </Card>
  );
};

export default AboutPage;
