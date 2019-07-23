import React from 'react'
import './filter.scss'
export default class Filter extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return (
            <div className='filter'>
                <div className='input'>
                    <input className='filter-input' placeholder={this.props.placeholder} type='text'/>
                </div>
                <div className='select'>

                </div>
            </div>
        )
    }
}