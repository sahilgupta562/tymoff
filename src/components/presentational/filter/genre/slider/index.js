import { connect } from "react-redux";
import { default as Slider } from "./slider";

const mapStateToProps = state => ({
  genres: state.master.genres
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
