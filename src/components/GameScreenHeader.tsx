import React from 'react';
import { useGlobalContext } from '../store/context';
import GameLogo from "../assets/images/logo.svg?react";

const GameScreenHeader = () => {
  const { openPauseMenu, restartGame } = useGlobalContext();
  return (
    <div className='game-screen-header'>
      <button
        className='game-screen-btn game-screen-menu-btn'
        onClick={openPauseMenu}>
        Menu
      </button>
      <GameLogo />
      <button className='game-screen-btn' onClick={restartGame}>
        Restart
      </button>
    </div>
  );
};

export default GameScreenHeader;
