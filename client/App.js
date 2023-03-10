import React from "react";
import Chatbot from "./components/Chatbot";
import NavComp from "./components/NavComp";
import Routes from "./Routes";

const App = () => {
  return (
    <div>
      <NavComp />
      <Routes />
      <Chatbot />
    </div>
  );
};

export default App;
