import React, { PureComponent } from "react";
import { Grid } from "../../../components";
import { FilterObject } from "../../../constant";
import { cloneDeep } from "lodash";
// import { DiscoverOptionTag } from "../../../jsonLD";
import { isServer } from "../../../store";
class DiscoverList extends PureComponent {
  constructor(props) {
    super(props);
    const { setFilter, discoverId, resetContentPage, contentAction, clearAction, selectedCountries, selectedLanguages } = props;
    contentAction && clearAction();
    resetContentPage();
    const filter = cloneDeep(FilterObject);
    setFilter({ ...filter, discoverId, countriesList: selectedCountries, languagesList: selectedLanguages });
  }

  handleBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { discoverName } = this.props;
    // const title = kebabCase(discoverName) === "surprise-me" ? "Get surprised | tymoff" : "See what’s trending today | tymoff";
    // const description = kebabCase(discoverName) === "surprise-me" ? "We can surprise you every time you check tymoff." : " Find popular photos, videos or articles that are trending today.";
    return (
      <div>
        {/* <DiscoverOptionTag Url={`https://www.tymoff.com/discover/${kebabCase(discoverName)}`} Title={title} Description={description} /> */}
        <div className="sub-header text-left tab-hidden">
          <button className="back-btn" onClick={this.handleBack}></button>
          {!isServer && <h1>{discoverName}</h1>}
        </div>
        <h2 className="page-title mobile-hidden">{discoverName}</h2>
        <Grid />
      </div>
    );
  }
}

export default DiscoverList;
