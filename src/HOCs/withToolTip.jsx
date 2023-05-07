import React from 'react';

const withToolTip = (Component) => {
  return class ToolTip extends React.Component{
    state={
       tip : false, 
    }
    toggle=()=>{
        this.setState((prevState)=>{
            return{
                tip : !prevState.tip,
            } 
        })
        console.log("toggle");
    }
    render(){
        return <Component {...this.props} tip={this.state.tip} toggle={this.toggle} />
    }
  }
}

export {withToolTip};
