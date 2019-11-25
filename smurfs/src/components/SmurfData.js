import React from "react";
import { connect } from "react-redux";
import { getSmurfData } from "../actions";
import SmurfCard from "./SmurfCard";

const SmurfData = props => {
    return (
        <>
            <button onClick={() => {
                props.getSmurfData();
                console.log(props.smurfs);
            }}>View Smurfs</button>
            {props.error && <div>{props.error}</div>}
            {props.isLoading ? (
                <div>loading data...</div>
            ) : (
                <div>
                    {props.smurfs.map(smurf => (
                        <SmurfCard smurf={smurf} key={smurf} />
                    ))}
                </div>
            )}
        </>
    )
}

const mapStatetoProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        smurfs: state.smurfs
    }
}

export default connect(mapStatetoProps, { getSmurfData })(SmurfData);