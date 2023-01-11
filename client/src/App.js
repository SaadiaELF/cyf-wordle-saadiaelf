import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
function App() {
  return (
    <div className="App">
      <Header />
      <Board />
      <Keyboard />
    </div>
  );
}

export default App;
