import * as Types from './types'

import {handleActions} from 'redux-actions'

const initState = {
    ExerciseDescription:''
}

const ExerciseDescriptionReducer = handleActions({
    [Types.GET_EXERCISE_DESCRIPTION](state, {payload, error}){
        const {data} = payload
        console.log(data)
        console.log('state', state)
        return{
            ...state,
            ExerciseDescription: data||''
        }
    }
}, initState)


export default ExerciseDescriptionReducer