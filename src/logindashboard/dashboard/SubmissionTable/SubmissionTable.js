import React from 'react';
import './SubmissionTable.css';

function SubmissionTable() {
  return (
    <div className="submissionTable-card">
      <h3>Your submissions </h3>
      <table>
        <thead>
          <tr>
            <th>Report PDF</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>NDC report May2023</td>
            <td className="approved">Approved</td>
          </tr>
          <tr>
            <td>ETF report May2022</td>
            <td className="in-review">In Review</td>
          </tr>
          <tr>
            <td>ETF report June2020</td>
            <td className="approved">Approved</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SubmissionTable;
