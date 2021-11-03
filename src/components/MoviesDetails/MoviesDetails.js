import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MoviesAPI from '../../services/MoviesAPI';
import s from './MoviesDetailsPage.module.scss';
import { nanoid } from 'nanoid';



function MoviesDetails() {

    const imgPath = 'https://image.tmdb.org/t/p/original';
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    

    useEffect(() => {
        MoviesAPI.fetchMoviesById(movieId).then(setMovie)
    },[movieId])
    return (
            <>
            {movie && 
                <div className={s.container}>
                <img className={s.img} src={`${imgPath}${movie.poster_path}`} alt="movie.original_title" />
                    <div className={s.content}>
                    <h1 className={s.title}>{movie.original_title}({movie.release_date.slice(0,4)})</h1>
                    <p><span className={s.score}>User Score:</span>{`${(movie.vote_average* 10)}%`}</p>
                    <h2>Overview</h2>
                    <p>{ movie.overview}</p>
                    <h3>Genres</h3>
                    <p>{movie.genres.map(genre => <span key={nanoid()} className={s.genre}>{genre.name}</span>)}</p>
                    </div>
                </div>
            }

            
        </>
        
    )
}

export default MoviesDetails;