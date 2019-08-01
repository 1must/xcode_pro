import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../../actions/exericse'
import './index.scss'

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
        return (<div className={'description'}>
            <div className={'title-wrapper'}>
                <div className={'title'} dangerouslySetInnerHTML={{__html:data.title}}></div>
            </div>
            <div className={'content-wrapper'}>
                <div className={'content'} dangerouslySetInnerHTML={{__html:data.content}}></div>
            </div>
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
