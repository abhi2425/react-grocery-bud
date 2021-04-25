import React from "react";
import "./App.css";
import Basket from "./Components/Basket/Basket";

const app = () => (
  <div className="app">
    <main>
      <header className="title">Grocery Bud</header>
      <Basket />
    </main>
  </div>
);
export default app;
