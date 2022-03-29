import React, { Component } from 'react';
import { Link } from "react-router-dom"
import Image from "./images/home-img.png"

class Home extends Component {

    state ={
        input: "",
        error: false,
    }

    render () {
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
                            <Link to={this.state.error ? "/error" : "/display"}><button
                            onClick={()=>{
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
