import React from "react";
import Helmet from "react-helmet";
import MonthlyOffer from "../components/MonthlyOffer/MonthlyOffer";
import config from "../../data/SiteConfig";

export default class CategoryTemplate extends React.Component {
  render() {
    const category = this.props.pathContext.category;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="category-container">
        <Helmet>
          <title>{`Posts in category "${category}" | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/categories/${category}`} />
        </Helmet>
        <MonthlyOffer postEdges={postEdges} />
      </div>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
