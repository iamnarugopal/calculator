import React from "react";
import Calculator from "./components/Calculator";

const App = () => {
  return (
    <>
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
          <p>Made with 💖 | Design and developed by <a href="https://iamnarugopal.in/" target="_blank">Naru Gopal</a></p>
        </div>
      </footer>
    </>
  );
};

export default App;
