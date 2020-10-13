import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import logo from './logo.png';
import './App.scss';
import TimerTick from './TimerTick';
import TVwidget from './TVwidget';
import Home from './Home';
import Search from './Search';
import Mypage from './Mypage';

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
      <BrowserRouter>
      <div className="Navbar">
        <Link to="/">Home</Link>
        <br/>
        <Link to="/search">Search</Link>
        <br/>
        <Link to="/mypage">My page</Link>
        <br/>

        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/mypage" component={Mypage} />
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
