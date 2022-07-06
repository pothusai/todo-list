import React from "react";
import Button from "../../shared/componets/FormElements/Button";
import Card from "../../shared/componets/UIElements/Card";
import PlaceItem from "./PlaceItem";

import './PlaceList.css';

const PlaceList = props => {
    if(props.items.length === 0) {
        return (
            <div className="place-list center">
                <Card>
                   <h2>No Places found. Maybe create one?</h2>
                   <Button to="/places/new">Share Place</Button>
                </Card>
            </div>
        )
    }
    console.log(props.items)
    return (
        <ul className="place-list">
            {props.items.map(place => (
                <PlaceItem
                    key={place.id}
                    id={place.id}
                    image={place.imageUrl}
                    title={place.title}
                    description={place.description}
                    address={place.address}
                    creatorId={place.creator}
                    coordinates={place.location} 
                />
            ))}
        </ul>
    )
}



export default PlaceList