import React from "react";
import { Link } from "react-router-dom";
function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/mypic.jpg"
            style={{ borderRadius: "100%", width: "50%" }} alt="mypic"
          />
          <h4 className="mt-5">Gyanvi Mehrotra</h4>
          <h6>Full Stack Developer</h6>
        </div>
        <div className="col-6 p-3">
          <p>
          I am a passionate third-year B.Tech student with a keen interest in exploring and working with cutting-edge technologies. I thrive on solving real-world problems using the latest innovations in Artificial Intelligence (AI), Machine Learning (ML),  Cloud Computing . I am a full-stack developer  enhancing and polishing my skills.

Currently, I am actively engaged in projects involving AI-driven applications, full-stack web development. I enjoy building scalable solutions with MERN stack, Next.js, and integrating AI-powered tools. My goal is to leverage technology to create impactful solutions that bridge gaps and enhance user experiences.
          </p>
          <p>
            Connect on <Link to="/">Homepage</Link> / <Link to="*">TradingQnA</Link> /{" "}
            <Link to="*">Twitter</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;