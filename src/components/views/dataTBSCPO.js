import React from 'react';
import { useHistory } from "react-router-dom";
import { Input, Button,FormGroup, Label} from 'reactstrap';
import TableDataTbsCpo from '../../utilities/tableDataTBSCPO';


const DataTBSCPO = () => {
const history = useHistory()
return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 style={{ marginTop: "2rem" }}>TBS & CPO Report</h1>
        </div>
      </div>
      <hr></hr>
      <div
        className="row"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "left",
          justifyConten: "space-evenly",
        }}
      >
        <div className="col-0">
          <FormGroup>
            <div className="row">
              <div className="col-2">
                <Label for="bulan">Periode</Label>
              </div>
              <div className="col">
                <Input
                  id="month"
                  name="bulan"
                  placeholder="Bulan placeholder"
                  type="date"
                />
              </div>
              <br></br>
              <div className="col-2">
                <Label for="data">S/d</Label>
              </div>
              <div className="col">
              <Input
                  id="month"
                  name="bulan"
                  placeholder="Bulan placeholder"
                  type="date"
                />
              </div>
          
            </div>
            
          </FormGroup>
        </div>

        <div
          className="col-16"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Button style={{ marginLeft: "10px" }} onClick={() => history.push('/inputDailyReport')} color="warning">
            <span style={{ color: "white", marginRight: "10px" }}>Add Data</span>
            <svg
              width="27"
              height="18"
              viewBox="0 0 27 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.4708 13L18.2943 9H14.6766V0H12.2649V9H8.64723L13.4708 13ZM24.3237 0H17.0884V1.99H24.3237V16.02H2.61782V1.99H9.85311V0H2.61782C1.29135 0 0.206055 0.9 0.206055 2V16C0.206055 17.1 1.29135 18 2.61782 18H24.3237C25.6502 18 26.7355 17.1 26.7355 16V2C26.7355 0.9 25.6502 0 24.3237 0Z"
                fill="white"
              />
            </svg>
          </Button>
          <Button style={{ marginLeft: "10px" }} color="primary-button">
            <span style={{ color: "white", marginRight: "10px" }}>Search</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
                fill="#FFFDFD"
              />
            </svg>
          </Button>
        </div>
      </div>
                <div className="row" style={{ margin: "auto", marginTop: "5rem"  }}>
                    <TableDataTbsCpo/>
                </div>
            </div>
       
    )
}

export default DataTBSCPO