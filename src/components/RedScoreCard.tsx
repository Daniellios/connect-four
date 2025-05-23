import { useMemo } from 'react';
import { useGlobalContext } from '../store/context';
import { retrieveLaunchParams } from '@telegram-apps/sdk-react';

const RedScoreCard = () => {
  const { isComputerPlaying, redScore } = useGlobalContext();

  const lp = useMemo(() => retrieveLaunchParams(), []);

  return (
    <div className='score-card red-card'>
      <img
        alt='player 1'
        className='player-icon'
      />

      <div className='score-card-stats stat-mg-left'>
        <p className='score-card-player-title'>{`${isComputerPlaying ? 'you' : `${lp.tgWebAppData.user.first_name || 'player 1'}`
          }`}</p>
        <p className='score-card-score'>{redScore}</p>
      </div>
    </div>
  );
};

export default RedScoreCard;
