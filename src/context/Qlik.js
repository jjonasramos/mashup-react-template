import { createContext, useState, useEffect, useContext } from 'react';
import QlikConnection from '../services/QlikConnection';

const QlikContext = createContext();

export default function QlikProvider({ children }) {
  const[qlik, setQlik] = useState(null);
  const[app, setApp] = useState(null);

  const config = {
    host: 'localhost',
    prefix: '/',
    port: 4848,
    isSecure: false
  };

  useEffect(() => {
    QlikConnection(config).then(qlik => {
      setQlik(qlik);
      setApp(qlik.openApp('Treinamento - ME', config));
    });
    // eslint-disable-next-line
  }, []);

  return(
    <QlikContext.Provider value={{
      qlik, app
    }}>
      {children}
    </QlikContext.Provider>
  );
}

export function useQlik() {
  const context = useContext(QlikContext);
  const { qlik, app } = context;
  return { qlik, app };
}