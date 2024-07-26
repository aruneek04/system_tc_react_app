// Table.js

import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const Table = ({ data }) => {
  return (
    <table className="enterprise-table">
      <TableHeader />
      <tbody>
        {data.map((item) => (
          <TableRow key={item.Id} item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
