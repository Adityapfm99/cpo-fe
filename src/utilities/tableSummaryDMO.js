import React from 'react';
import { Table } from 'reactstrap';

import { FaFilePdf, FaEye } from "react-icons/fa";
const TableSummaryDmo = () => {
    return (
        <>
            <Table bordered>
                <thead>
                    <tr>
                        <th>
                            No
                        </th>
                        <th>
                            Periode
                        </th>
                        <th>
                            DMO
                        </th>
                        <th>
                            Export CPO
                        </th>
                        <th>
                            Dokumen Export 
                        </th>
                        <th>
                            Dokumen Refinery
                        </th>
                       
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            1
                        </th>
                        <td>
                            02 Agustus 2021 - 09 Agustus 2021
                        </td>
                        <td>
                            100
                        </td>
                        <td>
                            500
                        </td>
                        <td align='center'>
                        {<FaFilePdf/>}
                        </td>
                        <td align='center'>
                        {<FaFilePdf/>}
                        </td>
                        
                        
                    </tr>
                    <tr>
                        <th scope="row">
                            2
                        </th>
                        <td>
                            02 Agustus 2021 - 09 Agustus 2021
                        </td>
                        <td>
                            100
                        </td>
                        <td>
                            500
                        </td>
                        <td align='center'>
                        {<FaFilePdf/>}
                        </td>
                        <td align='center'>
                        {<FaFilePdf/>}
                        </td>
                       
                    </tr>
                    <tr>
                        <th scope="row">
                            3
                        </th>
                        <td>
                            02 Agustus 2021 - 09 Agustus 2021
                        </td>
                        <td>
                            100
                        </td>
                        <td>
                            500
                        </td>
                        <td align='center' >
                        {<FaFilePdf/>}
                        </td>
                        <td align='center'>
                        {<FaFilePdf/>}
                        </td>
                       
                    </tr>
                    <tr>
                        <th scope="row">
                            4
                        </th>
                        <td>
                            02 Agustus 2021 - 09 Agustus 2021
                        </td>
                        <td>
                            100
                        </td>
                        <td>
                            500
                        </td>
                        <td align='center' >
                        {<FaFilePdf/>}
                        </td>
                        <td align='center'>
                        {<FaFilePdf/>}
                        </td>
                     
                    </tr>
                    <tr>
                        <th scope="row">
                            5
                        </th>
                        <td>
                            02 Agustus 2021 - 09 Agustus 2021
                        </td>
                        <td>
                            100
                        </td>
                        <td>
                            500
                        </td>
                        <td align='center' >
                        {<FaFilePdf/>}
                        </td>
                        <td align='center'>
                        {<FaFilePdf/>}
                        </td>
                      
                    </tr>
                    <tr>
                        <th scope="row">
                            6
                        </th>
                        <td>
                            02 Agustus 2021 - 09 Agustus 2021
                        </td>
                        <td>
                            100
                        </td>
                        <td>
                            500
                        </td>
                        <td align='center' >
                        {<FaFilePdf/>}
                        </td>
                        <td align='center'>
                        {<FaFilePdf/>}
                        </td>
                       
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default TableSummaryDmo