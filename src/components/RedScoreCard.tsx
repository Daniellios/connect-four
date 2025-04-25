import { useGlobalContext } from '../store/context';

const Player1Icon: string = "src/assets/images/player-one.svg";
const YouIcon: string = "src/assets/images/you.svg";


const RedScoreCard = () => {
  const { isComputerPlaying, redScore } = useGlobalContext();

  return (
    <div className='score-card red-card'>
      <img
        src={`${isComputerPlaying ? YouIcon : Player1Icon}`}
        alt='player 1'
        className='player-icon'
      />

      <div className='score-card-stats stat-mg-left'>
        <p className='score-card-player-title'>{`${isComputerPlaying ? 'you' : 'player 1'
          }`}</p>
        <p className='score-card-score'>{redScore}</p>
      </div>
    </div>
  );
};

export default RedScoreCard;
