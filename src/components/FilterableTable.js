// components/FilterableTable.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table';

const FilterableTable = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    id: '',
    qdf: '',
    group: '',
    dimms: '',
    dimms_vendor: ''
});

const [isVisibleMemory, setIsVisibleMemory] = useState(false);
const [isVisibleQdfAndDevice, setIsVisibleQdfAndDevice] = useState(false);

useEffect(() => {
  fetchData();
}, [filters]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/systems', { params: filters });
      setData(response.data); // Assuming response.data is an array of objects
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
    if (name === 'dimms' && value.length>0) {
      setIsVisibleMemory(true)
      console.log('Function called because the value is "call"');
    } else {
      console.log('Function not called');
    }

  };
  
  const addFilterChange = (e) => {
    console.log("A")
    //enable memory visible
    setIsVisibleQdfAndDevice(true)
  };

  return (
    <div className="filterable-table">
      <div className="filters">
      <label htmlFor="mySelect">Choose an option:</label>
            <select id="mySelect" name="group" value={filters.name} onChange={(e) => {
        handleFilterChange(e);
        addFilterChange(e);
      }}>
                <option value="">--Please choose an option--</option>
                <option value="Regression">Regression</option>
                <option value="BKC">BKC</option>
                <option value="Memory">Memory</option>
                <option value="PNP">PNP</option>
            </select>
      {isVisibleQdfAndDevice && <p>      
      <label>Filter by ID:
        <input
            type="text"
            name="id"
            value={filters.name}
            onChange={handleFilterChange}
            placeholder="Filter by Id..."/>
      </label>
        <label>Filter by QDF:
        <input
          type="text"
          name="qdf"
          value={filters.name}
          onChange={handleFilterChange}
          placeholder="Filter by qdf..."
        />
      </label>
      <label>Filter by Memory DIMMs:
        <input
          type="text"
          name="dimms"
          value={filters.name}
          onChange={handleFilterChange}
          placeholder="Filter by DIMMS..."
        />
      </label>
        {isVisibleMemory && <p>      
        <label>Filter by DIMM Vendor:
          <input
              type="text"
              name="dimms_vendor"
              value={filters.name}
              onChange={handleFilterChange}
              placeholder="Filter by DIMMS Vendor..."/>
        </label>
        </p>}
      </p>}

      </div>
      <Table data={data}/>
    </div>
  );
};

export default FilterableTable;
