import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [variable, setVariable] = useState('');

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL)
      .then(response => {
        setVariable(response.data.value);
      })
      .catch(error => {
        console.error('There was an error fetching the variable!', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{variable}</h1>
      </header>
    </div>
  );
}

export default App;
