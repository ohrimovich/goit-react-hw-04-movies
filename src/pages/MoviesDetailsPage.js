import { useEffect, useState } from 'react';
import { NavLink, useRouteMatch, Route, useParams, Switch, useHistory, useLocation } from 'react-router-dom';
import { nanoid } from "nanoid";
import MoviesDetails from "../components/MoviesDetails/MoviesDetails";
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';

function MoviesDetailsPage() {

    const { url } = useRouteMatch();
    const { movieId } = useParams();

    const history = useHistory();
    const location = useLocation();

    const [goBackPath, setGoBackPath] = useState()

    useEffect(() => {
         setGoBackPath(location.state.from.location)
    },[])
    
    const handleClick = () => {
        history.push(goBackPath);
    }
   
    return (
        <>
            <button type='button' onClick={handleClick}>go back</button>
            <MoviesDetails />
            <div className='info'>
            <ul>
                <li key={nanoid()}><NavLink to={`${url}/cast`}>Cast</NavLink></li>
                <li key={nanoid()}><NavLink to={`${url}/reviews`}>Reviews</NavLink></li>
                </ul>
                </div>
            
            <Switch>
                <Route path={`${url}/cast`}>
                    <Cast  movieId={movieId}/>
                </Route>
                <Route path={`${url}/reviews`}>
                    <Reviews movieId={movieId}/>
                </Route>
            </Switch>
        </>
    )
}

export default MoviesDetailsPage;