import React, { Component } from 'react'
import Slider from '../components/Slider'
import TwitterTimeline from '../components/TwitterTimeline'
import NewsList from '../components/NewsList'
import PropTypes from "prop-types"

// const fakeNews = [
//   {
//     id: 1,
//     image: 'http://lorempixel.com/1000/500/business/?dsak3',
//     title: 'STOA Exhibition "A new era of big Neuroscience"',
//     subtitle: 'Nov 12, 2016',
//     content: 'More than 30\'000 attendees from 80 countries covened in San Diego '
//     + 'for the world\'s largest marketplace of ideas tools for global neuroscience.'
//     + 'Abstracts from the annual meeting are available online',
//     isHeadline: true,
//   },
//   {
//     id: 2,
//     image: 'http://lorempixel.com/1000/500/business/?da34k',
//     title: 'STOA Exhibition "A new era of big Neuroscience" 2',
//     subtitle: 'Nov 12, 2016',
//     content: 'More than 30\'000 attendees from 80 countries covened in San Diego '
//     + 'for the world\'s largest marketplace of ideas tools for global neuroscience.'
//     + 'Abstracts from the annual meeting are available online',
//   },
//   {
//     id: 3,
//     image: 'http://lorempixel.com/1000/500/business/?ds3918',
//     title: 'STOA Exhibition "A new era of big Neuroscience" 3',
//     subtitle: 'Nov 12, 2016',
//     content: 'More than 30\'000 attendees from 80 countries covened in San Diego '
//     + 'for the world\'s largest marketplace of ideas tools for global neuroscience.'
//     + 'Abstracts from the annual meeting are available online',
//     isHeadline: true,
//   },
//   {
//     id: 4,
//     image: 'http://lorempixel.com/1000/500/business/?da341k',
//     title: 'STOA Exhibition "A new era of big Neuroscience" 4',
//     subtitle: 'Nov 12, 2016',
//     content: 'More than 30\'000 attendees from 80 countries covened in San Diego '
//     + 'for the world\'s largest marketplace of ideas tools for global neuroscience.'
//     + 'Abstracts from the annual meeting are available online',
//   },
//   {
//     id: 4,
//     image: 'http://lorempixel.com/1000/500/business/?ds3981',
//     title: 'STOA Exhibition "A new era of big Neuroscience" 8',
//     subtitle: 'Nov 12, 2016',
//     content: 'More than 30\'000 attendees from 80 countries covened in San Diego '
//     + 'for the world\'s largest marketplace of ideas tools for global neuroscience.'
//     + 'Abstracts from the annual meeting are available online',
//     isHeadline: true,
//   },
//   {
//     id: 5,
//     image: 'http://lorempixel.com/1000/500/business/?ds3981',
//     title: 'STOA Exhibition "A new era of big Neuroscience" 8',
//     subtitle: 'Nov 12, 2016',
//     content: 'More than 30\'000 attendees from 80 countries covened in San Diego '
//     + 'for the world\'s largest marketplace of ideas tools for global neuroscience.'
//     + 'Abstracts from the annual meeting are available online',
//     isHeadline: true,
//   },
// ]
//
// export default () =>
//   <div>
//     <h1 className="bullet bullet-outline bullet-border-red">News and events</h1>
//     <div className="two columns clear">
//       <section className="item much-wider">
//         <h2 className="hidden">Top news</h2>
//         <Slider
//           duration={5000}
//           slides={fakeNews.filter(news => news.isHeadline)}
//         />
//       </section>
//       <section className="item much-narrower">
//         <h2 className="hidden">Twitter timeline</h2>
//         <TwitterTimeline href="https://twitter.com/HBPmedical" />
//       </section>
//     </div>
//     <section>
//       <h2 className="hidden">All news</h2>
//       <NewsList news={fakeNews} />
//     </section>
//   </div>


const propTypes = {
  data: PropTypes.object.isRequired,
}

class NewsAndEvents extends Component {
  render() {
    const usNewsAndEventsEdges = this.props.data.us.edges
    return (
      <div>
        <h1 className="bullet bullet-outline bullet-border-red">News and events</h1>
        <div className="two columns clear">
          <section className="item much-wider">
            <h2 className="hidden">Top news</h2>
              <Slider
                duration={5000}
                slides={usNewsAndEventsEdges.filter(news => news.node.isHeadline)}
              />
          </section>
          <section className="item much-narrower">
            <h2 className="hidden">Twitter timeline</h2>
            <TwitterTimeline href="https://twitter.com/HBPmedical" />
          </section>
        </div>
        <section>
          <h2 className="hidden">All news</h2>
          <NewsList news={usNewsAndEventsEdges} />
        </section>
      </div>
    )
  }
}

NewsAndEvents.propTypes = propTypes

export default NewsAndEvents

export const pageQuery = graphql`
  query newsAndEventsQuery {
    us: allContentfulNewsAndEvents(filter: {
      node_locale: { eq: "en-US" }
    }) {
      edges {
        node {
          id
          titile
          subtitle
          image {
            title
            resolutions {
              src
              width
              height
              srcSet
              aspectRatio
            }
            sizes(maxWidth: 960) {
              sizes
              aspectRatio
              src
              srcSet
            }
          }
          content
          fullContent {
            childMarkdownRemark {
              html
            }
          }
          isHeadline
        }
      }
    }
  }
`
