import React from "react"
import faker from "faker";
import { Table } from "reactstrap"

const labels = ['Jan-21', 'Feb-21', 'Mar-21', 'Apr-21', 'May-21', 'Jun-21', 'Jul-21', 'Aug-21', 'Sep-21', 'Okt-21', 'Nov-21', 'Dec-21'];
const productTbs = labels.map(() => faker.datatype.number({ min: 0, max: 1000 }));
const productCpo = labels.map(() => faker.datatype.number({ min: 0, max: 1000 }));
const exportCpo = labels.map(() => faker.datatype.number({ min: 0, max: 1000 })); 
const TableDashboard = () => {
    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th> Bulan </th>
                        {
                            labels.map(el => {
                                return (
                                    <th>{el}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                            <svg width="41" height="12" viewBox="0 0 41 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="41" height="12" fill="#A9D18E" />
                            </svg>
                            Produksi TBS
                        </th>
                        {
                            productTbs.map(el => {
                                return (
                                    <th>{el}</th>
                                )
                            })
                        }
                    </tr>
                    <tr>
                        <th>
                            <svg width="41" height="3" viewBox="0 0 41 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="41" height="3" fill="#C55A11" />
                            </svg>
                            Produksi CPO
                        </th>
                        {
                            productCpo.map(el => {
                                return (
                                    <th>{el}</th>
                                )
                            })
                        }
                    </tr>
                    <tr>
                        <th>
                            <svg width="41" height="6" viewBox="0 0 41 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="3" r="3" fill="#101010" />
                                <rect y="2" width="41" height="3" fill="#1139C5" />
                            </svg>
                            Export CPO
                        </th>
                        {
                            exportCpo.map(el => {
                                return (
                                    <th>{el}</th>
                                )
                            })
                        }
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default TableDashboard