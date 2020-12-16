import React, { PureComponent, Fragment } from "react";
import { Grid, Genre, Formats } from "../../components";
import { UniqueTag } from "../../jsonLD";

class Search extends PureComponent {
  constructor(props) {
    super(props);
    const { filter, setFilter, contentAction, clearAction, selectedCountries, selectedLanguages } = props;
    contentAction && clearAction();
    setFilter({
      ...filter,
      discoverId: null,
      languagesList: selectedLanguages,
      countriesList: selectedCountries
    });
  }

  componentWillUnmount() {
    const { clearSearch } = this.props;
    clearSearch();
  }
  renderUniqueTag = () => {
    return <UniqueTag Title={"Search"} ContentUrl={"https://www.tymoff.com/search"} Description={"Search content listing"} ContentImageUrl={"https://www.tymoff.com/logo.png"} />;
  };
  render() {
    return (
      <Fragment>
        {this.renderUniqueTag()}
        <div className="filter">
          <Genre />
          <Formats />
        </div>
        <Grid />
      </Fragment>
    );
  }
}

export default Search;
