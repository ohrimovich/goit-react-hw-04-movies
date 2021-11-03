import s from './MoviesPageSearch.module.scss'
import { useState } from 'react';

function MoviesPageSearch({onChange}) {

    const [movieName, setMovieName] = useState('');

     const handlerNameChange = event => {
       
            setMovieName(event.currentTarget.value.toLowerCase())
    }

    const handlerSubmit = event => {
        event.preventDefault();

        if (movieName.trim() === '') {
            alert('Enter name of movie, what would you like to find');
            return;

        }

        onChange(movieName);
        setMovieName('');

    }

    return (
          <form onSubmit={handlerSubmit} className={s.form}>
            <input
                type="text"
                autoComplete="off"
                value = {movieName}
                autoFocus
                placeholder="Search movies"
                onChange={handlerNameChange}
            />
            <button type='submit' className={s.button}>Search</button>
        </form>
    )
}

export default MoviesPageSearch;