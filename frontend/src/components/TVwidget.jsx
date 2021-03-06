import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import './TVwidget.scss';

const TVwidget = () => {
    return(
        <TradingViewWidget
        symbol="NASDAQ:AAPL"
        theme={Themes.DARK}
        locale="kr"
        details="true"
        studies={['MACD@tv-basicstudies']}
        watchlist={['AAPL', 'TSLA', 'GOOG', 'MSFT']}
        width="relative"
        height="800"
      />
    );
};

export default TVwidget;