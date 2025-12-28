import { useState } from "react"
import confetti from "canvas-confetti"

import { TURNS } from "./constants.js"
import { Square } from "./components/Square.jsx"
import { checkWinnerFrom, checkEndGame} from "./logic/checkWinner4EnRaya.js"
import { WinnersModal } from "./components/WinnerModal.jsx"

function App() {
  const [board, setBoard] = useState(Array(42).fill(null))
  const [turn, setTurn] = useState(TURNS.x)

  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(42).fill(null))
    setTurn(TURNS.x)
    setWinner(null)
  }

  const updateBoard = (colIndex) => {

    if (board[colIndex] || winner) return

    if (colIndex >= 35 || colIndex < 35 && board[colIndex+7]) {
      const newBoard = [...board]
      newBoard[colIndex] = turn
      // console.log(colIndex)
      setBoard(newBoard)
  
      const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
      setTurn(newTurn)

      // Revisar si hay ganador
      const newWinner = checkWinnerFrom(newBoard)
      if (newWinner) {
        confetti()
        setWinner(newWinner)
      } else if (checkEndGame(newBoard)) {
        setWinner(false)
      } 
    }
    
  }

  return (
    <main className="board">
      <h1>4 en raya</h1>
      <button onClick={resetGame}>Reiniciar</button>
      <section className="game">
        {
          board.map((square, colIndex) => (
          <Square
            key={colIndex}
            index={colIndex}
            updateBoard={updateBoard}
            turn={square}
          >
            {colIndex}
          </Square>
        ))}
      </section>

      <section className="turn">
        <Square turn={TURNS.x} isSelected={turn === TURNS.o}>
          {}
        </Square>
        <Square turn={TURNS.o} isSelected={turn === TURNS.x}>
          {}
        </Square>
      </section>

      <WinnersModal winner={winner} resetGame={resetGame}/>
    </main>
  )
}

export default App
