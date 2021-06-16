import "./App.css";
import { HomePage, NotFound, SingleRepo } from "./pages/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/repo/:username/:name" component={SingleRepo} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
