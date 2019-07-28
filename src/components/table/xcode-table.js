import React from 'react'
import './xcode-table.scss'



export default class Table extends React.Component {
    constructor(props){
        super(props)
        this.initState(props, true)
    }
    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.dataSource!==this.props.dataSource||nextProps.heads!==this.props.heads){
            this.initState(nextProps)
        }
    }

    initState = (props, isFirstInitail=false)=> {
        const {heads = [], dataSource = []} = props
        let dataInfo = {},//保存body渲染数据
            headInfo = {},//保存head渲染数据
            needCopyData = false//判断某个head有没有sorter之类需要本地拷贝数据的property
        const onClickWrapper = (h) => {
            let revserseSorted = false//排过序为true,之后一直反复反向排序
            return () => {
                const {dataSource} = this.state
                if (revserseSorted) {
                    this.setState({
                        dataSource: dataSource.reverse(),
                    })
                } else {
                    this.setState({
                        dataSource: this.state.dataSource.sort(h.sorter)
                    }, () => {
                        revserseSorted = true
                    })
                }
            }
        }
        const judgeNeedCopyData = (h) => {//如果外部提供了sorter就需要内部保存一份data
            if (h.sorter) {
                needCopyData = true
                return true
            } else
                return false
        }
        heads.forEach((h) => {
            headInfo[h.dataIndex] = {
                value: h.title || h.dataIndex,
                key: h.key,
                width: h.width || '60px',
                onClick: judgeNeedCopyData(h) ? onClickWrapper(h) : null,
            }
            dataInfo[h.dataIndex] = {
                render: h.render || null,
                width: h.width || '60px',
                align: h.align || 'left',
            }
        })
        let state = {
            dataInfo,
            headInfo,
            dataSource: needCopyData ? dataSource.slice() : null,
        }
        if (isFirstInitail) {
            this.state = state
        }else{
            this.setState(state)
        }
    }
    render(){
        const {heads = []} = this.props
        const dataSource = this.state.dataSource?this.state.dataSource:this.props.dataSource
        const {headInfo, dataInfo} = this.state
        let showHead = heads.length>0, headList = heads.map(h=>h.dataIndex)
        return (
            <div className='xcode-table'>
                {showHead &&
                    <div className={'xcode-table-head'}>
                        <TableRow
                            list={headList.map((h)=>headInfo[h])}
                            color='white'
                        />
                    </div>
                }
                {dataSource.map((v,i)=>{
                    return (<TableRow
                        key={v.key||i}
                        list={headList.map(h=>({...dataInfo[h], value:v[h], key:h}))}
                        color={i%2?'white':'grey'}
                    />)
                })}
            </div>
        )
    }
}

class TableRow extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {list,color, onClick} = this.props
        return(
            <div className={'xcode-table-row '+color}>
                {
                    list.map((v,i)=>{

                        return (<TableCol
                            key={v.key||i}
                            value={v}
                            width={v.width}
                            onClick={v.onClick}
                        />)
                    })
                }
            </div>
        )
    }
}


export class TableCol extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {value} = this.props
        return (
            <div className='xcode-talbe-col' style={{width:this.props.width}} onClick={this.props.onClick}>
                {value.render?value.render(value.value):value.value}
            </div>
        )
    }
}