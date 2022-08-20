import React from "react";
import Calculator from "./components/Calculator";
import logo from "./assets/images/logo.png";

const App = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <h1>
            <img src={logo} alt="logo" /> Calculator
          </h1>
        </div>
      </header>
      <section className="section_div">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <Calculator />
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <p>
            Made with 💖 | Design and developed by{" "}
            <a href="https://iamnarugopal.in/" target="_blank">
              Naru Gopal
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default App;
