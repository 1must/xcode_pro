import React from 'react'
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import * as actions from '../../actions/home/index'
import Table from '../../components/table/xcode-table'
import Tag from '../../components/tag/tag'
//import Filter from '../components/filter/filter'
import {CheckIcon, QuestIcon} from '../../components/icon/icon'
import './index.scss'

let heads = [
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
        dataIndex:'id',
        key:'id',
        width: '5%',
        //sorter:(a, b)=>(a.num-b.num)
        render:(()=>{
            let index = 1
            return ()=>{
                return(<div>{index++}</div>)
            }
        })()
    },
    {
        title:'Title',
        dataIndex:'title',
        key:'title',
        width:'60%',
        render:(data)=>{
                return (<a href={'exercise/'+data.id}>{data.title}</a>)
            }
    },
    {
        title:'Passrate',
        dataIndex:'acrate',
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
            let color='green'
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



class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            heads:heads||[],
        }
    }
    componentDidMount() {
        this.props.getAllExercise()
    }

    render(){
        const{heads} = this.state
        const data = this.props.data.allExercise
        let dataSource = data.map(d=>{
            return {
                ...d,
                title:{title:d.title,id:d.id}
            }
        })
        return(
            <div>
                <div className='left'>
                    <Table
                        heads={heads}
                        dataSource={dataSource}
                    />
                </div>
            </div>
        )
    }
}

export default connect(
    state=>{
        console.log(state)
        return {
            data:state.AllExercise
        }
    },
    dispatch=>{
        return bindActionCreators({...actions}, dispatch)
    }
)(Home)
