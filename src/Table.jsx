import React from "react";

const Table = ({ title, data }) => (
  <div>
    <h2 className="table-title">{title}</h2>
    <table className="table table-bordered table-striped">
      <thead className="thead-dark">
        <tr>
          <th>Planet</th>
          <th>Start</th>
          <th>End</th>
        </tr>
      </thead>
      <tbody>
        {data.map((period, index) => (
          <tr key={index}>
            <td>{period.planet}</td>
            <td>{period.start}</td>
            <td>{period.end}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);



export default Table;