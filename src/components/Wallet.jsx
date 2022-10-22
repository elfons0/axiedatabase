import React, { Component } from "react";

import slpLogo from '../img/tokens/slp.svg';
import ronLogo from '../img/tokens/ron.svg';
import axsLogo from '../img/tokens/axs.png';
import wethLogo from '../img/tokens/weth.png';

export default class Wallet extends Component {
  render() {
    const { ron, axs, slp, weth, prices } = this.props;

    const ronPrice = parseFloat(prices['ronin'].usd);
    const wethPrice = parseFloat(prices['ethereum'].usd);
    const axsPrice = parseFloat(prices['axie-infinity'].usd);
    const slpPrice = parseFloat(prices['smooth-love-potion'].usd);
 
    return (
        <div className="wallet-div">
          <div className="token">
            <label>AXS</label>
            <img src={axsLogo} alt="axs" className="token-img" />
            <label className="money">{axsPrice.toFixed(4)} USD</label>
            <span>{axs}</span>
            <span>( {(axs * axsPrice).toFixed(2)} USD )</span>
          </div>
         
          <div className="token">
            <label>WETH</label>
            <img src={wethLogo} alt="weth" className="token-img" />
            <label className="money">{wethPrice.toFixed(4)} USD</label>
            <span>{weth}</span>
            <span>( {(weth * wethPrice).toFixed(2)} USD )</span>
          </div>
          <div className="token">
            <label>RON</label>
            <img src={ronLogo} alt="ron" className="token-img" />
            <label className="money">{ronPrice.toFixed(6)} USD</label>
            <span>{ron}</span>
            <span>( {(ron * ronPrice).toFixed(2)} USD )</span>
          </div>
          <div className="token">
            <label>SLP</label>
            <img src={slpLogo} alt="slp" className="token-img" />
            <label className="money">{slpPrice.toFixed(6)} USD</label>
            <span>{slp}</span>
            <span>( {(slp * slpPrice).toFixed(2)} USD )</span>
          </div>
        </div>  
    );
  }
}
