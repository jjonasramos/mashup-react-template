import { useEffect } from 'react';
import { useQlik } from './context/Qlik';

import './App.css';

function App() {
  const { app, qlik } = useQlik();

  useEffect(() => {
    console.log(qlik);
    console.log(app);
    // eslint-disable-next-line
  }, [app])

  return (
    <div className="App">
      <header className="App-header">
        Welcome to a Blank Mashup Template using React JS.
      </header>
    </div>
  );
}

export default App;
