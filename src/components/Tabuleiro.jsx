
// Componente principal do tabuleiro 3x3
// Props:
// - xIsNext: boolean indicando se é o turno de X
// - squares: array com o estado atual do tabuleiro
// - onPlay: função para processar uma jogada
import Quadrado from './Quadrado';

function Tabuleiro({ xIsNext, squares, onPlay }) {
  // Função para lidar com o clique em um quadrado
  function handleClick(i) {
    // Verifica se já há um vencedor ou se o quadrado já está preenchido
    if (calcularVencedor(squares) || squares[i]) {
      return;
    }
    
    // Cria uma cópia do array de quadrados
    const nextSquares = squares.slice();
    // Define X ou O baseado no turno atual
    nextSquares[i] = xIsNext ? 'X' : 'O';
    // Passa o novo estado para o componente pai
    onPlay(nextSquares);
  }

  // Calcula o vencedor e determina o status do jogo
  const infoVencedor = calcularVencedor(squares);
  let status;
  
  if (infoVencedor) {
    status = `🎉 Vencedor: ${infoVencedor.winner}`;
  } else if (squares.every(square => square !== null)) {
    status = '🤝 Empate!';
  } else {
    status = `Próximo jogador: ${xIsNext ? 'X' : 'O'}`;
  }

  // Renderiza o tabuleiro 3x3
  return (
    <>
      <div className="status">{status}</div>
      <div className="board">
        {[0, 1, 2].map(row => (
          <div className="board-row" key={row}>
            {[0, 1, 2].map(col => {
              const i = row * 3 + col;
              const isWinning = infoVencedor?.line?.includes(i);
              return (
                <Quadrado
                  key={i}
                  value={squares[i]}
                  onSquareClick={() => handleClick(i)}
                  isWinning={isWinning}
                />
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
}

// Função auxiliar para calcular o vencedor
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

export default Tabuleiro;