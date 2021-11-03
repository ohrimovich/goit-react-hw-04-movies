import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MoviesAPI from '../../services/MoviesAPI';

function MoviesPageSearchList({ movie }) {
      
    const [movies, setMovies] = useState([]);

    const location = useLocation();
    
    useEffect(() => {
        MoviesAPI.fetchMoviesByName(movie).then(res => setMovies(res.results))
    }, [movie]);
    
    return (
        <>
            {movies && movies.map(movie => (
                
                    <li key={movie.id}>
                    <Link to={{
                        pathname: movie.id && `movies/${movie.id}`,
                        state: {
                            from: {location, label: `back to movies search list`}
                        }
                    }}>
                        {movie.original_title ? movie.original_title : movie.name}
                    </Link>
                    </li>
               
            )  
       )}
        </>
    )
}

export default MoviesPageSearchList;