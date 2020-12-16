import { createSelector } from "reselect";

const getGenres = state => state.master.genres;
const getSearchGenre = state => state.upload.searchGenre;

const listSearchedGenres = createSelector([getGenres, getSearchGenre], (genres, searchGenre) => {
  const filteredGenres = searchGenre ? genres.filter(genre => genre.name.toLowerCase().includes(searchGenre.toLowerCase())) : genres;
  return [...filteredGenres];
});

export default listSearchedGenres;
