import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Route path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
