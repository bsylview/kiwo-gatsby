import React, { Component } from "react";
import Media from "react-md/lib/Media";
import "./ImagePreview.scss";

class ImagePreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: true
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    if (window.innerWidth >= 640) {
      this.setState({ mobile: false });
    } else {
      this.setState({ mobile: true });
    }
  }
  
  render() {
    const { image } = this.props;
    const { mobile } = this.state;
    /* eslint no-undef: "off" */
    const cover = image.url.startsWith("/")
      ? __PATH_PREFIX__ + image.url
      : image.url;
    const coverHeight = mobile ? 162 : 50;
    return (
      <Media
        style={{
              backgroundImage: `url(${cover})`,
              height: `${coverHeight}px`
            }}
        className="post-preview-cover"
      />
    );
  }
}

export default ImagePreview;
