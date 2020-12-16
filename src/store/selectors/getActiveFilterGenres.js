import { createSelector } from "reselect";
import { includes } from "lodash";

const getGenreList = state => state.content.filter.genresList;
const getGenres = state => state.master.genres;

const getActiveFilterGenres = createSelector([getGenreList, getGenres], (selectedGenres, genres) => {
  return genres.reduce((u, p) => {
    if (includes(selectedGenres, p.id)) {
      u.push({ id: p.id, name: p.name });
    }
    return u;
  }, []);
});

export default getActiveFilterGenres;
