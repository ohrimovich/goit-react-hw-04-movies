import MoviesAPI from '../../services/MoviesAPI'
import { useEffect, useState } from 'react';

function Reviews({ movieId }) {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        MoviesAPI.fetchMoviesReviews(movieId).then(res => setReviews(res.results))
    }, [movieId])

    return (
        <ul>
        { reviews.length !== 0 ? reviews.map(review => (
            <li key={review.author}><h3>{ review.author}</h3>
                <p>{ review.content}</p>
            </li>
        )) : <p>We don't have any reviews for this movie</p>  }
        </ul>
    )
}

export default Reviews;