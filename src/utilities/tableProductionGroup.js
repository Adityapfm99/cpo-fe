import React from 'react'
import { Table } from 'reactstrap'

const TableProductionGroup = () => {
    return (
        <Table bordered>
            <thead>
                <tr>
                    <th>
                        No
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
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">
                        1
                    </th>
                    <td>
                        PKS A
                    </td>
                    <td>
                        4.567
                    </td>
                    <td>
                        4.567
                    </td>
                    <td>
                        2.010
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        2
                    </th>
                    <td>
                        PKS B
                    </td>
                    <td>
                        5.672
                    </td>
                    <td>
                        5.672
                    </td>
                    <td>
                        3.310
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        3
                    </th>
                    <td>
                        PKS C
                    </td>
                    <td>
                        6.852
                    </td>
                    <td>
                        6.852
                    </td>
                    <td>
                        2.100
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}

export default TableProductionGroup