import React from 'react'
import PropTypes from 'prop-types'

class TwitterTimeline extends React.Component {
  componentDidMount() {
    /* global document */
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.charSet = 'utf-8';
    script.async = true;

    document.body.appendChild(script);
  }
  render() {
    return (
      <a className="twitter-timeline" href={this.props.href} data-height="600">
        Tweets by HBPmedical
      </a>
    )
  }
}

TwitterTimeline.propTypes = {
  href: PropTypes.string.isRequired,
}

export default TwitterTimeline

