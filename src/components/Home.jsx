import React, { useState } from 'react';
import TimerTick from './TimerTick';
const Home = () =>{
    const [isAnimate, setIsAnimate] = useState(false);

    return(
        <div>
        <p style={{ color: 'orange', fontSize: '50px' }}>Koscom COP - React.js 해외주식 차트뷰</p>
        <TimerTick expiredTime={'2020-10-16T13:00:00+09:00'} isClicked={isAnimate} />
        </div>
    );
};

export default Home;