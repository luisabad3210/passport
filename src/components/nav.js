import React, { Component } from 'react';
import { Link } from "react-router-dom"
import Icon from "./images/icon.png";


class Nav extends Component {
        
    state ={
        input: "",
        error: false
    }

render () {
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
                    let alpha = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o",
                    "p","q","r","s","t","u","v","w","x","y","z",
                    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                    "!","@","#","$","%","^","&","*","(",")","-","+","{","}","[","]","?","<",">","/"
                ]
                    for (let i = 0; i < text.length; i++) {
                        if (alpha.includes(text[i])) {
                            this.setState({error: true,});
                        }
                    }
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
