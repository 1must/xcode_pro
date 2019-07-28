import {handleActions} from 'redux-actions'
import * as Types from './types'

const initialState = {
    allExercise: [],
}


const AllExerciseReducer = handleActions({
    [Types.GET_ALL_EXERCISE](state, {payload, error}){
        let allExercise = payload.data
        return {
            ...state,
            allExercise: allExercise||[]
        }
    }
}, initialState)
export default AllExerciseReducer