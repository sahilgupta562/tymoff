import React, { PureComponent, Fragment } from "react";
import { Grid } from "../../components";
import { isServer } from "../../store";
import { HomeTag } from "../../jsonLD";

class Dashboard extends PureComponent {
  constructor(props) {
    super(props);
    const { routeFromLightbox, contentAction, clearAction, selectedCountries, setFilter, filter, selectedLanguages } = props;
    contentAction && clearAction();
    if (!isServer && !routeFromLightbox) {
      setFilter({
        ...filter,
        contentSearch: "",
        discoverId: null,
        languagesList: selectedLanguages,
        formatsList: [],
        genresList: [],
        countriesList: selectedCountries
      });
    }
  }

  render() {
    return (
      <Fragment>
        <HomeTag />
        <Grid />
      </Fragment>
    );
  }
}

export default Dashboard;
