import React, {Suspense} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
//import Carousel from "./components/carousel/Carousel";
//import Home from "./components/Home";
import Fallback from "./components/Fallback"

const Carousel = React.lazy(()=>import("./components/carousel/Carousel"))
const Home = React.lazy(()=>import("./components/Home"))

function App() {
  return (
    <div className="App">
      <Suspense fallback={Fallback}>
        <Router basename={process.env.PUBLIC_URL}>
          <Route exact path="/" component={Home} />
          <Route exact path="/carousel" component={Carousel} />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
