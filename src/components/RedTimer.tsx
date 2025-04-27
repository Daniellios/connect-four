import { useEffect, useMemo } from 'react';
import { useGlobalContext } from '../store/context';
import { retrieveLaunchParams } from '@telegram-apps/sdk-react';

const RedTimer = () => {
  const {
    isComputerPlaying,
    isWinnerDeclared,
    timePerMove,
    CounterMinusOneSec,
    isPauseMenuOpen,
    otherPlayerIsWinner,
  } = useGlobalContext();

  const lp = useMemo(() => retrieveLaunchParams(), []);

  useEffect(() => {
    let interval = setInterval(() => {
      if (!isPauseMenuOpen) {
        CounterMinusOneSec();

        if (timePerMove === 0) {
          otherPlayerIsWinner(1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isPauseMenuOpen, timePerMove]);

  return (
    <div
      className={`${isWinnerDeclared ? 'timer red-timer hidden' : 'timer red-timer'
        } `}>
      <div className='timer-text'>
        <p className='timer-turn'>{`${isComputerPlaying ? `${lp.tgWebAppData.user.username}` : `${lp.tgWebAppData.user.first_name} turn`
          }`}</p>
        <p className='timer-seconds-left'>{timePerMove}s</p>
      </div>
    </div>
  );
};

export default RedTimer;
