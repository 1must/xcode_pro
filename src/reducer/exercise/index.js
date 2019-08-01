import * as Types from './types'

import {handleActions} from 'redux-actions'

const initState = {
    ExerciseDescription:{}
}

const ExerciseDescriptionReducer = handleActions({
    [Types.GET_EXERCISE_DESCRIPTION](state, {payload, error}){
        const {data} = payload
        return{
            ...state,
            ...data
        }
    }
}, initState)


export default ExerciseDescriptionReducer