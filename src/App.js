import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
      <Router>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/product" component={Product} />
          </Switch>
          {/* <nav> */}
          {/* <ul className=""> */}
          {/* <li>
                <Link to="/">Home</Link>
              </li> */}
          {/* <li>
                <Link to="/about">About
                </Link>
              </li>
              <li>
                <Link to="/product">Product</Link>
              </li>
            </ul> */}
          {/* </nav> */}
        </main>
      </Router>
    </div>
  );
}

export default App;
