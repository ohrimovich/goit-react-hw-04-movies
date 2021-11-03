

const fetchMovies = () => {
    return (
        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=b0fe4eba3ecdaf3d666d8ecb887fbb5a`)
        .then(res => res.json())
    )
}

const fetchMoviesById = (id) => {
    return (
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b0fe4eba3ecdaf3d666d8ecb887fbb5a&language=en-US`)
        .then(res => res.json())
    )
}

const fetchMoviesCast = (id) => {
    return (
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=b0fe4eba3ecdaf3d666d8ecb887fbb5a&language=en-US`)
        .then(res => res.json())
    )
}

const fetchMoviesReviews = (id) => {
    return (
        fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=b0fe4eba3ecdaf3d666d8ecb887fbb5a&language=en-US`)
        .then(res => res.json())
    )
}

const fetchMoviesByName = (keyWord) => {
    return (
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=b0fe4eba3ecdaf3d666d8ecb887fbb5a&language=en-US&query=${keyWord}&page=1&include_adult=false`)
        .then(res => res.json())
    )
}

const api = {
    fetchMovies,
    fetchMoviesById,
    fetchMoviesCast,
    fetchMoviesReviews,
    fetchMoviesByName
}

export default api;