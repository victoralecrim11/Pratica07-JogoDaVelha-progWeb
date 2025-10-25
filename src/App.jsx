// src/App.jsx
import { useState } from 'react';
import Tabuleiro from './components/Tabuleiro';
import Placar from './components/Placar';
import ControlesJogo from './components/ControlesJogo';
import HistoricoJogo from './components/HistoricoJogo';
import './styles/Game.css';
import './App.css';

function App() {
  // Estado para o histórico de jogadas
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // Estado para o índice da jogada atual
  const [currentMove, setCurrentMove] = useState(0);
  // Estado para o placar
  const [score, setScore] = useState({ X: 0, O: 0, draws: 0 });
  
  // Determina se é o turno de X
  const xIsNext = currentMove % 2 === 0;
  // Obtém os quadrados da jogada atual
  const currentSquares = history[currentMove];

  // Função para processar uma jogada
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    
    // Atualiza o placar se houver vencedor
    const winnerInfo = calcularVencedor(nextSquares);
    if (winnerInfo) {
      setScore(prev => ({
        ...prev,
        [winnerInfo.winner]: prev[winnerInfo.winner] + 1
      }));
    } else if (nextSquares.every(square => square !== null)) {
      setScore(prev => ({ ...prev, draws: prev.draws + 1 }));
    }
  }

  // Função para calcular o vencedor
  function calcularVencedor(squares) {
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
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return {
          winner: squares[a],
          line: lines[i],
        };
      }
    }
    return null;
  }

  // Função para voltar para uma jogada anterior
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  // Função para reiniciar o jogo
  function resetGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  // Função para resetar o placar
  function resetScore() {
    setScore({ X: 0, O: 0, draws: 0 });
  }

  return (
    <div className="game">
      <h1>🎮 Jogo da Velha</h1>
      
      {/* Componente do Placar */}
      <Placar score={score} />

      {/* Componente do Tabuleiro */}
      <div className="game-board">
        <Tabuleiro 
          xIsNext={xIsNext} 
          squares={currentSquares} 
          onPlay={handlePlay}
        />
      </div>

      {/* Componente de Controles */}
      <ControlesJogo 
        onResetGame={resetGame}
        onResetScore={resetScore}
      />

      {/* Componente de Histórico */}
      <HistoricoJogo 
        history={history}
        onJumpTo={jumpTo}
      />
    </div>
  );
}

export default App;
