import React, { Component } from 'react';
import NoInfo from "./images/no-info.png"

class Display extends Component {
  state = {
    date: new Date()
  }

  render () {
    return (
      <div className='displayContainer'>

          <div className='displayWrapper'>
            <h2>Block # {this.props.search}</h2>

            <div className='chartContainer'>

              <div className='chartSection'>
                <div className='chartLable'>
                  <h4>Chain ID</h4>
                </div>
                <p className='chartResults'>columbus-4</p>
              </div>


              <div className='chartSection'>
                <div className='chartLable'>
                  <h4>Block height</h4>
                </div>
                <p className='chartResults'>3</p>
              </div>


              <div className='chartSection'>
                <div className='chartLable'>
                  <h4>Time Stamp</h4>
                </div>
                <p className='chartResults'>{this.state.date.toLocaleString()}</p>
              </div>

              <div className='chartSection'>
                <div className='chartLable'>
                  <h4>Transactions</h4>
                </div>
                <p className='chartResults'>0 Transactions</p>
              </div>

              <div className='chartSection'>
                <div className='chartLable'>
                  <h4>Proposer</h4>
                </div>
                <p className='chartResults'>DSRV - CHAISCAN.com</p>
              </div>
            </div>

            <div className='transactionSection'>
              <div className='transactionSectionTable'>
                <h4>TxHash</h4>
                <h4>Type</h4>
                <h4>Fee</h4>
                <h4>Height</h4>
                <h4>Time</h4>
              </div>
              <div className='transactionSectionResults'>
                <img src={NoInfo} width="40px" height="40px" alt=""/>
                <p className='chartResults'>No more transactions</p>
              </div>
            </div>

        </div>

      </div>
    )
  }
}

export default Display;
