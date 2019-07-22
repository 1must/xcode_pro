import React from 'react'
import Table from '../components/table/xcode-table'
import Tag from '../components/tag/tag'
import {CheckIcon, QuestIcon} from '../components/icon'
import './index.scss'

export default class Home extends React.Component{
    constructor(props) {
        super(props);
    }
    columns = [
        {
            title:' ',
            dataIndex:'status',
            key:'status',
            width:'5%',
            render:(status)=>{
                if(status==='on'){
                    return (<QuestIcon/>)
                }else if(status==='finish'){
                    return (<CheckIcon/>)
                }else{
                    return <div></div>
                }
            }
        },
        {
            title:'#',
            dataIndex:'num',
            key:'num',
            width: '5%'
        },
        {
            title:'Title',
            dataIndex:'title',
            key:'title',
            width:'60%',
            render:(title)=>{
                return (<a href={title}>{title}</a>)

            }
        },
        {
            title:'Passrate',
            dataIndex:'passrate',
            key:'passrate',
            width:'10%',
            sorter:(a, b)=>(parseInt(a.passrate)-parseInt(b.passrate))
        },
        {
            title:'Difficulty',
            dataIndex:'difficulty',
            key:'difficulty',
            width:'10%',
            render:tag=>{
                let color
                if(tag==='Hard'){
                    color = '#d9534f'
                }else if(tag==='Medium'){
                    color = '#f0ad4e'
                }else if(tag==='Easy'){
                    color = 'green'
                }
                return (<Tag value={tag} color={color}/>)
            }
        }
    ]
    data = [
        {
            key:1,
            status:'',
            num:1,
            title:'对称二叉树',
            passrate:'50%',
            difficulty:'Medium'
        },
        {
            key:2,
            status:'on',
            num:2,
            title:'对称二叉树',
            passrate:'20%',
            difficulty:'Hard'
        },
        {
            key:3,
            status:'finish',
            num:3,
            title:'对称二叉树',
            passrate:'25%',
            difficulty:'Easy'
        }
    ]
    render(){
        return(
            <div>
                <div className='left'>
                    <Table
                        heads={this.columns}
                        dataSource={this.data}
                    />
                </div>
            </div>
        )
    }
}