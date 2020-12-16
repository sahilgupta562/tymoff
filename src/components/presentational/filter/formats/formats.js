import React, { PureComponent } from "react";
import { indexOf, remove } from "lodash";
import "./formats.scss";

class Formats extends PureComponent {
  onFilterClick = formatId => {
    const { setFilter, filter } = this.props;
    const { formatsList } = filter;
    if (indexOf(formatsList, formatId) === -1) {
      formatsList.push(formatId);
    } else {
      remove(formatsList, el => formatId === el);
    }
    const formats = [...formatsList];
    setFilter({ ...filter, formatsList: formats });
  };
  render() {
    const { formats, selectedFormats } = this.props;
    return (
      <div className="cat-links">
        {formats.map((format, index) => (
          <button style={{ backgroundColor: indexOf(selectedFormats, format.id) !== -1 ? "var(--menu-btn-bg-active)" : "transparent" }} key={format.id || index} onClick={() => this.onFilterClick(format.id)}>
            {format.name}
          </button>
        ))}
      </div>
    );
  }
}
export default Formats;
