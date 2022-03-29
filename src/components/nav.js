import React, { Component } from 'react';
import { Link } from "react-router-dom"
import Icon from "./images/icon.png";


class Nav extends Component {
        
    state ={
        input: "",
        error: false
    }

render () {
    function isError(text) {
    }
    return (
        <div className='navContainer'>
            <div className='navWrapper'>
                <div className='logoContainer'>
                <Link to="/" onClick={()=>{this.props.isHomeCallbackFunction()}}><img src={Icon} width="65px" height="65px" alt=""/></Link>
                <Link to="/" className='logo' onClick={()=>{this.props.isHomeCallbackFunction()}}><h1>Terra Finder</h1></Link>
                </div>
                {this.props.isHome ? null :
                <div className='searchboxContainerNav'>
                <input
                placeholder='Search Block / Tx / Account'
                onChange = {(event)=> {
                    let text = event.target.value;
                    // console.log(text)
                    isError(text)
                    this.setState({input: text});
                }}
                ></input>
                <Link to={this.state.error ? "/error" : "/display"}>
                <button
                    onClick={()=>{
                        this.props.callbackFunction(this.state.input)
                    }}
                >search</button>
                </Link>
                </div>
                }
            </div>
        </div>
    )
}
}

export default Nav;
