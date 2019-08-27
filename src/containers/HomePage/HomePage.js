import React,{Component} from 'react';
import {connect} from 'react-redux';
import {setListAction, getFromGithub} from './action';
import Button from '../../components/Button/Button';
import Tabs from '../../components/Tabs/Tabs';
import TabPane from '../../components/Tabs/TabPane';

class HomePage extends Component{
    constructor(props){
        super(props)
        this.state={
            username:''
      }
    }
    onChange = (e) =>{
          this.setState({username:e.target.value})
    }
    onQuery = () =>{
        this.props.getListFromGithub(this.state.username);
    }
    callback = (key) =>{
        console.log(key)
    }
    render(){
        const {username} = this.state;
        return(
            
            <div>
                This is Home Page;<br/>
                <input type='text' onChange={this.onChange} value={username}>

                </input>
                <Button type='primary'>what</Button>
                <button onClick={this.onQuery}>Query</button>
                <div style={{margin:'20px'}}>
                    {this.props.mylist.map(item=>{
                        return(
                            <div key={item.id}>{item.name}</div>
                        )
                    })}
                </div>

                <Tabs defaultActiveKey='1' onChange={this.callback}>
                    <TabPane title={'Pane1'} key='1'>
                        <div>Pane1</div>
                    </TabPane>
                    <TabPane title={'Pane2'} key='2'>
                        <div>Pane2</div>
                    </TabPane>
                    <TabPane title={'Pane3'} key='3'>
                        <div>Pane3</div>
                    </TabPane>
                 </Tabs>
        
            </div>
        )
    }
}

const mapStateToProps = (state)=> ({
    mylist:state.homeReducer.list
})

const mapDispatchToProps = (dispatch)=>({
        dispatch,
        getListFromGithub:(username)=>{
           dispatch(getFromGithub(username))   
        },
        setList:(data)=>{
            dispatch(setListAction(data))
        }
})
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);