import React, { Component } from 'react';

class BitcoinkeRupiah extends Component {
    constructor(){
        super();
        this.state = {
            outputrupiah: 'Silakan input nominal Bitcoin',
        }
    }

    hitungbitcoin(){
        let x = this.refs.nominalbitcoin.value;
        let dollar = this.props.id;
        let kursrupiah = 14000;
        let hasilhitung3 = x*dollar*kursrupiah;
        this.setState({
          outputrupiah:'BTC' + ' ' + this.refs.nominalbitcoin.value + ' = Rp ' + hasilhitung3,
        })
    
      }

    render() {
        return (
            <div>
                <h3>Konversi Bitcoin ke Rupiah</h3>
                <p>Kurs 1 USD = 14.000 IDR</p>  
                <input ref="nominalbitcoin" type="number" onInput={()=>{this.hitungbitcoin();}}/>
                <br/>
                <br/>                        
                <h3>{this.state.outputrupiah}</h3>
            </div>
        );
    }
}
export default BitcoinkeRupiah; 