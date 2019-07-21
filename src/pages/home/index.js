import React from 'react'
import Table from './table'
import SideBar from './side-bar.js'
import './home.scss'
import CheckIcon from './logo.svg'

export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            table:{
                heads:[
                    {title:'status', length:1},
                    {title:'#', length:1},
                    {title:'title', length:10},
                    {title:'passrate', length:2},
                    {title:'difficulty', length:2}
                ],
                data:[
                    [
                        {status:'done', length:1},
                        {'#':'1', length:1},
                        {title:'Bitwise AND of Numbers Range', length:10},
                        {passrate:'passrate', length:2},
                        {difficulty:'Hard', length:2}
                    ],
                    [
                        {status:'on', length:1},
                        {'#':'2', length:1},
                        {title:'Happy Number', length:10},
                        {passrate:'passrate', length:2},
                        {difficulty:'Easy', length:2}
                    ],
                    [
                        {status:'none', length:1},
                        {'#':'3', length:1},
                        {title:'Remove Linked List Elements ', length:10},
                        {passrate:'passrate', length:2},
                        {difficulty:'Medium', length:2}
                    ]
                ]

            }
        }
    }

    render(){
        return(
            <div>
                <div className='left'>
                    <Table
                        heads={this.state.table.heads}
                        data={this.state.table.data}
                    />
                </div>
                <div className='right'>
                    <SideBar/>
                </div>
            </div>
        )
    }
}