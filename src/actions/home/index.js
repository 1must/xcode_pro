import * as Types from '../../reducer/home/types'
import {createAction} from 'redux-actions'
import * as Api from './api'

export const getAllExercise = createAction(Types.GET_ALL_EXERCISE,()=>Api.getAllExercise())