import React from 'react';
import Dropdown from './component/Dropdown';

const App = () => {

  const items = ['Apple', 'Badka Apple', 'Chhotka Apple', 'Dosarka Apple'];
  return (
    <div className="App">
      <h2>Should You Use a Dropdown?</h2>
      <Dropdown items={items} />
    </div>
  );
};

export default App;
