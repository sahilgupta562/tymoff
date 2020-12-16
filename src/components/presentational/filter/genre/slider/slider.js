import React, { PureComponent } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { ButtonBase } from "@material-ui/core";
import { SliderColors } from "../../../../../constant";
import "./slider.scss";
import {Left,Right} from "../../../../../icons";


class Slider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { selected: "" };
  }

  renderItems = (genres, selected, onFilterClick) =>
    genres.map((genre, index) => {
      const isActive = !!selected === genres.name;
      return (
        <ButtonBase
          key={genre.id || index}
          onClick={() => onFilterClick(genre.id)}
        >
          <div
            style={{ backgroundColor: SliderColors[index] }}
            className={`menu-item ${isActive ? "active" : ""}`}
          >
            {genre.name}
          </div>
        </ButtonBase>
      );
    });

  onSelect = selected => {
    this.setState({ selected });
  };

  render() {
    const { selected } = this.state;
    const { genres, onFilterClick } = this.props;
    // Create menu from items
    const items = this.renderItems(genres, selected, onFilterClick);

    return (
      <div className="action-btn">
        <ScrollMenu
          data={items}
          arrowLeft={<Left height={"35px"} width={"35px"} className="fav-left" />}
          arrowRight={<Right height={"35px"} width={"35px"} className="fav-right" />}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}

export default Slider;
