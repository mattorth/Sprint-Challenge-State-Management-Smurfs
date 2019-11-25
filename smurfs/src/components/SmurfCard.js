import React from "react";

export default function SmurfCard(props) {
    console.log("from smurfcard", props);
    return (
        <div>
            <h1>Name: {props.smurf.name}</h1>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
        </div>
    )
}