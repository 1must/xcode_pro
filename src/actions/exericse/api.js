import Axios from 'axios'

export const getExerciseDescription = (exerciseId)=>Axios.get('http://localhost:9999/exercise/'+exerciseId)