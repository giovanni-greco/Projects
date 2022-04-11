import React from 'react';
import './App.css';
import Filters from './components/Filters';
import SearchInput from './components/Search';
import Table from './components/Table';
import Provider from './context/Provider';
import Buttons from './components/Buttons';

function App() {
  return (
    <Provider>
      <SearchInput />
      <Filters />
      <Buttons />
      <Table />
    </Provider>
  );
}

export default App;
