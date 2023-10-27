import React from 'react';

const DashaTableformate = ({ period, title }) => (
  <div>
    <h3>{title} Dasha Period</h3>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Planet</th>
          <th>Start Date and Time</th>
          <th>End Date and Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{period.planet}</td>
          <td>{period.start}</td>
          <td>{period.end}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default DashaTableformate;
