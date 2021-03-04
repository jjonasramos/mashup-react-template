import { useEffect } from 'react';
import { useQlik } from './context/Qlik';

import './App.css';

function App() {

  const { app, qlik } = useQlik();

  useEffect(() => {
    console.log(qlik);
    console.log(app);
  }, [app])

  return (
    <div className="App">
      <header className="App-header">
        Welcome to Qlik React Mashup Template!
      </header>
    </div>
  );
}

export default App;
