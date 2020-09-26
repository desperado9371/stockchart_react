import React, { useState, useEffect } from 'react';
import logo from './logo.png';
import './App.scss';
import TimerTick from './TimerTick';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

function App() {
  const [isAnimate, setIsAnimate] = useState(false);

  const [price, setPrice] = useState();
  const [date, setDate] = useState();

  console.log('hi');

  const token = 'pk_4effe5982f974a4ea7d00b3be33ae72e';

  useEffect(() => {
    fetch(`https://cloud.iexapis.com/stable/stock/aapl/chart/5d?token=${token}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setPrice(response[4]['close']);
        setDate(response[4]['date']);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${isAnimate ? 'animate' : ''}`} alt="logo" />
        <br />
        <p>I'm gonna make chart view here.</p>
        <p>
          {date}일의 애플(AAPL) 종가 {price}
        </p>
        <TimerTick expiredTime={'2020-10-16T13:00:00+09:00'} isClicked={isAnimate} />
      </header>
      <TradingViewWidget
        symbol="NASDAQ:AAPL"
        theme={Themes.DARK}
        locale="kr"
        details="true"
        studies={['MACD@tv-basicstudies', 'StochasticRSI@tv-basicstudies']}
        watchlist={['AAPL', 'TSLA', 'GOOG', 'MSFT']}
        width="relative"
        height="1200"
      />
    </div>
  );
}

export default App;
