import React, { Component } from 'react';

class RupiahkeBitcoin extends Component {
    constructor(){
        super();
        this.state = {
          outputbitcoin: 'Silakan input nominal Rupiah',      
        }
    }

    hitungbitcoin(){
        let x = this.refs.nominalbitcoin.value;
        let dollar = this.props.id;
        let kursrupiah = 14000;
        let hasilhitung2 = 1/dollar;
        this.setState({
          outputbitcoin:'Rp' + ' ' + this.refs.nominalbitcoin.value + ' = BTC ' + hasilhitung2,
        })
    
      }

    render() {
        return (
            <div>
                <h3>Konversi Rupiah ke Bitcoin</h3>
                <p>Kurs 1 USD = 14.000 IDR</p>
                <input ref="nominalbitcoin" type="number" onInput={()=>{this.hitungbitcoin();}}/>
                <br/>   
                <br/>                     
                <h3>{this.state.outputbitcoin}</h3>
            </div>
        );
    }
}
export default RupiahkeBitcoin; 