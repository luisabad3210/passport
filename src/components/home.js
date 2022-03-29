import React, { Component } from 'react';
import { Link } from "react-router-dom"
import Image from "./images/home-img.png"

class Home extends Component {

    state ={
        input: "",
        error: false,
    }

    render () {
        // function isError() {
        //     let input = this.state.input
        //     let alpha = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()-+{}?/"

        //     for (let i = 0; i < input.length; i++) {
        //         if (input.split("").includes(alpha[i])) {
        //             return "/error"
        //         } else {
        //             return "/display"
        //         }
        //     }
        // }
        return (
            <div className='homeContainer'>
                <div className='homeWrapper'>
                    <div className='imageContainer'>
                        <img src={Image} alt="" className='homeimage'/>
                    </div>
                    <div className='exploreContainer'>
                        <h1>Search</h1>
                        <div className='searchboxContainerHome'>
                            <input
                            placeholder='Search Block / Tx / Account'
                            onChange = {(event)=> {
                                let text = event.target.value;
                                this.setState({input: text});
                            }}
                            ></input>
                            <Link to={this.state.error ? "/error" : "/display"}><button
                            onClick={()=>{
                                // console.log("HOME " + this.state.input)
                                this.props.callbackFunction(this.state.input)
                                this.props.isHomeCallbackFunction()
                                // isError()
                            }}
                            >Search</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
