import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/zerodhaFundhouse.png" style={{ width: "50%" ,height:"55px"}} alt="fundhouse"/>
          <p className="text-small text-muted p-5">Our asset managment venture that is creating simple and transparent index funds to help you save for your goal</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/sensibullLogo.svg" style={{ width: "50%" }}  alt="sensibull"/>
          <p className="text-small text-muted p-5">Options trading platform that lets you create stratagies, analyze poasitions and examine data points like open interest, Fll/Dll, and more</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/streakLogo.png" style={{ width: "50%" }} alt="streak"/>
          <p className="text-small text-muted p-5">Systematic trading platform that allows you to create and backtest stratagies without coding.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/smallcaseLogo.png" style={{ width: "50%" }} alt="smallcaseLogo"/>
          <p className="text-small text-muted p-5">Thematic investment platform that helps you to invest in diversified baskets of stocks on ETFs.</p>
        </div>
        <div className="col-4 p-3 mt-5 ">
          <img src="media/goldenpilogo.png" style={{ width: "50%" }} alt="goldenpilogo"/>
          <p className="text-small text-muted p-5">investment research platform that offers detailed insights on stocks,sectors, supply chains and more.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/dittoLogo.png" style={{ width: "50%" }} alt="dittoLogo"/>
          <p className="text-small text-muted p-5">Personalized advice on life and health insurance. No spam and no mis-selling</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;