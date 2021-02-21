import React, {useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { IActivity } from '../models/Activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(()=>{
    axios.get<IActivity[]>('http://localhost:5000/api/activities').then(res=>{
      // console.log(res.data);
      setActivities(res.data);
    });
  },[]);

  return (
    <>
      <NavBar/>
      <Container style={{marginTop: '7em'}}>
        <ActivityDashboard activities={activities} />
      </Container>   
    </>
  );
}

export default App;
