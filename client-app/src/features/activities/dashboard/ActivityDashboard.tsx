import React from 'react';
import { Grid } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/Activity';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

interface Props {
    activities: IActivity[];
    selectedActivity: IActivity|undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
}


export default function ActivityDashboard({ activities, selectedActivity, selectActivity, cancelSelectActivity }: Props) {
    return (
        <>
            <Grid>
                <Grid.Column width='10'>
                    <ActivityList activities={activities} selectActivity={selectActivity} />
                </Grid.Column>
                <Grid.Column width='6'>
                    {selectedActivity &&
                        <ActivityDetails activity={selectedActivity} cancelSelectActivity={cancelSelectActivity} />}
                    <ActivityForm />
                </Grid.Column>
            </Grid>
        </>
    )
}