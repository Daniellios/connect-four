import GameScreenHeader from '../components/GameScreenHeader';
import YellowScoreCard from '../components/YellowScoreCard';
import PauseMenuModal from '../components/PauseMenuModal';
import RedScoreCard from '../components/RedScoreCard';
import GameBoard from '../components/GameBoard';
import WinnerBg from '../components/WinnerBg';
import RedTimer from '../components/RedTimer';
import YellowTimer from '../components/YellowTimer';
import { useGlobalContext } from '../store/context';
import WinnerCard from '../components/WinnerCard';

const Game: React.FC = () => {
  const { isRedTurn, isWinnerDeclared } = useGlobalContext();

  return (
    <main>
      <div className='game-screen-container'>
        <GameScreenHeader />
        <div className='score-card-layout'>
          <RedScoreCard />
          <YellowScoreCard />
        </div>
        <GameBoard />
        {isRedTurn ? <RedTimer /> : <YellowTimer />}
        {isWinnerDeclared && <WinnerCard />}
        <PauseMenuModal />
      </div>
      <WinnerBg />
    </main>
  );
};

export default Game;
