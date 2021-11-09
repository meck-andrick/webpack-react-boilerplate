import React from "react";
import ReactDOM from "react-dom";
import LayoutHeader from "./layouts/LayoutHeader/LayoutHeader";
import LayoutBody from "./layouts/LayoutBody/LayoutBody";

function App() {
  return (
    <div className="App">
      <LayoutHeader></LayoutHeader>
      <LayoutBody></LayoutBody>
    </div>
  );
}

export default App;
