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
  const [isLogin, setIsLogin] = useState(false);

  const [margin, setMargin] = useState({
    marginLeft: "auto", marginTop: "auto"
  })

  const styles = {
    contentDiv: {
      display: "flex",
    },
    contentMargin: {
      marginLeft: margin.marginLeft,
      marginTop: margin.marginTop,
      width: "100%",
    },
   
  };
  return (
    <>
      {
        isLogin ? 
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>
          :
          null
      }

      <div style={styles.contentDiv}>
        {isLogin ? <SideNavigation/> : null}

        <div style={styles.contentMargin}>
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/login" >
                <Login setIsLogin={setIsLogin} setMargin={setMargin} history={history} />
              </Route>
              <Route path="/register" component={Register} />
              <Route path="/forgot" component={Forgot} />
              <Route path="/pabrik" component={Factory} />
              <Route path="/dataIndustry" component={DataIndustry} />
              <Route path="/dailyReport" component={DailyReport} />
              <Route path="/productionGroup" component={ProductionGroupReport} />
              <Route path="/productionIndustry" component={IndustryGroupReport} />
              <Route path="/productionPT" component={PTGroupReport} />
              <Route path="/inputDailyReport" component={InputDailyReport} />
              <Route path="/" >
                <Login setIsLogin={setIsLogin} setMargin={setMargin} history={history} />
              </Route>
            </Switch>
        </div>

        
      </div>
    </>
  );
}

export default App;
