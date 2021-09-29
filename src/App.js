import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import UnitContainer from "./components/UnitContainer";
import LandingPage from "./components/LandingPage";
import IssueSubmission from "./components/IssueSubmission";
import AdminPanel from "./components/AdminPanel";
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
        <Route path="/available_units" exact component={UnitContainer}></Route>
        <Route path="/issues" component={IssueSubmission} />
        <Route path="/admin" component={AdminPanel} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
