import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, List } from 'semantic-ui-react';
import { IActivity } from '../models/Activity';
import NavBar from './NavBar';

function App() {
  const [Activities, setActivities] = useState<IActivity[]>([]);

  useEffect(()=>{
    axios.get<IActivity[]>('http://localhost:5000/api/activities').then(res=>{
      console.log(res.data);
      setActivities(res.data);
    });
  },[]);

  return (
    <>
      <NavBar/>
      <Container style={{marginTop: '7em'}}>
        <List>
          {
            Activities.map((a: any) => (<List.Item key={a.id}> {a.title}</List.Item>))
          }
        </List>
      </Container>   
    </>
  );
}

export default App;
