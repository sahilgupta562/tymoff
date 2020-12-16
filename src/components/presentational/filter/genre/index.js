import { connect } from "react-redux";
import { withRouter } from "react-router";
import { default as Genre } from "./genre";
import { setFilter, getActiveFilterGenres } from "../../../../store";

const mapStateToProps = state => ({
  filter: state.content.filter,
  selectedGenres: getActiveFilterGenres(state)
});

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setFilter(filter))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Genre));
