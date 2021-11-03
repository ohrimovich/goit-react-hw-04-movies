import MoviesAPI from '../../services/MoviesAPI'
import { useEffect, useState } from 'react';

function Cast({ movieId }) {

    const imgPath = 'https://image.tmdb.org/t/p/original'
    const [cast, setCast] = useState([]);

    useEffect(() => {
        MoviesAPI.fetchMoviesCast(movieId).then(res => setCast(res.cast))
    }, [movieId])

    return (
        <ul>
        { cast && cast.map(person => (
            <li key={person.id}>
                <img src={`${imgPath}${person.profile_path}`} alt={person.name} width='150' />
                <p>{person.name}</p>
           </li>
        ))}
            
        </ul>
    )
}

export default Cast;