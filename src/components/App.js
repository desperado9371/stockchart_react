import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import './App.scss';
import Home from './Home';
import Search from './Search';
import Mypage from './Mypage';
import Login from './Login';
import Signin from './Signin';

function App() {
  // const [isAnimate, setIsAnimate] = useState(false);
  // const [price, setPrice] = useState();
  // const [date, setDate] = useState();

  // const token = 'pk_4effe5982f974a4ea7d00b3be33ae72e';
  // useEffect(() => {
  //   fetch(`https://cloud.iexapis.com/stable/stock/aapl/chart/5d?token=${token}`, {
  //     method: 'GET',
  //   })
  //     .then((res) => res.json())
  //     .then((response) => {
  //       console.log(response);
  //       setPrice(response[4]['close']);
  //       setDate(response[4]['date']);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <div className="App">
      <BrowserRouter>
      <div className="Navbar">
        <Link className="App-link" to="/">Home</Link>
        <br/>
        <Link className="App-link" to="/search">Search</Link>
        <br/>
        <Link className="App-link" to="/signin">Sign in</Link>
        <br/>
        <Link className="App-link" to="/login">Login</Link>
        <br/>
        <Link className="App-link" to="/mypage">My page</Link>
        <br/>
      </div>
      <body>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/signin" component={Signin} />
        <Route path="/login" component={Login} />
        <Route path="/mypage" component={Mypage} />
      </body>
      </BrowserRouter>
    </div>
  );
}

export default App;
