import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../store/context';
import { useMemo } from 'react'
import { retrieveLaunchParams } from '@telegram-apps/sdk-react';
const WinnerCard = () => {
  const navigate = useNavigate()
  const { displayWinnerName, startNewGame, restartGame } = useGlobalContext();
  const lp = useMemo(() => retrieveLaunchParams(), []);

  const handleClickMainMenu = () => {
    navigate('/')
    startNewGame()
    restartGame()
  }

  const winner = displayWinnerName()

  return (
    <div className={`winner-card ${winner === 'player 1' ? 'winner-card-red' : 'winner-card-yellow'}`}>
      <div className='winner-card-text'>
        <p className='winner-name'>
          {winner === 'no one' ? 'no one' : `${lp.tgWebAppData.user.first_name || winner}`}
        </p>
        <p className='winner-statement'>
          {winner === 'you' ? 'win' : 'wins'}
        </p>


        <div className='game-screen-buttons-wrapper-small'>
          <button
            className='game-screen-btn play-again-btn'
            onClick={startNewGame}>
            play again
          </button>
          <button onClick={handleClickMainMenu} className='game-screen-btn quit-game-btn'>
            main menu
          </button>
        </div>

        <div className='game-screen-buttons-wrapper-big'>

          <button
            className='game-screen-btn play-again-btn'
            onClick={startNewGame}>
            play again
          </button>
        </div>

      </div>
    </div>
  );
};

export default WinnerCard;
