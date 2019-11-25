import { SMURF_DATA_START, SMURF_DATA_SUCCESS, SMURF_DATA_FAIL, POST_DATA_START, POST_DATA_SUCCESS, POST_DATA_FAIL } from "../actions";


const initialState = {
    isLoading: false,
    error: "",
    smurfs: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SMURF_DATA_START:
            return {
                ...state,
                isLoading: true,
            }
        case SMURF_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: "",
                smurfs: action.payload
            }
        case SMURF_DATA_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case POST_DATA_START:
                return {
                    ...state,
                    isLoading: true,
                }
            case POST_DATA_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    error: "",
                    smurfs: [...state.smurfs, action.payload]
                }
            case POST_DATA_FAIL:
                return {
                    ...state,
                    isLoading: false,
                    error: action.payload
                }
        default:
            return state;
    }
}

export default reducer;