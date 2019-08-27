import React from 'react';
// import "./Button.css";

class Button extends React.Component{
    renderButton=()=>{
        switch (this.props.type){
           case 'primary':
               return(<button 
               style={{backgroundColor:'blue',color:'white'}} 
               onClick={this.props.onClick}>
               {this.props.children}
               </button>)
               default:
                   return(
                       <button 
                       onClick={this.props.onClick}>
                           {this.props.children}
                           </button>
                   )
        }
    }
    render(){
        return(<span>{this.renderButton()}</span>)
    }
}
export default Button