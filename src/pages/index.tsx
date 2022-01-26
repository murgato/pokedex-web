import React from "react";

import Routes from "../routes";
import "../css/App.css";
import { Header } from "../components";
import { Provider } from "react-redux";
import store from "../store";

function App() {
  return (
    <div className="App">
      <Header />
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
