import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/App.css";
import NavBar from "./Components/NavBar";
import QuestionsListContainer from "./Container/container.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Calculator from "./calculator/Calculator.jsx";
import EcoAdvice from "./ecoAdvice.jsx";
import Donate from "./Donate.jsx";
import Newsletter from "./Newsletter.jsx";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        {/* <QuestionsListContainer /> */}
        {/* Footer */}
        <Switch>
          <Route exact path="/" render={() => <Calculator />} />
          <Route path="/consejos" render={() => <EcoAdvice />} />
          <Route path="/planta" render={() => <Donate />} />
          <Route path="/newsletter" render={() => <Newsletter />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
