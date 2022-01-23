import { Link } from "gatsby";
import React from "react"
import BigLayout from "../components/BigLayout";
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NotFound = (props) => {
  return (
    <BigLayout titleBarText="Page Not Found">
      <div className="w-full h-full text-center flex flex-col justify-evenly 
      text-accent font-display">
        <div className="text-xl md:text-3xl">
          Page not found
        </div>
        <div className="text-orange-600 text-6xl md:text-9xl">
          <FontAwesomeIcon icon={faExclamationTriangle} />
        </div>
        <div className="text-lg md:text-2xl text-pop">
          <Link to="/">Go back home</Link>
        </div>
      </div>
    </BigLayout>
  );
};

export default NotFound;

