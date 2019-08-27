import React,{Component} from 'react';

class Tabs extends Component{
    constructor(props){
        super(props);
        this.state={
            activeKey:''
        }
    }
    componentDidMount(){
        if(this.props.defaultActiveKey){
             this.setState({
                 activeKey:this.props.defaultActiveKey
             })
        }
    }

    renderContent = () =>{
        return React.Children.map(this.props.children,dom=>{
            if(this.state.activeKey == dom.key){
                return (
                    <div style={{margin:'10px'}}
                    >{dom.props.children}</div>
                )
                
            }
        })
    }
    renderHeader = () =>{
        const activityHeader = {padding:'5px 20px',fontSize:'20px',color:'red'};
        const unactivityHeader = {padding:'5x 20px'};
        return React.Children.map(this.props.children,(dom,index)=>{
            return(
                <span
                   style={this.state.activeKey == dom.key?activityHeader:unactivityHeader}
                   onClick={()=>{this.setState({
                       activeKey:dom.key
                   })
                   this.props.onChange(dom.key)
                }} 
                key={dom.key}>
                    {dom.props.title}
                </span>
            )
        })
    }
    render(){
        return(<div>
              {this.renderHeader()}
              {this.renderContent()}
        </div>)
    }
}
export default Tabs