import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import heroStyles from '../components/hero.module.css'

class EpisodeTemplate extends React.Component {
  render() {
    const episode = get(this.props, 'data.contentfulEpisode')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={`${episode.title} | ${siteTitle}`} />
          <div className={heroStyles.hero}>
            <Img
              className={heroStyles.heroImage}
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
              {episode.published}
            </p>
            {/*<div
              dangerouslySetInnerHTML={{
                __html: episode.body.childMarkdownRemark.html,
              }}
            />*/}
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
        json
      }
    }
  }
`
