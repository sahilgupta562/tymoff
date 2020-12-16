import React, { PureComponent, Fragment } from "react";
import { indexOf } from "lodash";
import "./genre-selector.scss";
import footerLine from "../../../assets/images/pbar3.png";

export default class GenreSelector extends PureComponent {
  onGenreChange = id => {
    const { setUploadGenre } = this.props;
    setUploadGenre(id);
  };

  uploadContent = () => {
    const { publishContent, resetAddMoreContent } = this.props;
    resetAddMoreContent();
    publishContent();
  };

  addMoreContent = () => {
    const { addMoreContent } = this.props;
    addMoreContent();
  };

  setGenreLanguage = () => {};

  render() {
    const { genres, selectedGenres, error, isLoading, searchGenre, setSearchGenre } = this.props;
    return (
      <div className="modalContent">
        <div className="modalHeader">
          <h3 id="transition-modal-title" className="modalTitle">
            Select Genres
          </h3>
        </div>
        <div className="modalBody">
          <div className="search-language">
            <input type="text" placeholder="Search" value={searchGenre} onChange={e => setSearchGenre(e.target.value)} />
          </div>
          <div className="language-container c-height">
            {!!!genres.length && (
              <div className="no-content">
                <p>Entered genre is not in the list. Please select from the available option.</p>
              </div>
            )}
            {genres.map((genre, index) => (
              <Fragment key={`${index}_genre`}>
                <input type="checkbox" name="genre_check" checked={indexOf(selectedGenres, genre.id) !== -1} onChange={() => this.onGenreChange(genre.id)} id={`${index}_genreInput`} />
                <label className="language-label col " htmlFor={`${index}_genreInput`}>
                  {genre.name}
                </label>
              </Fragment>
            ))}
          </div>
        </div>
        <div className="modalFooter">
          <div className="w-50">
            <button className="btn submit form-control" disabled={isLoading} onClick={this.uploadContent}>
              Publish
            </button>
          </div>
          <div className="w-50 mobile-hidden">
            <button className="btn submit form-control b-grey" onClick={this.addMoreContent}>
              Add More Content
            </button>
          </div>
          <span className="error">{error}</span>
          <div className="pbar">
            <img src={footerLine} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
