import React from "react";
import { Table } from "reactstrap";

import { FaFilePdf, FaEye } from "react-icons/fa";
const TableLaporanTbsCpo = () => {
  return (
    <>
      <Table bordered>
        <thead>
          <tr>
            <th>No</th>
            <th>Periode</th>
            <th>PT</th>
            <th>Pulau</th>
            <th>Produksi TBS</th>
            <th>Produksi CPO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>02 Agustus 2021 - 09 Agustus 2021</td>
            <td>PT. ABC</td>
            <td>Jawa</td>
            <td align='center'>1.000</td>
            <td align='center'>28</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>02 Agustus 2021 - 09 Agustus 2021</td>
            <td>PT. ABC</td>
            <td>Jawa</td>
            <td align='center'>1.000</td>
            <td align='center'>28</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>02 Agustus 2021 - 09 Agustus 2021</td>
            <td>PT. ABC</td>
            <td>Jawa</td>
            <td align='center'>1.000</td>
            <td align='center'>28</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>02 Agustus 2021 - 09 Agustus 2021</td>
            <td>PT. ABC</td>
            <td>Jawa</td>
            <td align='center'>1.000</td>
            <td align='center'>28</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>02 Agustus 2021 - 09 Agustus 2021</td>
            <td>PT. ABC</td>
            <td>Jawa</td>
            <td align='center'>1.000</td>
            <td align='center'>28</td>
          </tr>
          <tr >
            <th scope="row">6</th>
            <td>02 Agustus 2021 - 09 Agustus 2021</td>
            <td>PT. ABC</td>
            <td>Jawa</td>
            <td align='center'>1.000</td>
            <td align='center'>28</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default TableLaporanTbsCpo;
