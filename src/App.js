import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";

// Home:
import Home from "./pages/Home/Home";
// About:
import About from "./pages/About/About";
// Product:
import Product from "./pages/Product/Product";

function App() {
  return (
    <div>
      <main>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/product" component={Product} />
          </Switch>
        </HashRouter>
      </main>
    </div>
  );
}

export default App;
