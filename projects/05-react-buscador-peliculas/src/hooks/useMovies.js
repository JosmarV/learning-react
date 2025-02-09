import responseMovie from '../mocks/with-result.json'
import noResults from '../mocks/no-result.json'

export function useMovies() {
  const movies = responseMovie.Search

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    image: movie.Poster,
  }))

  return { movies: mappedMovies }
}
