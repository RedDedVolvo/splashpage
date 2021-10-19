import React from "react";
import "./style/App.css";
import Quote from "./components/Quote/Quote";
import Weather from "./components/Weather/Weather";
import Greeting from "./components/Greeting/Greeting";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img
          src={"https://source.unsplash.com/random/"}
          alt="./style/images/defaultBackground.jpeg"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
        <section>
          <Quote />
        </section>
        <section>
          <Weather />
        </section>
        <section>
          <Greeting />
        </section>
      </div>
    </div>
  );
}

export default App;
