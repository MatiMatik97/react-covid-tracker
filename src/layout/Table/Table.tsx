import React from "react";
import "./Table.scss";
import { formatLargeNumber } from "../../utils";

interface TableProps {
  tableData: TTableData;
}

const Table: React.FC<TableProps> = ({ tableData }) => {
  return (
    <table className="table">
      <tbody>
        {tableData
          .sort((a: ITableData, b: ITableData) => b.cases - a.cases)
          .map(({ country, cases }, index) => (
            <tr key={index}>
              <td>{country}</td>
              <td>
                <strong>{formatLargeNumber(cases)}</strong>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
