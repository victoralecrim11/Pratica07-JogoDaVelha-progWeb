
// ============================================
// COMPONENTE: HistoricoJogo.jsx
// ============================================
// Componente para exibir o histórico de jogadas
// Props:
// - history: array com todos os estados do tabuleiro
// - onJumpTo: função para voltar a uma jogada específica
function HistoricoJogo({ history, onJumpTo }) {
  const jogadas = history.map((squares, move) => {
    const descricao = move > 0 ? `Ir para jogada #${move}` : 'Ir para o início';
    return (
      <li key={move}>
        <button
          className="history-btn"
          onClick={() => onJumpTo(move)}
        >
          {descricao}
        </button>
      </li>
    );
  });

  return (
    <div className="game-info">
      <h3>Histórico de Jogadas</h3>
      <ol>{jogadas}</ol>
    </div>
  );
}

export default HistoricoJogo;