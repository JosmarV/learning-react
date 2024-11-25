import { useState } from "react"

import { TURNS } from "./constant.js"
import { Square } from "../../../projects/02-la-viejita/src/components/Square.jsx"

function App() {
  const [board, setBoard] = useState(Array(42).fill(null))
  const [turn, setTurn] = useState(TURNS.x)

  const resetGame = () => {
    setBoard(Array(42).fill(null))
    setTurn(TURNS.x)
  }

  const updateBoard = (colIndex) => {

    if (board[colIndex]) return

    console.log(board[colIndex+7])

    if (colIndex >= 35 || colIndex < 35 && board[colIndex+7]) {
      const newBoard = [...board]
      newBoard[colIndex] = turn
      console.log(colIndex)
      setBoard(newBoard)
  
      const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
      setTurn(newTurn)
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
            {}
          </Square>
        ))}
      </section>

      <section className="turn">
        <Square turn={TURNS.x} isSelected={turn === TURNS.x}>
          {}
        </Square>
        <Square turn={TURNS.o} isSelected={turn === TURNS.o}>
          {}
        </Square>
      </section>

    </main>
  )
}

export default App
