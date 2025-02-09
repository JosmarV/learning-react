import './App.css'
import { useMovies } from './hooks/useMovies.js'
import Movies from './components/Movies.jsx'

function App() {
  const { movies: mappedMovies } = useMovies()
  return (
   <div className='page'>
    
      <header>
        <h1>Buscador de películas</h1>
        <form className='form'>
          <input placeholder='Avengers, Matrix, Star Wars' />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>
   </div>
  )
}

export default App
