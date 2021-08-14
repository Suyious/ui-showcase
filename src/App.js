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
      <Router basename="/ui-showcase">
        <Suspense fallback={Fallback}>
          <Route exact path="/" component={Home} />
          <Route path="/carousel" component={Carousel} />
          <Route path="/fallbackpreview" component={Fallback}/>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
