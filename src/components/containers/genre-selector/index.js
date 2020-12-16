import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as GenreSelector } from "./genre-selector";
import { setUploadGenre, publishContent, addMoreContent, resetAddMoreContent, listSearchedGenres, setSearchGenre } from "../../../store";

const mapStateToProps = state => ({
  genres: listSearchedGenres(state),
  selectedGenres: state.upload.uploadGenre,
  error: state.upload.error,
  isLoading: state.upload.isLoading,
  searchGenre: state.upload.searchGenre
});

const mapDispatchToProps = dispatch => ({
  setUploadGenre: genreId => dispatch(setUploadGenre(genreId)),
  publishContent: () => dispatch(publishContent()),
  addMoreContent: () => dispatch(addMoreContent()),
  resetAddMoreContent: () => dispatch(resetAddMoreContent()),
  setSearchGenre: searchText => dispatch(setSearchGenre(searchText))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GenreSelector));
