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

// Parent Component
function App() {
  return (
    <div className="App">
      <FirstComponent />
    </div>
  );
}

export default App;
