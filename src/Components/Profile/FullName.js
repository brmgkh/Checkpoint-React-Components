import React from "react";
import Table from "react-bootstrap/Table";

const FullName = () => {
  return (
    <Table striped bordered hover style={{ width: "50%", margin: "auto" }}>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Full Name</th>
          <th>User</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Ibrahim</td>
          <td>Maghraoui</td>
          <td>Ibrahim Maghraoui </td>
          <td>@brmg</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jeff</td>
          <td>Bezos</td>
          <td>Jeff Bezos</td>
          <td>@JfBzs</td>
        </tr>

        <tr>
          <td>3</td>
          <td>Mark</td>
          <td>Zuckerberg</td>
          <td>Mark Zuckerberg</td>
          <td>@mrkzbrg</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Larry</td>
          <td>Page</td>
          <td>Larry Page</td>
          <td>@lrypg</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default FullName;
