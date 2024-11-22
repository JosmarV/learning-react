import { useState, useEffect } from "react"
import confetti from "canvas-confetti"

import { Square } from "./components/Square.jsx"
import { TURNS } from "./constants.js"
import { checkWinnerFrom, checkEndGame } from "./logic/checkWinner.js"
import { WinnersModal } from "./components/WinnersModal.jsx"
import { saveGameToStorage, resetGameToStorage } from "./logic/Storage/index.js"

function App() {
  const [board, setBoard] = useState( () => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  const [turn, setTurn] = useState( () => {
    const turnFromStorage= window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.x
  })

  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)

    resetGameToStorage()
  }

  const updateBoard = (index) => {

    if (board[index] || winner) return // detiene la ejecucion si hay algo o hay un ganador

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)
    // Guardar la partida en LocalStorage
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })

    // Revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  useEffect(() => {
    console.log('useEfect')
  }, [winner])

  return (
    <main className="board">
      <h1>La viejita</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.x}>
          {TURNS.x}
        </Square>
        <Square isSelected={turn === TURNS.o}>
          {TURNS.o}
        </Square>
      </section>

      <WinnersModal winner={winner} resetGame={resetGame}/>
    </main>
    
  )
  }

export default App
