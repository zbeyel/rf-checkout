import { Button, Container } from "react-bootstrap";
import { Route, Link, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import UnitContainer from "./components/UnitCard";
import LandingPage from "./components/LandingPage";
import IssueSubmission from "./components/IssueSubmission";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Container></Container>
        </header>
      </div>
      <Switch>
        <Route path="/" exact component={LandingPage}></Route>
        <Route path="/available_units" component={UnitContainer}></Route>
        <Route path="/issues" component={IssueSubmission} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
