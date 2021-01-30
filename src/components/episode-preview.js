import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'


export default ({ episode }) => (
  <div className="preview">
    <Img alt="" fluid={episode.image.fluid} />
    <h3 className="previewTitle">
      <Link to={`/podcast/${episode.slug}`}>{episode.title}</Link>
    </h3>
    <small>{episode.publishDate}</small>
  </div>
)
