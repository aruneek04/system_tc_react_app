// components/FilterableTable.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table';

const FilterableTable = () => {
  const [filterId, setFilterId] = useState('');
  const [filterQdf, setFilterQdf] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/app/data/'); // Replace with your API endpoint
      setData(response.data); // Assuming response.data is an array of objects
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleIdFilterChange = (e) => {
    setFilterId(e.target.value);
  };

  const handleQdfFilterChange = (e) => {
    setFilterQdf(e.target.value);
  };

  const filteredData = data.filter(item =>
    item.Id.toLowerCase().includes(filterId.toLowerCase()) && item["CPU qdf"] && 
    item["CPU qdf"].toLowerCase().includes(filterQdf.toLowerCase())
  );

  return (
    <div className="filterable-table">
      <div className="filters">
      <label for="id">Filter by Id </label>
      <input
          type="text"
          for="id"
          value={filterId}
          onChange={handleIdFilterChange}
          placeholder="Filter by Id..."
        />
      <label for="">Filter by QDF </label>
        <input
          type="text"
          for="qdf"
          value={filterQdf}
          onChange={handleQdfFilterChange}
          placeholder="Filter by qdf..."
        />
      </div>
      <Table data={filteredData} />
    </div>
  );
};

export default FilterableTable;
