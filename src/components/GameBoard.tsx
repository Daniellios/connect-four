import { useGlobalContext } from '../store/context';
import { useEffect } from 'react';

const GameBoard = () => {
  const {
    createBoardCells,
    isRedTurn,
    pieces,
    checkForEndOfGame,
    resetCounter,
    mouseOverColumnIndicator,
    handlePlayerMove,
  } = useGlobalContext();

  useEffect(() => {
    resetCounter();

    // 1= red 2 = yellow
    let player = isRedTurn ? 1 : 2;
    checkForEndOfGame(player, pieces);
  }, [pieces]);

  return (
    <div className='gameboard'>
      {createBoardCells().map((value: any, index: number) => {
        return (
          <div
            key={index}
            className='cell'
            onMouseOver={() => mouseOverColumnIndicator(index % 7)}
            onClick={(e) => handlePlayerMove(e, index % 7)}></div>
        );
      })}
    </div>
  );
};

export default GameBoard;
