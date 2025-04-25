import { postEvent } from '@telegram-apps/sdk-react';
import { useGlobalContext } from '../store/context';
import { Link } from 'react-router-dom';

const PauseMenuModal = () => {
  const { isPauseMenuOpen, closePauseMenu, restartGame } = useGlobalContext();

  const handleQuitGame = () => {
    postEvent('web_app_close')
  }

  return (
    <div
      className={`${isPauseMenuOpen ? 'pause-menu-overlay show-modal' : 'pause-menu-overlay'
        }`}>
      <div className='pause-menu'>
        <h1 className='pause-menu-header'>pause</h1>

        <div>
          <button
            className='menu-btn pause-menu-btn text-center'
            onClick={closePauseMenu}>
            continue game
          </button>
          <button
            className='menu-btn pause-menu-btn text-center'
            onClick={restartGame}>
            restart
          </button>
          <Link
            to='/'
            className='menu-link pause-menu-link text-center pink-bg-clr white-text-clr'
            onClick={handleQuitGame}>
            quit game
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PauseMenuModal;
