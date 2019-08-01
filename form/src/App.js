import React from "react";
import "./App.css";
import NameForm from "./components/NameForm/NameForm.js";
import EssayForm from "./components/EssayForm/EssayForm.js";
import FlavorForm from "./components/FlavorForm/FlavorForm.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">React Forms Gist</header>

      <NameForm />
      <EssayForm />
      <FlavorForm />
    </div>
  );
}

export default App;
