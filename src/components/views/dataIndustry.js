import React from 'react';
import { Input, Button } from 'reactstrap';
import TableDataIndustry from '../../utilities/tableDataIndustry';


const DataIndustry = () => {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 style={{ marginTop: "2rem"  }}>Data Pabrik</h1>
                    </div>
                </div>
                <div className="row" style={{ display: "flex", flexDirection: "row", justifyConten: "space-evenly" }}>
                    <div className="col-6">
                        <div className="col-6">
                            <Input type="text">
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.71 16.29L14.31 12.9C15.407 11.5025 16.0022 9.77666 16 8C16 6.41775 15.5308 4.87103 14.6518 3.55544C13.7727 2.23985 12.5233 1.21447 11.0615 0.608967C9.59966 0.00346625 7.99113 -0.15496 6.43928 0.153721C4.88743 0.462403 3.46197 1.22433 2.34315 2.34315C1.22433 3.46197 0.462403 4.88743 0.153721 6.43928C-0.15496 7.99113 0.00346625 9.59966 0.608967 11.0615C1.21447 12.5233 2.23985 13.7727 3.55544 14.6518C4.87103 15.5308 6.41775 16 8 16C9.77666 16.0022 11.5025 15.407 12.9 14.31L16.29 17.71C16.383 17.8037 16.4936 17.8781 16.6154 17.9289C16.7373 17.9797 16.868 18.0058 17 18.0058C17.132 18.0058 17.2627 17.9797 17.3846 17.9289C17.5064 17.8781 17.617 17.8037 17.71 17.71C17.8037 17.617 17.8781 17.5064 17.9289 17.3846C17.9797 17.2627 18.0058 17.132 18.0058 17C18.0058 16.868 17.9797 16.7373 17.9289 16.6154C17.8781 16.4936 17.8037 16.383 17.71 16.29ZM2 8C2 6.81332 2.3519 5.65328 3.01119 4.66658C3.67047 3.67989 4.60755 2.91085 5.7039 2.45673C6.80026 2.0026 8.00666 1.88378 9.17055 2.11529C10.3344 2.3468 11.4035 2.91825 12.2426 3.75736C13.0818 4.59648 13.6532 5.66558 13.8847 6.82946C14.1162 7.99335 13.9974 9.19975 13.5433 10.2961C13.0892 11.3925 12.3201 12.3295 11.3334 12.9888C10.3467 13.6481 9.18669 14 8 14C6.4087 14 4.88258 13.3679 3.75736 12.2426C2.63214 11.1174 2 9.5913 2 8Z" fill="#006A7A" />
                                </svg>
                            </Input>
                        </div>
                    </div>
                    <div className="col">
                        <Button color="primary-button" style={{ color: "white" }}>
                            <span style={{ margin: "10px" }}>Tambah Pabrik</span> 
                            <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 4H0V6H11V4ZM11 0H0V2H11V0ZM15 8V4H13V8H9V10H13V14H15V10H19V8H15ZM0 10H7V8H0V10Z" fill="white" />
                            </svg>
                        </Button>
                    </div>
                    <div className="col">
                        <Button color="info" style={{ color: "white" }} >
                            <span style={{ margin: "10px" }}>Upload CSV</span>
                            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6L10 0ZM12 14H9V17H7V14H4V12H7V9H9V12H12V14ZM9 7V1.5L14.5 7H9Z" fill="white" />
                            </svg>
                        </Button>
                    </div>
                    <div className="col" style={{ color: "white" }}>
                        <Button color="warning" >
                            <span style={{ margin: "10px" }}>Export</span>
                            <svg width="27" height="18" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.4708 13L18.2943 9H14.6766V0H12.2649V9H8.64723L13.4708 13ZM24.3237 0H17.0884V1.99H24.3237V16.02H2.61782V1.99H9.85311V0H2.61782C1.29135 0 0.206055 0.9 0.206055 2V16C0.206055 17.1 1.29135 18 2.61782 18H24.3237C25.6502 18 26.7355 17.1 26.7355 16V2C26.7355 0.9 25.6502 0 24.3237 0Z" fill="white" />
                            </svg>
                        </Button>
                    </div>
                </div>
                <div className="row" style={{ margin: "auto", marginTop: "5rem"  }}>
                    <TableDataIndustry/>
                </div>
            </div>
        </>
    )
}

export default DataIndustry