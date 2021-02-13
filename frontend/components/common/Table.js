import React, { Children } from 'react';

const Table = ({ name, address, disease, children, detail1, detail2 }) => {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr className=" text-left rounded-md">
          <th className="p-4 text-lg font-semibold text-gray-400">{name}</th>
          <th className="p-4 text-lg font-semibold text-gray-400">{detail1}</th>
          <th className="p-4 text-lg font-semibold text-gray-400">{detail2}</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
