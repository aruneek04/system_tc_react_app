// TableRow.js

import React from 'react';

const TableRow = ({ item }) => {
  return (
    <tr>
        <td>{item.Id}</td>
        <td>{item.Program}</td>
        <td>{item.Group}</td>
        <td>{item["IPv4 Address"]}</td>
        <td>{item["CPU Count"]}</td>
        <td>{item["CPU qdf"]}</td>
        <td>{item["CPU cores"]}</td>
        <td>{item["RAM card_raw"]}</td>
        <td>{item["Dimm Count"]}</td>
        <td>{item["RAM vendor"]}</td>
        <td>{item["PCI vendor"]}</td>
        <td>{item["PCI device"]}</td>

      {/* Add more cells as needed */}
      ##
    </tr>
  );
};

export default TableRow;
