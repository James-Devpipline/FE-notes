import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../styles/main.scss";
import PrivateRoute from "./core/PrivateRoute";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Admin from "./pages/Admin";
import Navbar from "./navigation/Navbar";

// No Match (404)

/* 
BrowserRouter -> Allows us to track window location changes, and utilize the tools in react-router-dom (Switch, Link, NavLink, Route...)
Switch -> Exclusive Route matching
Route -> Dictates what component to render based on the window's location
*/

export default function App() {
  const loggedIn = false;

  return (
    <div className="App">
      <Router>
        <Route component={Navbar} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route path="/products/:id" component={Product} />
          <PrivateRoute
            roles={["super-admin", "admin"]}
            path="/admin"
            render={(routeProps) => (
              <Admin {...routeProps} firstName="ryan" status={loggedIn} />
            )}
          />

          <Route
            render={(routeProps) => (
              <div>
                <h1>
                  Oops, couldn't find {routeProps.location.pathname.slice(1)}
                </h1>
              </div>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}
