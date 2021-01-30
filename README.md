# Lähetyksenseuranta Podcasst static website

[![Netlify Status](https://api.netlify.com/api/v1/badges/b0130db0-a292-43e3-ae04-ec217bb64598/deploy-status)](https://app.netlify.com/sites/lahetyksenseuranta/deploys)

A [Gatsby](http://gatsbyjs.com/) site powered by [Contentful](https://www.contentful.com).
## Features

- Simple content model and structure. Easy to adjust to your needs. This is the advantage that Contentful provides.
- Use the [synchronization feature](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/synchronization) of our [Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/).
- Responsive/adaptive images via [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/) and our [Images API](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/synchronization/initial-synchronization-of-entries-of-a-specific-content-type).
### Get the source code and install dependencies.

```
$ git clone git@github.com:saarnilauri/lahetyksenseuranta.git
$ npm install
```
## Crucial Commands

### `npm run dev`

Run the project locally with live reload in development mode.

### `npm run build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

### `npm run serve`

Spin up a production-ready server with your site. Don't forget to build your pages beforehand.

## Deployment

See the [official Contentful getting started guide](https://www.contentful.com/developers/docs/tutorials/general/get-started/).

## Contribution

Feel free to open pull requests to fix bugs. If you want to add features, please have a look at the [original version](https://github.com/contentful-userland/gatsby-contentful-starter). It is always open to contributions and pull requests.

You can learn more about how Contentful userland is organized by visiting [our about repository](https://github.com/contentful-userland/about).
