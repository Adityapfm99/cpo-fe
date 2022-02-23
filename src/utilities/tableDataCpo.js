import React from 'react';
import { Table } from 'reactstrap';

const TableDataCpo = () => {
    return (
        <>
            <Table bordered>
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            PT
                        </th>
                        <th>
                            Export CPO
                        </th>
                        <th>
                            Pulau
                        </th>
                     
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            1
                        </th>
                        <td>
                            PT. ABC
                        </td>
                        <td>
                            3000
                        </td>
                        <td>
                            Kalimantan
                        </td>
                        
                    </tr>
                    <tr>
                        <th scope="row">
                            2
                        </th>
                        <td>
                            PT. DEF
                        </td>
                        <td>
                            4000
                        </td>
                        <td>
                            Sumatera
                        </td>
                       
                    </tr>
                    <tr>
                        <th scope="row">
                            3
                        </th>
                        <td>
                            PT. GHI
                        </td>
                        <td>
                            3500
                        </td>
                        <td>
                        Kalimantan
                        </td>
                        
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default TableDataCpo