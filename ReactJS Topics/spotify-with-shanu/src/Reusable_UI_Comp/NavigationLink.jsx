import { Link } from "react-router-dom";

const NavigationLink = ({ linkText, link }) => {
  return (
    <div>
      <Link to={link}>{linkText}</Link>
    </div>
  );
};

export default NavigationLink;
