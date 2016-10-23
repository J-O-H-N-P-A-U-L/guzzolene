import React from 'react'
import Helmet from "react-helmet"
import { prefixLink } from 'gatsby-helpers'
import { GoogleFont, TypographyStyle } from 'react-typography'
import typography from './utils/typography'

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
  displayName: 'HTML',
  propTypes: {
    body: React.PropTypes.string,
  },
  render () {
    const { body } = this.props
    const head = Helmet.rewind();

    let css
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
          {css}
        </head>
        <body className="landing-page">
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
          <link id="snipcart-theme" type="text/css" href="https://cdn.snipcart.com/themes/base/snipcart.css" rel="stylesheet" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
          <script type="text/javascript" id="snipcart" data-api-key="NTBlMGY0N2QtYjYwMy00NDYyLTlmNGUtYTcwODc1MDUyYzkwNjM2MTI2NDAzMzQ1NDQ0NDAy"></script>
        </body>
      </html>
    )
  },
})
