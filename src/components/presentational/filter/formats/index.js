import { connect } from "react-redux";
import { default as Formats } from "./formats";
import { setFilter } from "../../../../store";

const mapStateToProps = state => ({
  filter: state.content.filter,
  formats: state.master.formats,
  selectedFormats: state.content.filter.formatsList
});

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Formats);
