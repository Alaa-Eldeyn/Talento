import React from "react";
import Wrapper from "../assets/wrappers/ErrorPage";
import main from "../assets/images/not-found.svg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={main} className="img" alt="Error 404" />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/">Back Home</Link>
      </div>
    </Wrapper>
  );
};

export default ErrorPage;
