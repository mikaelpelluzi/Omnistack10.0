import React, { useEffect, useState } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

function App() {
  const [devs, setDevs] = useState([]);

    useEffect(() => {
      async function loadDevs() {
        const response = await api.get('/devs');
        
        setDevs(response.data);
      }
      console.log('loadDevs');
      loadDevs();
    }, []);

    async function handleAddDev(data) {
      const response = await api.post('/devs', data)
      
      setDevs([...devs, response.data]);
    }

    async function handleDeleteDev(id) {
      api.delete('/devs/' + id);
      const newList = devs.filter(dev => dev._id !== id);
      setDevs(newList);
    }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem 
            key={dev._id} 
            dev={dev} 
            handleDeleteDev={handleDeleteDev}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
