
// Componente para cada quadrado do tabuleiro
// Props:
// - value: 'X', 'O' ou null
// - onSquareClick: função chamada ao clicar
// - isWinning: boolean indicando se faz parte da linha vencedora
function Quadrado({ value, onSquareClick, isWinning }) {
  return (
    <button
      className={`square ${isWinning ? 'winning' : ''}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default Quadrado;