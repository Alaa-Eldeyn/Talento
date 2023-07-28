import React from "react";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../Component";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quo
            ducimus quasi. Aliquam eum fuga quae velit consequatur consequuntur
            corporis dolor vel, ex delectus repellat. Unde et non voluptates
            quaerat?
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="landing img" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
