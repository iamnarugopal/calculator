import React from "react";
import Calculator from "./components/Calculator";
import logo from "./assets/images/logo.png";

const App = () => {
  return (
    <main className="d-flex h-100 flex-column overflow-auto">
      <header className="header flex-shrink-0">
        <div className="container">
          <h1>
            <img src={logo} alt="logo" /> Calculator
          </h1>
        </div>
      </header>
      <section className="section_div flex-grow-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-xl-4">
              <Calculator />
            </div>
          </div>
        </div>
      </section>
      <footer className="footer flex-shrink-0">
        <div className="container">
          <p>
            Made with 💖 | Design and developed by{" "}
            <a href="https://iamnarugopal.in/" target="_blank" rel="noreferrer">
              Naru Gopal
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
};

export default App;
