import { Container } from "react-bootstrap";
import UnitContainer from "./components/UnitCard";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <UnitContainer></UnitContainer>
        </Container>
      </header>
    </div>
  );
}

export default App;
