"use client";
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Confetti from 'react-confetti';
import Navbar from '@/components/Navbar';

const createCard = (id, name, attack, health, image) => ({ id, name, attack, health, image });

const initialCards = [
  createCard(1, 'Warrior', 3, 5, '/cards/1.png'),
  createCard(2, 'Archer', 2, 4, '/cards/2.png'),
  createCard(3, 'Mage', 4, 3, '/cards/3.png'),
  createCard(4, 'Knight', 3, 6, '/cards/4.png'),
];

const CardGame = () => {
  const [player1Cards, setPlayer1Cards] = useState(initialCards.map(card => ({ ...card })));
  const [player2Cards, setPlayer2Cards] = useState(initialCards.map(card => ({ ...card })));
  const [board, setBoard] = useState({ player1: null, player2: null });
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const [battleInProgress, setBattleInProgress] = useState(false);
  const [timer, setTimer] = useState(5);
  const [showConfetti, setShowConfetti] = useState(false);

  // Use effect to handle confetti display when the game ends
  useEffect(() => {
    if (gameOver && winner !== null) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000); // Confetti lasts for 5 seconds
    }
  }, [gameOver, winner]);

  useEffect(() => {
    checkGameOver();
  }, [player1Cards, player2Cards, board]);

  useEffect(() => {
    if (board.player1 && board.player2 && !gameOver) {
      setBattleInProgress(true);
      setTimer(2);
      const timerInterval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer > 0) return prevTimer - 1;
          clearInterval(timerInterval);
          resolveAttack();
          return 0;
        });
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [board.player1, board.player2, gameOver]);

  const checkGameOver = () => {
    if (player1Cards.length === 0 && !board.player1 && player2Cards.length === 0 && !board.player2) {
      setGameOver(true);
      setWinner(0); // Indicates a tie
    } else if (player1Cards.length === 0 && !board.player1) {
      setGameOver(true);
      setWinner(2); // Player 2 wins
    } else if (player2Cards.length === 0 && !board.player2) {
      setGameOver(true);
      setWinner(1); // Player 1 wins
    }
  };

  const playCard = (player, cardIndex) => {
    if (player !== currentPlayer || gameOver || battleInProgress) return;

    const newBoard = { ...board };
    const playerCards = player === 1 ? [...player1Cards] : [...player2Cards];
    const [playedCard] = playerCards.splice(cardIndex, 1);
    newBoard[`player${player}`] = { ...playedCard };

    if (player === 1) {
      setPlayer1Cards(playerCards);
    } else {
      setPlayer2Cards(playerCards);
    }

    setBoard(newBoard);
    setCurrentPlayer(player === 1 ? 2 : 1);
  };

  const resolveAttack = () => {
    const newBoard = { ...board };

    if (newBoard.player1 && newBoard.player2) {
      const player1PreviousHealth = newBoard.player1.health;
      const player2PreviousHealth = newBoard.player2.health;

      const updateHealth = (playerKey, opponentKey) => {
        let health = newBoard[playerKey].health;
        const damageInterval = setInterval(() => {
          health -= 0.1;
          setBoard(prevBoard => ({
            ...prevBoard,
            [playerKey]: { ...prevBoard[playerKey], health: Math.max(0, health) }
          }));

          if (health <= 0 || health <= newBoard[playerKey].health - newBoard[opponentKey].attack) {
            clearInterval(damageInterval);
            if (health <= 0) {
              setBoard(prevBoard => ({
                ...prevBoard,
                [playerKey]: null
              }));
              setCurrentPlayer(playerKey === 'player1' ? 1 : 2);
              setBattleInProgress(false);
            } else {
              setBattleInProgress(false);
            }
          }
        }, 100);
      };

      updateHealth('player1', 'player2');
      updateHealth('player2', 'player1');

      if (player1PreviousHealth <= newBoard.player2.attack && player2PreviousHealth <= newBoard.player1.attack) {
        if (player1Cards.length === 0 && player2Cards.length === 0) {
          setGameOver(true);
          setWinner(player1PreviousHealth > player2PreviousHealth ? 1 : 2);
        }
      }
    }
  };

  const renderCard = (card) => (
    card && (
      <Card className="w-32 h-56 m-2">
        <CardContent className="p-2 flex flex-col items-center">
          <img src={card.image} alt={card.name} className="w-24 h-24 object-cover mb-2" />
          <div className="text-sm font-bold">{card.name}</div>
          <div className="text-xs">ATK: {card.attack}</div>
          <div className="text-xs">HP: {card.health.toFixed(1)}</div>
          <Progress value={(card.health / initialCards.find(c => c.name === card.name).health) * 100} className="w-full mt-2" />
        </CardContent>
      </Card>
    )
  );

  const renderPlayerHand = (player) => {
    const cards = player === 1 ? player1Cards : player2Cards;
    return cards.map((card, index) => (
      <Button 
        key={card.id} 
        onClick={() => playCard(player, index)} 
        disabled={currentPlayer !== player || gameOver || battleInProgress || board[`player${player}`] !== null}
        className="w-24 h-32 m-1 p-1 flex flex-col items-center justify-center"
      >
        <img src={card.image} alt={card.name} className="w-16 h-16 object-cover mb-1" />
        <div className="text-xs font-bold">{card.name}</div>
      </Button>
    ));
  };

  return (
    <div className="p-4" style={{
      backgroundImage: "url('/bg.jpg')",
      backgroundSize: "auto",
      backgroundPosition: "center",
      backgroundRepeat: "repeat",
      height: "100vh",
      width: "100vw",
    }}>
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />} {/* Render confetti */}

      <div className="mb-4">
        <h2 className="text-lg font-bold">Player 2's Hand ({player2Cards.length})</h2>
        <div className="flex flex-wrap justify-center">{renderPlayerHand(2)}</div>
      </div>
      
      <div className="flex justify-center items-center mb-4">
        <div>
          <h3 className="text-center">Player 2</h3>
          {renderCard(board.player2)}
        </div>
        {battleInProgress && (
          <div className="mx-4 text-2xl font-bold">{timer}</div>
        )}
        <div>
          <h3 className="text-center">Player 1</h3>
          {renderCard(board.player1)}
        </div>
      </div>
      
      <div className="mb-4">
        <h2 className="text-lg font-bold">Player 1's Hand ({player1Cards.length})</h2>
        <div className="flex flex-wrap justify-center">{renderPlayerHand(1)}</div>
      </div>
      
      {gameOver && <div className="text-xl font-bold text-center">Game Over! {winner === 0 ? 'It\'s a tie!' : `Player ${winner} wins!`}</div>}
    </div>
  );
};

export default CardGame;
