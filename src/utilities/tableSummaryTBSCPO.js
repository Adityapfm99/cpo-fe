import React from 'react';
import { Table } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const TableSummaryTbsCpo = () => {
    const history = useHistory();
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
                            PT
                        </th>
                        <th>
                            Produksi TBS
                        </th>
                        <th>
                            Produksi CPO 
                        </th>
                        <th>
                            Export CPO
                        </th>
                        <th>
                            DMO
                        </th>
                        <th>
                            Detail
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
                            PT Maju Lancar
                        </td>
                        <td>
                            500
                        </td>
                        <td>
                            1000
                        </td>
                        <td>
                            30
                        </td>
                        <td>
                            302
                        </td>
                        <td align='center'>
                        <button onclick={() => history.push('/login')} ><i class="fa fa-eye"></i></button>
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
                            PT Maju Lancar
                        </td>
                        <td>
                            100
                        </td>
                        <td>
                            1000
                        </td>
                        <td>
                            30
                        </td>
                        <td>
                            130
                        </td>
                        <td align='center'>
                        <button onclick={() => history.push('/login')} ><i class="fa fa-eye"></i></button>
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
                            PT Maju Lancar
                        </td>
                        <td>
                            900
                        </td>
                        <td>
                            1000
                        </td>
                        <td>
                            30
                        </td>
                        <td>
                            230
                        </td>
                        <td align='center'>
                        <button onclick={() => history.push('/login')} ><i class="fa fa-eye"></i></button>
                        </td>


                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default TableSummaryTbsCpo