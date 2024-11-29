import { Square } from "../../../../projects/02-la-viejita/src/components/Square"

export function WinnersModal ({winner, resetGame}) {
    if (winner === null) return null

    const winnerText = winner === false ? 'Empate' : 'Gano: '
    
    return (
        <section className="winner">
        <div className="text">
          <h2>{winnerText}</h2>

          <header className="win">
            { winner && <Square turn={winner}>{}</Square>}
          </header>

          <footer>
            <button onClick={resetGame}>Empezar de nuevo</button>
          </footer>
        </div>
      </section>
    )
}
