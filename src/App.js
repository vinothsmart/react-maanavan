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

// Parent Component
function App() {
  return (
    <div className="App">
      <h1>This is Parent Component</h1>
      <FirstComponent />
      <SecondComponent />
    </div>
  );
}

export default App;
