import React,{Component} from 'react'
import {connect} from 'react-redux'
import {addListAction} from './action'
import {getFromGit} from './action'

class FeaturePage extends Component{
    constructor(props){
        super(props)
        this.state={
           content:'',
        }
    }
    onChange = (e) =>{
        this.setState({content:e.target.value})
    }
    onAddList=()=>{
        console.log(this.state.mylist);
        this.props.getListFromGit(this.state.content);
    }
    onClear=()=>{
    }
    render(){
        return(
            <div>
                 Feature Page;<br/>
                 <input type="text" onChange={this.onChange}  value={this.state.content}/>
                 <button onClick={this.onAddList}>Add</button>
                 <button onClick={this.onClear}>Clear</button>
                 <div style={{margin:'20px'}}>
                    {this.props.mylist.map((item,index)=>{
                        return(
                            <div key={index}>{item}</div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=> ({
    mylist:state.featureReducer.list
})

const mapDispatchToProps = (dispatch)=>({
        dispatch,
        addList:(data)=>{
            dispatch(addListAction(data))
        },
        getListFromGit:(content)=>{
            dispatch(getFromGit(content))
        }
})
export default connect(mapStateToProps,mapDispatchToProps)(FeaturePage);