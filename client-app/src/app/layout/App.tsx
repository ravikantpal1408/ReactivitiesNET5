import React, {useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { IActivity } from '../models/Activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<IActivity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(()=>{
    axios.get<IActivity[]>('http://localhost:5000/api/activities').then(res=>{
      // console.log(res.data);
      setActivities(res.data);
    });
  },[]);
  
  function handleSelectActivity(id: string) {
    setSelectedActivity(activities.find(x=>x.id === id));
  }

  function handleCancelSelectActivity() {
    setSelectedActivity(undefined);
  }

  function handleOpenForm(id? : string ) {
    id ? handleSelectActivity(id) : handleCancelSelectActivity()
  }

  return (
    <>
      <NavBar/>
      <Container style={{marginTop: '7em'}}>
        <ActivityDashboard 
              activities={activities}
              selectedActivity = {selectedActivity}
              selectActivity = {handleSelectActivity}
              cancelSelectActivity = {handleCancelSelectActivity} />
      </Container>   
    </>
  );
}

export default App;
