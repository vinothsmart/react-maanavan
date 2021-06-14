// import logo from "./logo.svg";
import React from "react";
import "./App.css";

// Child Component
class FirstComponent extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> Hi Vinoth</h1>
      </div>
    );
  }
}

class SecondComponent extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> Vinoth 2.0</h1>
        <ThirdComponent />
      </div>
    );
  }
}

class ThirdComponent extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> Vinoth 3.0</h1>
      </div>
    );
  }
}

function FourthComponent() {
  return <h1> Function Based Component</h1>;
}

// Parent Component
function App() {
  return (
    <div className="App">
      <h1>This is Parent Component</h1>
      <FirstComponent />
      <SecondComponent />
      <FourthComponent />
    </div>
  );
}

export default App;
