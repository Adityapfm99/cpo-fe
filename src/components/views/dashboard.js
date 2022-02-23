import React from "react";
import { Input, Button, FormGroup, Label } from "reactstrap";
import ChartReportCpoPerpulau from "../../utilities/chart/chartReportCpoPerpulau";
import ChartReportPerPulau from "../../utilities/chart/chartReportPerPulau";
import ChartExportCPO from "../../utilities/chart/exportCPO";
import ChartProductTbs from "../../utilities/chart/productTbs";
import TableDashboard from "../../utilities/tableDashboard";
import TableReportPerGroup from "../../utilities/tableReportPerGroup";

const Dashboard = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 style={{ marginTop: "2rem" }}>Dashboard</h1>
            <hr></hr>
          </div>
        </div>
        <div className="col-0">
          <FormGroup>
            <div className="row">
              
              <div className="col-1">
                <Label for="tahun">Tahun</Label>
              </div>
              <div className="col-2">
                <Input name="tahun" type="select">
                  <option>2020</option>
                  <option>2021</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                </Input>
              </div>
              
              <div className="col-1">
                <Label for="method">Method</Label>
              </div>
              <div className="col-2">
                <Input name="method" type="select">
                  <option>Linear</option>
                  <option>Moving Average</option>
                  <option>Logarithmic</option>
                  <option>Exponential</option>
       
                </Input>
              </div>
              
            </div>
          </FormGroup>
        </div>
        <div className="row" style={{ marginTop: "3em" }}>
          <div className="col-6">
            <ChartProductTbs />
          </div>
          <div className="col-6">
            <ChartExportCPO />
          </div>
        </div>
        <div className="row" style={{ marginTop: "3em" }}>
          <div className="col-12">
            <TableDashboard />
          </div>
        </div>
        <div
          className="row"
          style={{
            marginTop: "3em",
            marginBottom: "3em",
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <div className="col-6">
            <ChartReportPerPulau />
          </div>
          <div className="col-4">
            <ChartReportCpoPerpulau />
          </div>
        </div>
        {/* <div className="row" style={{ marginTop: "3em" }}>
                    <div className="col-12">
                        <TableReportPerGroup />
                    </div>
                </div> */}
      </div>
    </>
  );
};

export default Dashboard;
