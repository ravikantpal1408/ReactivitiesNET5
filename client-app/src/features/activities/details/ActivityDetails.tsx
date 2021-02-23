import { deflate } from "node:zlib";
import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import { IActivity } from "../../../app/models/Activity";

interface Props {
    activity: IActivity;
}

export default function ActivityDetails({ activity }: Props) {
    return (

        <Card>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button basic color='blue' content='Edit' />
                    <Button basic color='grey' content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>

    );
}
