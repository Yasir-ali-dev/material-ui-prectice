import React from 'react';
function AddToggler(Component){
    return class Toggler extends React.Component{
        state={
            on : false
        }  

        toggle =()=>{
            this.setState(prevState =>{
                return {
                    on : !prevState.on,
                }
            })
        }
        render(){
            return (
                <Component on={this.state.on} toggle={this.toggle} {...this.props}/>
            )
        }
    }
}
export {AddToggler};
