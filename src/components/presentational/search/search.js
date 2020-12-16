import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { TextField, ButtonBase } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { styles } from "./search.style";
import { Cross } from "../../../icons";

import "./search.scss";

class Search extends PureComponent {
  state = { enterClick: false };
  handleInputChange = value => {
    const { loadSearch } = this.props;
    const { enterClick } = this.props;
    !enterClick && loadSearch(value || "");
  };

  searchWithCategory = () => {
    const { history } = this.props;
    const { location } = history;
    const searchRoute = "/search";
    const category = "/categories";
    if (location.pathname !== category) {
      history.push(searchRoute);
    }
  };

  clearSearch = () => {
    const { clearSearch } = this.props;
    clearSearch();
    this.handleChange("");
  };

  handleChange = contentSearch => {
    const { filter, setFilter, setCustomFilter, history, clearSearchResult } = this.props;
    const { location } = history;
    const searchRoute = "/search";
    clearSearchResult();
    if (location.pathname !== searchRoute && contentSearch) {
      setCustomFilter({
        ...filter,
        contentSearch: contentSearch || ""
      });
      history.push(searchRoute);
    } else {
      setFilter({ ...filter, contentSearch: contentSearch || "", discoverId: null });
    }
  };
  render() {
    const { classes, searchResults, searchHint } = this.props;
    return (
      <Fragment>
        <div className={`search-field ${classes.search} `}>
          <Autocomplete
            freeSolo
            value={searchHint}
            onChange={(event, value) => this.handleChange(value)}
            onInputChange={(event, value) => this.handleInputChange(value)}
            options={searchResults}
            renderInput={params => (
              <TextField
                {...params}
                fullWidth
                onClick={this.searchWithCategory}
                onKeyDown={event => {
                  if (event.keyCode === 13) {
                    this.setState({ enterClick: true });
                    this.handleChange(searchHint);
                  }
                }}
                className={classes.underline}
                InputProps={{
                  ...params.InputProps,
                  placeholder: "Search",
                  disableUnderline: true
                }}
              />
            )}
          />
          {!!searchHint && (
            <ButtonBase onClick={this.clearSearch}>
              <Cross width={"16px"} height={"16px"} className="cross" />{" "}
            </ButtonBase>
          )}
        </div>
      </Fragment>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Search);
