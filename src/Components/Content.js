import React from "react";

import { Table, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Content = ({ data }) => {
  return (
    // <div className="Container">
    <div className="row">
      <div className="col-md-6 m-4">
        <Table striped bordered hover variant="success">
          <thead>
            <tr>
              <th>#</th>
              <th>Attribute</th>
              <th className="col-md-5">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>DESCRIPTION</td>
              <td>{data.description}</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>LON</td>
              <td>{data.longitude}</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>LAT</td>
              <td>{data.latitude}</td>
            </tr>
            <tr>
              <td>5.</td>
              <td>City Name</td>
              <td>{data.city}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
    // </div>
  );
};

// Content.defaultProps={

// }

export default Content;
