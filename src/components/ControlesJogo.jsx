// Componente com botões de controle do jogo
// Props:
// - onResetGame: função para reiniciar o jogo
// - onResetScore: função para resetar o placar
function ControlesJogo({ onResetGame, onResetScore }) {
  return (
    <div className="game-controls">
      <button className="reset-btn" onClick={onResetGame}>
        🔄 Novo Jogo
      </button>
      <button className="reset-score-btn" onClick={onResetScore}>
        📊 Resetar Placar
      </button>
    </div>
  );
}

export default ControlesJogo;