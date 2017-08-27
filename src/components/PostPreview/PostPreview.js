import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardTitle from "react-md/lib/Cards/CardTitle";
import Button from "react-md/lib/Buttons";
import Link from "gatsby-link";
import Media, { MediaOverlay } from "react-md/lib/Media";

import "./PostPreview.scss";

class PostPreview extends Component {
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
    const { postInfo } = this.props;
    const { mobile } = this.state;
    /* eslint no-undef: "off" */
    const cover = postInfo.cover.startsWith("/")
      ? __PATH_PREFIX__ + postInfo.cover
      : postInfo.cover;
    const coverHeight = mobile ? 162 : 225;
    return (
      <Card key={postInfo.path} raise className="md-grid md-cell md-cell--4">
        <Link style={{ textDecoration: "none" }} to={postInfo.path}>
          <Media
            style={{
              backgroundImage: `url(${cover})`,
              height: `${coverHeight}px`
            }}
            className="post-preview-cover"
          >
            <MediaOverlay>
              <CardTitle title={postInfo.title}>
                <Button raised secondary className="md-cell--right">
                  Read
                </Button>
              </CardTitle>
            </MediaOverlay>
          </Media>
        </Link>
      </Card>
    );
  }
}

export default PostPreview;
