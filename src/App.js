import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// CSS
import "./assets/css/app.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

// Components
import Header from "./components/layout/Header";
import Submissions from "./pages/Submissions";
import Location from "./pages/Location";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="app">
        <Header title="Romaler Assignment" />
        <main className="app__main">
          <Switch>
            <Route exact path="/" component={Submissions} />
            <Route exact path="/about" component={About} />
            <Route exact path="/location" component={Location} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
