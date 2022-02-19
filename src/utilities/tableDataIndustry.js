import React from 'react';
import { Table } from 'reactstrap';

const TableDataIndustry = () => {
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
                            Pulau
                        </th>
                        <th>
                            Pabrik
                        </th>
                        <th>
                            Kapasitas(ton/jam)
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
                            Jawa
                        </td>
                        <td>
                            PKS A
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
                            PT. DEF
                        </td>
                        <td>
                            Jawa Barat
                        </td>
                        <td>
                            PKS B
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
                            PT. GHI
                        </td>
                        <td>
                            Jawa Timur
                        </td>
                        <td>
                            PKS C
                        </td>
                        <td>
                            35
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default TableDataIndustry