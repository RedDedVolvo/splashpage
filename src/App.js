import React from "react";
import "./style/App.css";
import Quote from "./components/Quote/Quote";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img
          src={"https://source.unsplash.com/random/"}
          alt="Background"
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
      </div>
    </div>
  );
}

export default App;
