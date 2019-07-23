import React from 'react'
import './tag.scss'
export default function Tag(props){
    return (
        <div className='tag' style={{'backgroundColor':props.color||'green'}}>
            {props.value}
        </div>
    )
}