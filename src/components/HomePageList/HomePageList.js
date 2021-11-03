import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MoviesAPI from '../../services/MoviesAPI';
import s from "./HomePageList.module.scss"

function HomePageList() {
      
    const [movies, setMovies] = useState([]);

    const location = useLocation();
    
    useEffect(() => {
        MoviesAPI.fetchMovies().then(res => setMovies(res.results))
    }, []);
    
   
    return (
        <>
        <h1 className={s.title}>Trending today</h1>
            {movies && movies.map(movie => (
                
                    <li key={movie.id}>
                    <Link to={{
                        pathname: movie.id && `movies/${movie.id}`,
                        state: {
                            from: {location, label: `back to home list`}
                        },
                    }}>
                        {movie.original_title ? movie.original_title : movie.name}
                    </Link>
                    </li>
               
            )
           
       )}
        </>
    )
}

export default HomePageList;