import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './episode-preview.module.css'

export default ({ episode }) => (
  <div className={styles.preview}>
    <Img alt="" fluid={episode.image.fluid} />
    <h3 className={styles.previewTitle}>
      <Link to={`/podcast/${episode.slug}`}>{episode.title}</Link>
    </h3>
    <small>{episode.publishDate}</small>
    {/*<p
      dangerouslySetInnerHTML={{
        __html: episode.description.childMarkdownRemark.html,
      }}
    />*/}
  </div>
)
