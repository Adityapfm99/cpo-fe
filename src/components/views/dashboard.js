import React from "react"
import ChartReportCpoPerpulau from "../../utilities/chart/chartReportCpoPerpulau"
import ChartReportPerPulau from "../../utilities/chart/chartReportPerPulau"
import ChartExportCPO from "../../utilities/chart/exportCPO"
import ChartProductTbs from "../../utilities/chart/productTbs"
import TableDashboard from "../../utilities/tableDashboard"
import TableReportPerGroup from "../../utilities/tableReportPerGroup"

const Dashboard = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 style={{ marginTop: "2rem" }}>Dashboard</h1>
                    </div>
                </div>
                <div className="row" style={{ marginTop: "3em" }}>
                    <div className="col-6">
                        <ChartProductTbs/>
                    </div>
                    <div className="col-6">
                        <ChartExportCPO/>
                    </div>
                </div>
                <div className="row" style={{ marginTop: "3em" }}>
                    <div className="col-12">
                        <TableDashboard/>
                    </div>
                </div>
                <div className="row" style={{ marginTop: "3em", marginBottom: "3em",  display: 'flex', justifyContent:'space-between', alignContent:'center' }}>
                    <div className="col-6">
                        <ChartReportPerPulau/>
                    </div>
                    <div className="col-4">
                        <ChartReportCpoPerpulau />
                    </div>
                </div>
                <div className="row" style={{ marginTop: "3em" }}>
                    <div className="col-12">
                        <TableReportPerGroup />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard