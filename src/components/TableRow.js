// TableRow.js

import React from 'react';

const TableRow = ({ item }) => {
  return (
    <tr>
        <td>{item.Id}</td>
        <td>{item.Program}</td>
        <td>{item.Platform}</td>
        <td>{item["IPv4 Address"]}</td>
        <td>{item["CPU Count"]}</td>
        <td>{item["CPU family"]}</td>
        <td>{item["CPU qdf"]}</td>
        <td>{item["CPU cores"]}</td>
      {/* Add more cells as needed */}
    </tr>
  );
};

export default TableRow;
