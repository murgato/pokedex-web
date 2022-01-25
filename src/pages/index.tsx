import React from "react";

import Routes from "../routes";
import "../css/App.css";
import { Header } from "../components";
import GlobalContext from "../context";

function App() {
  return (
    <div className="App">
      <Header />
      <GlobalContext>
        <Routes />
      </GlobalContext>
    </div>
  );
}

export default App;
