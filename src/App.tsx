import React from 'react';
import Select from './Select';
import './App.css';

const OPTIONS = [
  { value: 1, label: 'First' },
  { value: 2, label: 'Second' },
  { value: 3, label: 'Third' },
  { value: 4, label: 'Fourth' },
];

function App() {
  return (
    <div className="App">
      <Select
        onChange={() => {
          // eslint-disable-next-line no-console
          console.log('hello');
        }}
        options={OPTIONS}
      />
    </div>
  );
}

export default App;
