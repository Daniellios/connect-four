import GameLogo from "../assets/images/logo.svg?react";
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../store/context';
import { emitEvent, postEvent } from '@telegram-apps/sdk-react';

const PlayVPlayIcon: string = "src/assets/images/player-vs-player.svg";

const MainMenu = () => {
  const { openGameRules, humanOpponent } = useGlobalContext();


  return (
    <div className='menu'>
      <GameLogo />
      <div>
        <Link
          to='/four-in-a-row'
          className='menu-link yellow-bg-clr black-text-clr'
          onClick={humanOpponent}>
          play vs player
          <img
            src={PlayVPlayIcon}
            alt='player vs player icon'
            className='menu-link-icon'
          />
        </Link>

        <button className='menu-btn' onClick={openGameRules}>
          game rules
        </button>
      </div>
    </div>
  );
};

export default MainMenu;
