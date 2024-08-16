// TableHeader.js

import React from 'react';

const TableHeader = () => {
  return (
    <thead>
      <tr>
	          <th>ID</th>
            <th>Program</th>
            <th>Group</th>
            <th>IPv4 Address</th>
            <th>CPU Count</th>
            <th>CPU qdf</th>
            <th>CPU cores</th>   
            <th>RAM card_raw</th>   
            <th>Dimm Count</th>   
            <th>RAM vendor</th>   
            <th>PCI vendor</th>   
            <th>PCI device</th>   

        {/* Add more headers as needed* */}
      </tr>
    </thead>
  );
};

export default TableHeader;
