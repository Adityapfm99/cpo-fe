import { Input, Button, FormGroup, Label } from 'reactstrap';
const TableReportPerGroup = () => {

    return (
        <div className="row" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyConten: "space-evenly" }}>
            <div className="col-6">
                <FormGroup>
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
                                type="month"
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
                                type="month"
                            />
                        </div>
                    </div>
                </FormGroup>
            </div>
            <div className="col-6" style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                <Button style={{ marginLeft: "10px" }} color="info">
                    <span style={{ color: "white", marginRight: "10px" }}>Upload CSV</span>
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6L10 0ZM12 14H9V17H7V14H4V12H7V9H9V12H12V14ZM9 7V1.5L14.5 7H9Z" fill="white" />
                    </svg>
                </Button>
                <Button style={{ marginLeft: "10px" }} color="warning" >
                    <span style={{ color: "white", marginRight: "10px" }}>Export</span>
                    <svg width="27" height="18" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.4708 13L18.2943 9H14.6766V0H12.2649V9H8.64723L13.4708 13ZM24.3237 0H17.0884V1.99H24.3237V16.02H2.61782V1.99H9.85311V0H2.61782C1.29135 0 0.206055 0.9 0.206055 2V16C0.206055 17.1 1.29135 18 2.61782 18H24.3237C25.6502 18 26.7355 17.1 26.7355 16V2C26.7355 0.9 25.6502 0 24.3237 0Z" fill="white" />
                    </svg>
                </Button>
                <Button style={{ marginLeft: "10px" }} color="primary-button">
                    <span style={{ color: "white", marginRight: "10px" }}>Search</span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#FFFDFD" />
                    </svg>
                </Button>
            </div>
        </div>
    )

}
export default TableReportPerGroup