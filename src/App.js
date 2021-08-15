import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Error404 from "./pages/Error404";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/404" component={Error404} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}
