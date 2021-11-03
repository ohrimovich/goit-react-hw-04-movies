import MoviesPageSearch from "../components/MoviesPageSearch/MoviesPageSearch";
import MoviesPageSearchList from "../components/MoviesPageSearchList/MoviesPageSearchList";
import { useHistory, useLocation } from "react-router";

const MoviesPage = () => {


  const history = useHistory();
  const location = useLocation();

  const locationQwery = new URLSearchParams(location.search).get('qwery');

  const onChange = movieName => {
    history.push({
      ...location,
      search: `qwery=${movieName}`
    })
  }
  return (
      <>
      <MoviesPageSearch onChange={onChange} />
      {locationQwery && <MoviesPageSearchList movie={locationQwery} />}
      </>
    )
}

export default MoviesPage;