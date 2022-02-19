import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/views/Login";
import Register from "./components/views/Register";
import Forgot from "./components/views/Forgot";
import Factory from "./components/views/pabrik";
import DataIndustry from "./components/views/dataIndustry";
import React, {useState} from 'react'

import Header from "../src/header";
import SideNavigation from "../src/components/sidebar/sidebar";
import { Col, Row } from "reactstrap";
import DailyReport from "./components/views/dailyReport";
import InputDailyReport from "./components/views/inputDailyReport";

function App() {
  const [isLoginScreen] = useState(true)
  const styles = {
    contentDiv: {
      display: "flex",
    },
    contentMargin: {
      marginLeft: "10px",
      width: "100%",
    },
  };
  return (
    <>
      {
        isLoginScreen ? 
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>
          :
          null
      }

      <div style={styles.contentDiv}>
        { isLoginScreen ? <SideNavigation/> : null}
        <div style={styles.contentMargin}>
          <Router>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/forgot-password" component={Forgot} />
              <Route path="/pabrik" component={Factory} />
              <Route path="/dataIndustry" component={DataIndustry} />
              <Route path="/dailyReport" component={DailyReport} />
              <Route path="/inputDailyReport" component={InputDailyReport} />
              <Route path="/" component={Login} />
            </Switch>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
