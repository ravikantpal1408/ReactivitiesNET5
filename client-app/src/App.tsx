import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
  const [Activities, setActivities] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5000/api/activities').then(res=>{
      console.log(res.data);
      setActivities(res.data);
    });
  },[]);

  return (
    <div className="app">
      <Header as="h2" icon="users" content="Reactivities" />
      <List>
        {
          Activities.map((a: any) => (<List.Item key={a.id}> {a.title}</List.Item>))
        }
      </List>
    </div>
  );
}

export default App;
