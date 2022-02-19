import React from 'react'
import { Input, Label } from 'reactstrap';
const InputDailyReport = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 style={{ marginTop: "2rem", marginLeft: "10px" }}>Input Daily Report</h1>
                    </div>
                </div>
                <div className="row" style={{ marginTop: "3rem", marginLeft: "10px" }}>
                    <div className="col-6">
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
                                <span style={{ marginLeft: "20px" }}>s/d</span>
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
                    <div className="col-6">
                        <div className="row">
                            <div className="col-2">
                                <Label for="exampleDate">
                                    PT
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
                    <div className="col-6">
                        <div className="row">
                            <div className="col-2">
                                <Label for="exampleDate">
                                    Export TBS
                                </Label>
                            </div>
                            <div className="col">
                                <Input
                                    id="exampleDate"
                                    name="date"
                                    placeholder="TBS"
                                    type="text"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: "1rem", marginLeft: "10px" }}>
                    <div className="col-6">
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
                                    placeholder="CPO"
                                    type="text"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: "1rem", marginLeft: "10px" }}>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-2">
                                <Label for="exampleDate">
                                    Pulau
                                </Label>
                            </div>
                            <div className="col">
                                <Input
                                    name="pulau"
                                    type="select"
                                >
                                    <option>
                                        pilih salah satu
                                    </option>
                                    <option>
                                        Sumatera
                                    </option>
                                    <option>
                                        Kalimantan
                                    </option>
                                </Input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: "1rem", marginLeft: "10px" }}>
                    <div className="col-6" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn btn-primary w-100 text-white theme-btn mx-auto"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InputDailyReport