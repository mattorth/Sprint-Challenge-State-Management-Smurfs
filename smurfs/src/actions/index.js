import axios from "axios";

export const SMURF_DATA_START = "SMURF_DATA_START";
export const SMURF_DATA_SUCCESS = "SMURF_DATA_SUCCESS";
export const SMURF_DATA_FAIL = "SMURF_DATA_FAIL";

export const POST_DATA_START = "POST_DATA_START";
export const POST_DATA_SUCCESS = "POST_DATA_SUCCESS";
export const POST_DATA_FAIL = "POST_DATA_FAIL";

export const getSmurfData = () => dispatch => {
    dispatch({ type: SMURF_DATA_START });

    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log(res.data);
            dispatch({
                type: SMURF_DATA_SUCCESS,
                payload: res.data
            })
        }
        )
        .catch(err => {
            console.log(err);
            dispatch({
                type: SMURF_DATA_FAIL,
                payload: "error loading data"
            })
        })
}

export const postSmurfData = (smurf) => dispatch => {
    dispatch({ type: POST_DATA_START});

    axios
            .post("http://localhost:3333/smurfs", smurf)
            .then(res => {
                console.log(res);
                dispatch({
                    type: POST_DATA_SUCCESS,
                    payload: smurf
                })
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: POST_DATA_FAIL,
                    payload: "error posting data"
                })
            })
}