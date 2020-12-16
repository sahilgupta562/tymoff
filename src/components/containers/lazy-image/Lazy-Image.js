import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./Lazy-Image.scss";

class LazyImage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cssClassImageLoaded: ``,
      cssClassImageLoading: ``,
      hasError: false
    };
  }

  handleImageLoad = () =>
    this.setState({
      cssClassImageLoaded: "lazyimg-fade-in",
      cssClassImageLoading: "lazyimg-fade-out"
    });

  handleImageError = () => this.setState({ hasError: true })

  render() {
    const { cssClassImageLoaded, cssClassImageLoading, hasError } = this.state;
    const { thumbnail, style, containerStyle, src, alt, fullImage, ...rest } = this.props;
    return (
      <div className="img-container" style={containerStyle}>
        {thumbnail && (
          <img
            src={thumbnail}
            alt={alt || null}
            {...rest}
            className={`lazyimg op-1 ${cssClassImageLoading}`}
            style={style}
          />
        )}
        <img
          src={hasError && fullImage ? fullImage : src}
          alt={alt || null}
          {...rest}
          onLoad={this.handleImageLoad}
          onError={this.handleImageError}
          className={`lazyimg op-0 ${cssClassImageLoaded}`}
          style={style}
          loading="lazy"
        />
      </div>
    );
  }
}

LazyImage.propTypes = {
  thumbnail: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
};

LazyImage.defaultProps = {
  alt: "lzy"
};

export default LazyImage;
