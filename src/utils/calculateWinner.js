
// ============================================
// UTILITÁRIO: calculateWinner.js
// ============================================
// Função auxiliar para calcular o vencedor
// Retorna: {winner: 'X'|'O', line: [a,b,c]} ou null
function calculateWinner(squares) {
  // Todas as combinações possíveis de vitória
  const lines = [
    [0, 1, 2], // Linha superior
    [3, 4, 5], // Linha do meio
    [6, 7, 8], // Linha inferior
    [0, 3, 6], // Coluna esquerda
    [1, 4, 7], // Coluna do meio
    [2, 5, 8], // Coluna direita
    [0, 4, 8], // Diagonal principal
    [2, 4, 6], // Diagonal secundária
  ];
  
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] };
    }
  }
  return null;
}