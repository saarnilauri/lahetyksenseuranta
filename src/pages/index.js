import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import EpisodePreview from '../components/episode-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulEpisode.edges')
    
    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="section-headline">Recent episodes</h2>
            <ul className="episode-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <EpisodePreview episode={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulEpisode(sort: { fields: [published], order: DESC }) {
      edges {
        node {
          title
          slug
          published(formatString: "MMMM Do, YYYY")
          image {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            json
          }
        }
      }
    }
  }
`
