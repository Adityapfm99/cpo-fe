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
import ProductionGroupReport from "./components/views/reportProduksiGroup";
import PTGroupReport from "./components/views/reportProduksiPT";
import IndustryGroupReport from "./components/views/reportProduksiIndustry";
import InputDailyReport from "./components/views/inputDailyReport";
import Dashboard from "./components/views/dashboard";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  const page = history.location.pathname
  let marginLeft = page !== '/login' && page !== '/' ? "10%" : "auto";
  let marginTop = page !== '/login' && page !== '/' ? "5%" : "auto";
  // console.log(page !== '/login', "page");
  if (page ==='/register' || page ==='/forgot') {
    marginLeft = '10%'
    marginTop = '0%'
  }
  const styles = {
    contentDiv: {
      display: "flex",
    },
    contentMargin: {
      marginLeft,
      marginTop,
      width: "100%",
    },
   
  };
  return (
    <>
      {
        page !== "/login" && page !== "/" ? 
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>
          :
          null
      }

      <div style={styles.contentDiv}>
        {page !== "/login" && page !== "/" ? <SideNavigation/> : null}

        <div style={styles.contentMargin}>
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/forgot" component={Forgot} />
              <Route path="/pabrik" component={Factory} />
              <Route path="/dataIndustry" component={DataIndustry} />
              <Route path="/dailyReport" component={DailyReport} />
              <Route path="/productionGroup" component={ProductionGroupReport} />
              <Route path="/productionIndustry" component={IndustryGroupReport} />
              <Route path="/productionPT" component={PTGroupReport} />
              <Route path="/inputDailyReport" component={InputDailyReport} />
              <Route path="/" component={Login} />
            </Switch>
        </div>

        
      </div>
    </>
  );
}

export default App;
