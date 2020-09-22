import React from "react";
import "./Table.scss";

interface TableProps {
  tableData: TTableData;
}

const Table: React.FC<TableProps> = ({ tableData }) => {
  return (
    <div className="table">
      {tableData
        .sort((a: ITableData, b: ITableData) => b.cases - a.cases)
        .map(({ country, cases }) => (
          <tr>
            <td>{country}</td>
            <td>
              <strong>{cases}</strong>
            </td>
          </tr>
        ))}
    </div>
  );
};

export default Table;
