import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../../actions/exericse'


class Exercise extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        const {match, getExerciseDescription} = this.props
        let exerciseId = match.params.exerciseId
        getExerciseDescription(exerciseId)
    }

    render(){
        const {data} = this.props
        console.log('hello',data)
        return (<div dangerouslySetInnerHTML={{__html:data.ExerciseDescription}}>

        </div>)
    }
}

export default connect(
    state=>{
        return {
            data:state.ExerciseDescription
        }
    },
    dispatch=>{
        return bindActionCreators({...actions}, dispatch)
    }
)(Exercise)
