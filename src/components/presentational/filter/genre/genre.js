import React, { PureComponent, Fragment } from "react";
import { indexOf, remove } from "lodash";
import { ButtonBase } from "@material-ui/core";
import { Cross } from "../../../../icons";
import Slider from "./slider";
import "./genre.scss";

class Genre extends PureComponent {
  onFilterClick = genreId => {
    const { setFilter, filter } = this.props;
    const { genresList } = filter;
    if (indexOf(genresList, genreId) === -1) {
      genresList.push(genreId);
    } else {
      remove(genresList, el => genreId === el);
    }
    const genre = [...genresList];
    setFilter({ ...filter, genresList: genre });
  };
  render() {
    const { selectedGenres } = this.props;
    return (
      <Fragment>
        <Slider onFilterClick={this.onFilterClick} />
        <div className="filter-btn">
          {selectedGenres.map((genre, index) => (
            <div key={genre.id || index} className="f-btn">
              <span className="genre-initial">{genre.name.charAt(0)}</span>
              <span className="text">{genre.name}</span>
              <span className="cancel">
                <ButtonBase onClick={() => this.onFilterClick(genre.id)}>
                  <Cross width={"16px"} height={"16px"} className="cross" />
                </ButtonBase>
              </span>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Genre;
