import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const buttonClicked = () => {
    console.log("Button Clicked");
  };
  const changeInput = (value) => {
    console.log(value);
  };
  const scroll = (value) => {
    console.log(value);
  };

  return (
    <div>
      <h1>Hello, Sarthak</h1>
      <button onClick={buttonClicked}>Change User</button>

      {/* <input onChange={inputChange(elem)} type="text" placeholder="Enter your name" /> aise chalayenge toh auto call ho jayega reload pe -> but we dont want that. */}

      {/* <input onChange={(elem) => {
        console.log("change in input")
        console.log(elem.target.value);
      }} type="text" placeholder="Enter your name" /> */}

      <input
        onChange={(elem) => {
          changeInput(elem.target.value);
        }}
        type="text"
        placeholder="Enter your name"
      />

      <div
        onMouseMove={(elem) => {
          console.log("Mouse Moved");
          console.log(elem.clientX, elem.clientY);
          console.log(
            (elem.target.style.backgroundColor = `rgb(${elem.clientX}, ${elem.clientY}, 100)`),
          );
        }}
        className="box"
      ></div>

      <div onWheel={(elem) => {
        scroll(elem.deltaY);
        console.log(elem.deltaY);
      }}>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>
    </div>
  );
}

export default App;
