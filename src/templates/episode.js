import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
/*import { BLOCKS, MARKS } from "@contentful/rich-text-types"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
};*/

class EpisodeTemplate extends React.Component {
  render() {
    const episode = get(this.props, 'data.contentfulEpisode')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={`${episode.title} | ${siteTitle}`} />
          <div className="hero">
            <Img
              className="hero-image"
              alt={episode.title}
              fluid={episode.image.fluid}
            />
          </div>
          <div className="wrapper">
            <h1 className="section-headline">{episode.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              <strong>{episode.published}</strong>
            </p>
            <div>{documentToReactComponents(episode.description.json)}</div>
            
          </div>
        </div>
      </Layout>
    )
  }
}

export default EpisodeTemplate

export const pageQuery = graphql`
  query EpisodeBySlug($slug: String!) {
    contentfulEpisode(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do, YYYY")
      image {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      description {
        raw
      }
    }
  }
`
