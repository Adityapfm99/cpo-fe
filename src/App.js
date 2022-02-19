import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/views/Login";
import Register from "./components/views/Register";
import Forgot from "./components/views/Forgot";
import Factory from "./components/views/pabrik";
import FactoryData from "./components/views/dataPabrik";

import Header from "../src/header";
import SideNavigation from "../src/components/sidebar/sidebar";
// import { Col, Row } from "reactstrap";
// import { useState } from "react";

function App() {
  // const [isLoginScreen] = useState(false);
  const styles = {
    contentDiv: {
      display: "flex",
    },
    contentMargin: {
      marginLeft: "5px",
      width: "100%",
    },
    contentMargin1: {
      marginLeft: "5px",
      width: "100%",
    },
  };
  return (
    <>
      <div style={styles.contentDiv}>
        <div style={styles.contentMargin}>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/forgot-password" component={Forgot}></Route>
              <div style={styles.contentMargin1}>
                <Header />
                <SideNavigation />
                <Route  path="/register" component={Register}></Route>
                <Route  path="/pabrik" component={Factory}></Route>
                <Route  path="/dataPabrik" component={FactoryData}></Route>
              </div>
            </Switch>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
