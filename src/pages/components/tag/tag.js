import React from 'react'
import './tag.scss'
export default class Tag extends React.Component{
    //props:{
    //          value
    //          color
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='tag' style={{'backgroundColor':this.props.color||'green'}}>
                {this.props.value}
            </div>
        )
    }
}