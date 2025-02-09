function ListOfMovies ({ movies }) {
    return (
        <ul>
        {
            movies.map(movie => (
            <li key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
                <img src={movie.image} alt={movie.Title} />
            </li>
            ))
        }
        </ul>
    )
}

function NoMoviesResult () {
    return (
        <p>No se encontraron resultados en tu busqueda</p>
    )
}


function Movies ({ movies }) {
    const hasMovies = movies?.length > 0

    return (
        hasMovies 
            ? <ListOfMovies movies={movies} />   
            : <NoMoviesResult />
    )

}

export default Movies
