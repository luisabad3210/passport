import React, { Component } from 'react';
import { Link } from "react-router-dom"
import ErrorImg from "./images/error-img.png"


class Error extends Component {
    render () {
        return (
            <div className='errorContainer'>
                <div className='errorWrapper'>
                    <center><h1>Search not found</h1></center>
                    <center><p>Sorry, we couldn't find any results for {this.props.search}</p><p>Please input the correct block number, transaction hash or account address.</p></center>
                    <Link to="/"><center><button
                    onClick={()=>{
                        this.props.isHomeCallbackFunction()
                    }}
                    >Back Home</button></center></Link>
                    <center><img src={ErrorImg} alt=""/></center>
                </div>
            </div>
        )
    }
}

export default Error;
