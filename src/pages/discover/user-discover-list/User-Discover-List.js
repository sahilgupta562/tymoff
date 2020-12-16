import React, { PureComponent } from "react";
import { kebabCase } from "lodash";
import { ContentAction } from "../../../constant";
import { Grid } from "../../../components";
class UserDiscoverList extends PureComponent {
  constructor(props) {
    super(props);
    const { discoverName, setContentAction, clearContent, resetContentPage } = props;
    resetContentPage();
    clearContent();
    const action = ContentAction[kebabCase(discoverName)];
    if (action) setContentAction(action);
  }
  handleBack = () => {
    const { history } = this.props;
    history.goBack();
  }
  render() {
    const { discoverName } = this.props;
    return (
      <div>
        <div className="sub-header text-left tab-hidden">
          <button className="back-btn" onClick={this.handleBack} ></button>
          <h1 >{discoverName}</h1>
        </div>
        <h2 className="page-title mobile-hidden">{discoverName}</h2>
        <Grid />
      </div>
    );
  }
}

export default UserDiscoverList;
