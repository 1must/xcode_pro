import {handleActions} from 'redux-actions'
import * as Types from './types'

const initialState = {
    allExercise: [],
}


const AllExerciseReducer = handleActions({
    [Types.GET_ALL_EXERCISE](state, {payload, error}){
        return {
            ...state,
            allExercise: payload.data
        }
    }
}, initialState)
export default AllExerciseReducer