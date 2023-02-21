import React from "react";
import Chatbot from "./components/Chatbot";

import Navbar from "./components/Navbar";
import Routes from "./Routes";

const App = () => {
  return (
    <div>
      <Navbar />
      <Chatbot />
      <Routes />
    </div>
  );
};

export default App;
