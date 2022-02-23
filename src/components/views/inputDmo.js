import React from 'react'

import { useHistory } from "react-router-dom";
import { Input, Label } from 'reactstrap';
const InputDmo = () => {
    const history = useHistory()
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 style={{ marginTop: "2rem", marginLeft: "10px" }}>Data DMO</h1>
                    </div>
                </div>
                <div className="row" style={{ marginTop: "3rem", marginLeft: "10px" }}>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-2">
                                <Label for="exampleDate">
                                    Periode
                                </Label>
                            </div>
                            <div className="col">
                                <Input
                                    id="exampleDate"
                                    name="date"
                                    placeholder="date placeholder"
                                    type="date"
                                />
                            </div>
                            <div className="col">
                                <span style={{ marginLeft: "10px" }}>s/d</span>
                            </div>
                            <div className="col">
                                <Input
                                    id="exampleDate"
                                    name="date"
                                    placeholder="date placeholder"
                                    type="date"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: "1rem", marginLeft: "10px" }}>
                <div className="col-8">
                        <div className="row">
                            <div className="col-2">
                                <Label for="exampleDate">
                                    Export CPO
                                </Label>
                            </div>
                           
                            <div className="col">
                                <Input
                                    id="exampleDate"
                                    name="date"
                                    placeholder="PT"
                                    type="text"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: "1rem", marginLeft: "10px" }}>
                <div className="col-8">
                        <div className="row">
                            <div className="col-2">
                                <Label for="pulau">
                                    Domestic Market Obligation
                                </Label>
                            </div>
                            <div className="col">
                                <Input
                                    name="dmo"
                                    type="text"
                                >
                                   
                                </Input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: "1rem", marginLeft: "10px" }}>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-2">
                                <Label for="exampleDate">
                                    Upload Dokumen Export
                                </Label>
                            </div>
                            <div className="col">
                                <Input
                                    id="exportCPO"
                                    name="cpo"
                                    placeholder="CPO"
                                    type="file"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: "1rem", marginLeft: "10px" }}>
                <div className="col-8">
                        <div className="row">
                            <div className="col-2">
                                <Label for="exampleDate">
                                    Upload Dokumen Refinery
                                </Label>
                            </div>
                            <div className="col">
                                <Input
                                    id="exportCPO"
                                    name="cpo"
                                    placeholder="TBS"
                                    type="file"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                className="col-8"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                <div className="text-center">
                  <button
                   style={{ background: "red" ,color:"white"}}
                    type="submit"
                    onClick={() => history.push('/summaryTbsCpo')}
                    className="btn btn-primary w-100 theme-btn mx-auto"
                  >
                    Back
                  </button>
                </div>
                <li>.</li>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 theme-btn mx-auto"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
        </>
    )
}

export default InputDmo