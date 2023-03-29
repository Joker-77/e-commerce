import logo from "./logo.svg";
import "./App.css";
import Greeting from "./Components/Greeting.tsx";

function App() {
  return (
    <div className="App">
      <Greeting key={0} message="Hello" firstName="Basel" lastName="Mariam" />
    </div>
  );
}

export default App;
