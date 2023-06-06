import { useEffect, useState } from 'react';

const Snake = () => {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [player, setPlayer] = useState('X');
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (player === 'O') {
      makeBotMove();
    }
  }, [player]);

  const makeMove = index => {
    if (board[index] === null && !gameOver) {
      const updatedBoard = [...board];
      updatedBoard[index] = player;
      setBoard(updatedBoard);

      if (checkWinner(updatedBoard, player)) {
        setGameOver(true);
        return;
      }

      if (updatedBoard.every(cell => cell !== null)) {
        setGameOver(true);
        return;
      }

      setPlayer(player === 'X' ? 'O' : 'X');
    }
  };

  const makeBotMove = () => {
    const emptyCells = board.reduce((acc, cell, index) => {
      if (cell === null) {
        acc.push(index);
      }
      return acc;
    }, []);

    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const randomCell = emptyCells[randomIndex];

    makeMove(randomCell);
  };

  const checkWinner = (board, currentPlayer) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        board[a] === currentPlayer &&
        board[a] === board[b] &&
        board[a] === board[c]
      ) {
        return true;
      }
    }

    return false;
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setPlayer('X');
    setGameOver(false);
  };

  return (
    <div>
      <h1>Крестики-нолики</h1>
      <div className='board'>
        {board.map((cell, index) => (
          <div key={index} className='cell' onClick={() => makeMove(index)}>
            {cell}
          </div>
        ))}
      </div>
      {gameOver && (
        <div className='game-over-message'>
          {checkWinner(board, 'X')
            ? 'Вы выиграли!'
            : checkWinner(board, 'O')
            ? 'Вы проиграли!'
            : 'Ничья!'}
        </div>
      )}
      <button className='reset-button' onClick={resetGame}>
        Начать заново
      </button>
    </div>
  );
};

export default Snake;
