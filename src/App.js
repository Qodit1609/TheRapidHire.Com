import { useState } from "react";
import "./App.css";
import HomePage from "./Components/Homepage/Homepage";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Services from "./Components/Service/Services";
import Contact_child from "./Components/Contact/Contact_child";
import About from "./Components/About/About";
import Features_Child from "./Components/Features_Child/Features_Child";
import Team_child from "./Components/Teams/Team_child";
import Technology_child from "./Components/Technologys/Technology_child";
import Career from "./Components/Career/Career";
import Apply from "./Components/Apply/Apply";
import Terms from "./Components/Terms/Terms";
import Policy from "./Components/Policy/Policy";
import HR_Dashboard from "./Admin/hr/HR_Dashboard";
import SalesDashboard from "./Admin/sales/SalesDashboard";
import AdminMain from "./Admin/AdminMain";
import Login from "./Admin/Login";

function App() {
  let [loaded, setLoaded] = useState(true);

  setTimeout(() => {
    setLoaded(false);
  }, 2000);
  return (
    <div>
      {loaded ? (
        <div className="loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div className="App">
          <Router>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/services" component={Services}></Route>
            <Route exact path="/contact_child" component={Contact_child}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route path="/features" component={Features_Child}></Route>
            <Route exact path="/Team" component={Team_child}></Route>
            <Route exact path="/career" component={Career}></Route>
            <Route exact path="/apply" component={Apply}></Route>
            <Route exact path="/terms" component={Terms}></Route>
            <Route exact path="/policy" component={Policy}></Route>
            <Route exact path="/technology"component={Technology_child}></Route>
            <Route exact path="/hr"component={HR_Dashboard}></Route>
            <Route exact path="/sales"component={SalesDashboard}></Route>
            <Route exact path="/admin"component={AdminMain}></Route>
            <Route exact path="/login"component={Login}></Route>

          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
