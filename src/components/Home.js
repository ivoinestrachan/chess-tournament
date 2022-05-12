import React from 'react';
import Board from './Board';
import Countdown from './Countdown';
import Join from './Join';
const Home = () => {
  return (
    <div>
      <Countdown />
      <Join />
      <Board />
    </div>
  );
}

export default Home;
