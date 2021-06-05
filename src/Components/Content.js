import React from "react";
import "./Content.css";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Content = ({ data }) => {
  return (
    <div className="row">
      <div className="out">
        <Table striped transparent hover className="table">
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
              <td>LONGITUDE</td>
              <td>{data.longitude}</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>LATITUDE</td>
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
  );
};

// Content.defaultProps={

// }

export default Content;
