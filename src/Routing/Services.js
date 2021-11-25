import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Develop from "./Develop";
import MobileApp from "./MobileApp";

const Services = () => {
  let match = useRouteMatch();
  console.log(match);
  return (
    <div>
      <h2>This is Services page.</h2>

      <div>
      
      </div>


    </div>

    
  );
};

export default Services;
