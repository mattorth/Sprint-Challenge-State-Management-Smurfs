import React, { useState } from "react";
import axios from "axios";
import { postSmurfData } from "../actions";
import { connect } from "react-redux"

const Form = props => {

    const [smurf, setSmurf] = useState({ name: "", age: "", height: "" })

    const handleChange = event => {
        setSmurf({...smurf, [event.target.name]: event.target.value })
    };

    const postSmurf = event => {
        event.preventDefault();
        console.log(smurf);
        props.postSmurfData(smurf);
    }

    // const postSmurf = event => {
    //     event.preventDefault();
    //     axios
    //         .post("http://localhost:3333/smurfs", smurf)
    //         .then(res => {
    //             console.log(res);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    //   }

    return (
        <div>
            <form onSubmit={event => postSmurf(event)}>
                <input type="text" name="name" value={smurf.name} placeholder="name" onChange={event => handleChange(event)} />
                <input type="text" name="age" value={smurf.age} placeholder="age" onChange={event => handleChange(event)} />
                <input type="text" name="height" value={smurf.height} placeholder="height" onChange={event => handleChange(event)} />
                <button>Submit!</button>
            </form>
        </div>
    )
}
const mapPropsToState = state => {
    return state;
  };
  
  // export default App;
  export default connect(mapPropsToState, { postSmurfData })(Form);

// export default Form;