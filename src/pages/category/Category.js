import React, { PureComponent, Fragment } from "react";
import { Grid, Genre, Formats } from "../../components";
import { CategoryTag } from "../../jsonLD";

class Category extends PureComponent {
  constructor(props) {
    super(props);
    const { routeFromLightbox, contentAction, clearAction, selectedCountries, selectedLanguages, setFilter, filter, loadSearch, match } = props;
    const { params } = match;
    let category = params.category;
    category && loadSearch(category);
    contentAction && clearAction();
    if (!routeFromLightbox) {
      setFilter({
        ...filter,
        contentSearch: category ? category : "",
        discoverId: null,
        languagesList: selectedLanguages,
        formatsList: [],
        genresList: [],
        countriesList: selectedCountries,
        is_category: category ? true : false
      });
    }
  }

  render() {
    return (
      <Fragment>
        <CategoryTag />
        <div className="filter">
          <Genre />
          <Formats />
        </div>
        <Grid />
      </Fragment>
    );
  }
}

export default Category;
