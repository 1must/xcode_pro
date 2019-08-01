import {createAction} from 'redux-actions'
import * as Types from '../../reducer/exercise/types'
import * as Api from './api'

export const getExerciseDescription = createAction(Types.GET_EXERCISE_DESCRIPTION, (exerciseId)=>Api.getExerciseDescription(exerciseId))