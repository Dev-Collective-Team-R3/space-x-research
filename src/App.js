import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import Button from './components/Button/Button'

function App() {
  return (
    <div className="">
      <Router>
      <div className=" absolute z-10">
        <ul className="flex flex-row mt-8">
          <li className="ml-2"><Button title="Home" link="/" /></li>
          <li className="ml-2"><Button title="Rockets" link="/rockets"/></li>
          <li className="ml-2"><Button title="SpaceX" link="/timeline"/></li>
          <li className="ml-2"><Button title="Launches" link="/launches"/></li>
          <li className="ml-2"><Button title="Capsules" link="/capsules"/></li>
        </ul>
      </div>
        <Switch>
            <Route exact path="/"><LandingPage /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
