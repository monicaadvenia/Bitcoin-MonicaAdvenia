import React, { Component } from 'react';
import './App.css';
import BitcoinkeRupiah from './component/BitcoinkeRupiah'
import RupiahkeBitcoin from './component/RupiahkeBitcoin'

import axios from 'axios';

import { Link, Route } from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {
      dollaraustraliabeli: '',
      dollaraustraliajual: '',
      eurobeli: '',
      eurojual: '',
      poundsterlingbeli: '',
      poundsterlingjual: '',
      yenbeli: '',
      yenjual: '',
      dollaramerikabeli: '',
      dollaramerikajual: '',
      // outputrupiah: 'Silakan input nominal Bitcoin',
      // outputbitcoin: 'Silakan input nominal Rupiah',      
    }
  }

  componentDidMount(){
    axios.get('https://blockchain.info/ticker')
    .then((ambilData) => {     
      console.log(ambilData.data.USD.sell)
      let dollaramerika = ambilData.data.USD.sell;
      console.log(dollaramerika);      
      console.log(typeof(dollaramerika));
      this.setState({
        dollaraustraliabeli: ambilData.data.AUD.buy,
        dollaraustraliajual: ambilData.data.AUD.sell,   
        eurobeli: ambilData.data.EUR.buy,        
        eurojual: ambilData.data.EUR.sell,    
        poundsterlingbeli: ambilData.data.GBP.buy,        
        poundsterlingjual: ambilData.data.GBP.sell,    
        yenbeli: ambilData.data.JPY.buy,        
        yenjual: ambilData.data.JPY.sell,  
        dollaramerikabeli: ambilData.data.USD.buy,
        dollaramerikajual: ambilData.data.USD.sell,                  
      })
      return dollaramerika;
    })
  }

  render() {
    return (
      <div className="App">
        <center>
          <img src="https://www.blockchain.com/assets/img/bc-name-and-logo-dark-blue.svg" alt="" />
        
          <div className="tabmenu">

            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#bitcoin" role="tab" aria-controls="home" aria-selected="true"><Link to="/bitcoin_today">Bitcoin Hari Ini</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#rupiahkebitcoin" role="tab" aria-controls="profile" aria-selected="false"><Link to="/ke_bitcoin">Rupiah ke Bitcoin</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#bitcoinkerupiah" role="tab" aria-controls="profile" aria-selected="false"><Link to="/ke_rupiah">Bitcoin ke Rupiah</Link></a>
              </li>
            </ul>

            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="bitcoin" role="tabpanel" aria-labelledby="home-tab">
                <div className="judultab">
                  <h3>Harga Bitcoin Hari Ini</h3>
                  <table border="1">
                  <tbody>
                    <tr>
                      <th>Mata Uang</th>
                      <th>Harga Beli Bitcoin</th>
                      <th>Harga Jual Bitcoin</th>                        
                    </tr>
                    <tr>
                      <td>Dollar Australia</td>
                      <td>{this.state.dollaraustraliabeli}</td>
                      <td>{this.state.dollaraustraliajual}</td>                      
                    </tr>
                    <tr>
                      <td>Euro Eropa</td>
                      <td>{this.state.eurobeli}</td>
                      <td>{this.state.eurojual}</td>
                    </tr>
                    <tr>
                      <td>Poundsterling Inggris</td>
                      <td>{this.state.poundsterlingbeli}</td>
                      <td>{this.state.poundsterlingjual}</td>                      
                    </tr>
                    <tr>
                      <td>Yen Jepang</td>
                      <td>{this.state.yenbeli}</td>
                      <td>{this.state.yenjual}</td>                       
                    </tr>
                    <tr>
                      <td>Dollar Amerika</td>
                      <td>{this.state.dollaramerikabeli}</td>
                      <td>{this.state.dollaramerikajual}</td>                      
                    </tr>
                  </tbody>
                  </table>
                </div>
              </div>
              <div className="tab-pane fade" id="rupiahkebitcoin" role="tabpanel" aria-labelledby="profile-tab">
                <div className="judultab">
                  {/* <h3>Konversi Rupiah ke Bitcoin</h3>
                  <p>Kurs 1 USD = 14.000 IDR</p>
                  <input ref="nominalrupiah" type="number" onInput={()=>{this.hitungrupiah();}}/>
                  <br/>   
                  <br/>                     
                  <h3>{this.state.outputbitcoin}</h3> */}
                  <RupiahkeBitcoin id={this.state.dollaramerikajual}></RupiahkeBitcoin>
                  
                </div>
              </div>
              <div className="tab-pane fade" id="bitcoinkerupiah" role="tabpanel" aria-labelledby="profile-tab">
                <div className="judultab">
                  {/* <h3>Konversi Bitcoin ke Rupiah</h3>
                  <p>Kurs 1 USD = 14.000 IDR</p>  
                  <input ref="nominalbitcoin" type="number" onInput={()=>{this.hitungbitcoin();}}/>
                  <br/>
                  <br/>                        
                  <h3>{this.state.outputrupiah}</h3> */}
                  <BitcoinkeRupiah id={this.state.dollaramerikajual}></BitcoinkeRupiah>                                                                                     
                </div>
              </div>
            </div>

            </div>
        </center>

        <div>
          <Route path="/" />
          <Route path="/bitcoin_today" component={App}/>
          <Route path="/ke_bitcoin" component={RupiahkeBitcoin}/>
          <Route path="/ke_rupiah" component={BitcoinkeRupiah}/>
          </div>
      </div>
    );
  }
}

export default App;
