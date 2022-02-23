import React from 'react';
import { Table } from 'reactstrap';

const TableDataTbsCpo = () => {
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
                            Pulau
                        </th>
                        <th>
                            Produksi TBS (tandan)
                        </th>
                        <th>
                            Produksi CPO (metrik ton)
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
                            Kalimantan
                        </td>
                        <td>
                            1000
                        </td>
                        <td>
                            30
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
                            Kalimantan
                        </td>
                        <td>
                            1000
                        </td>
                        <td>
                            30
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
                            Kalimantan
                        </td>
                        <td>
                            1000
                        </td>
                        <td>
                            30
                        </td>
                        

                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default TableDataTbsCpo