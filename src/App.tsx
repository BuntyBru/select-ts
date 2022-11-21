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
  const [value, setValue] = React.useState<typeof OPTIONS[0] | undefined>(OPTIONS[0]);
  return (
    <div className="App">
      <Select
        onChange={option => {
          setValue(option);
        }}
        value={value}
        options={OPTIONS}
      />
    </div>
  );
}

export default App;
