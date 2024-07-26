// TableHeader.js

import React from 'react';

const TableHeader = () => {
  return (
    <thead>
      <tr>
	  <th>ID</th>
            <th>Program</th>
            <th>Processor</th>
            <th>IPv4 Address</th>
            <th>CPU Count</th>
            <th>CPU family</th>
            <th>CPU qdf</th>
            <th>CPU cores</th>   
        {/* Add more headers as needed */}
      </tr>
    </thead>
  );
};

export default TableHeader;
