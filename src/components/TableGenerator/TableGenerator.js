import React from 'react';

const TableGenerator = ({ headers, data }) => {
  return (
    <div className="container my-4">
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            {headers.map((head, i) => (
              <th key={i}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((head, colIndex) => (
                <td key={colIndex}>{row[head]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableGenerator;
