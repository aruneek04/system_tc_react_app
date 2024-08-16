// App.js
import './App.css';


import React from 'react';
import './styles.css'; // Import your CSS file .
import FilterableTable from './components/FilterableTable';

const App = () => {
  return (
    <div className="App">
      <header className="App">        
      <h1>PAIV Systems</h1>
      </header>

      <FilterableTable />
    </div>
  );
};

export default App;
/*  */