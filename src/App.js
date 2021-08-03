import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Carousel from "./components/carousel/Carousel";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/carousel" component={Carousel} />
      </Router>
    </div>
  );
}

export default App;
