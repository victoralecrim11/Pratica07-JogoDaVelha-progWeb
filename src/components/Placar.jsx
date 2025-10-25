
// ============================================
// COMPONENTE: Placar.jsx
// ============================================
// Componente para exibir o placar do jogo
// Props:
// - score: objeto com contadores {X, O, draws}
function Placar({ score }) {
  return (
    <div className="scoreboard">
      <div className="score-item">
        <span className="player-x">X</span>
        <span className="score-value">{score.X}</span>
      </div>
      <div className="score-item">
        <span className="draws">Empates</span>
        <span className="score-value">{score.draws}</span>
      </div>
      <div className="score-item">
        <span className="player-o">O</span>
        <span className="score-value">{score.O}</span>
      </div>
    </div>
  );
}

export default Placar;