import React, { useEffect, useState } from 'react';
import './App.css';
import API from './utils/API';

import Navbar from './components/Navbar/Navbar';
import ServiceCard from './components/ServiceCard/ServiceCard';

import database from './components/ServiceCard/images/database-solid.svg';
import network from './components/ServiceCard/images/settings-ethernet.svg';
import server from './components/ServiceCard/images/server-solid.svg';
import storage from './components/ServiceCard/images/file-alt-solid.svg';


function App() {

  const [users, setUsers] = useState(null);

  useEffect(() => {
    API.getServices()
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className='services'>
        { users && users.map(user => {

          let service = user.type;
          let icon;
          let alt;
          let color1;
          let color2;
          let data2;
          let data1Percent;

          switch(service) {
            case 'server':
              icon = server;
              alt = 'server-icon';
              color2 = '#e4e4e4';
              break;
            case 'database':
              icon = database;
              alt = 'database-icon';
              color2 = '#e4e4e4';
              break;
            case 'storage':
              icon = storage;
              alt = 'storage-icon';
              color2 = '#e4e4e4';
              break;
            default:
              icon = network;
              alt = 'network-icon';
              color1 = '#2382bd';
              color2 = '#f78103';
              data2 = user.data_2;
          }

          if (user.type !== 'network') {
            data2 = user.data_2 - user.data_1;
            data1Percent = user.data_1 / user.data_2;
            if (data1Percent < 0.5 ) {
              color1 = '#6cb94c';
            } else if ( data1Percent >= 0.5 && data1Percent < 0.8 ) {
              color1 = '#f78103';
            } else {
              color1 = '#ea1709';
            }
          }

          return <ServiceCard 
            key = {user.id}
            service={service}
            icon={icon}
            alt={alt}
            cardHeader={user.name}
            cardInfo={user.info}
            cardDetail={user.spec}
            data1={user.data_1}
            data2={data2}
            color1={color1}
            color2={color2}
          />
        })}
      </div>
    </div>
  );
}

export default App;
