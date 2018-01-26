import React, { Component } from 'react'
import NewsList from '../components/NewsList'
import PropTypes from "prop-types"

// This is also known as the "Landing page". It is called "Index.js" to fit Gatsby's convention

const mockNews = [
  {
    id: 1,
    title: 'Announcing SP8 Workshop SGA2 "Diseases cluster HBP Platform Development"',
    subtitle: 'Jul. 2, 2017',
    image: 'https://static.pexels.com/photos/567633/pexels-photo-567633.jpeg',
    content:
      "the MIP is excited to announce the subproject's upcoming Workshop that will take" +
      'place in Málaga, Spain on February 20th, 2017. The event will focus on sharing' +
      'knowledge about diseases cluster management.',
  },
  {
    id: 2,
    title: 'Announcing SP8 Workshop SGA2 "Diseases cluster HBP Platform Development"',
    subtitle: 'Jul. 2, 2017',
    image: 'https://static.pexels.com/photos/567633/pexels-photo-567633.jpeg',
    content:
      "the MIP is excited to announce the subproject's upcoming Workshop that will take" +
      'place in Málaga, Spain on February 20th, 2017. The event will focus on sharing' +
      'knowledge about diseases cluster management.',
  },
  {
    id: 3,
    title: 'Announcing SP8 Workshop SGA2 "Diseases cluster HBP Platform Development"',
    subtitle: 'Jul. 2, 2017',
    image: 'https://static.pexels.com/photos/567633/pexels-photo-567633.jpeg',
    content:
      "the MIP is excited to announce the subproject's upcoming Workshop that will take" +
      'place in Málaga, Spain on February 20th, 2017. The event will focus on sharing' +
      'knowledge about diseases cluster management.',
  },
]

const propTypes = {
  data: PropTypes.object.isRequired,
}

const News = ({data}) => (
  <div>
    Test {data.titile}
  </div>
)


// const newsOnMain = this.props.data.allContentfulNewsOnMain.edges
// console.log(newsOnMain)

class IndexPage extends Component {
  render() {
    const usProductEdges = this.props.data.us.edges
    return (
      <div>
        <h1 className="hidden">Home</h1>
        <section className="centered">
          <h2 className="large">Our mission</h2>
          <p className="medium">
            The <strong>Medical Informatics Platform</strong> is a Global Open-Source Platform allowing
            hospitals and research centers worldwide to share medical data. It enableds online users to
            access efficiently, accurate and relevant information on brain related diseases, strictly
            preserving patients&#39; confidentiality
          </p>
        </section>
        <section className="centered">
          <h2 className="large">Our vision</h2>
          <p className="medium">
            The Medical Informatics Platform breaks down the traditional barriers between patient&#39;s
            care, brain science research and clinical research to accelerate the identification of brain
            diseases and the most effective treatments
          </p>
        </section>
        <section>
          <h2 className="bullet bullet-outline bullet-border-red">Latest news</h2>
          {/*{usProductEdges.map(({ node }, i) => (*/}
            {/*<News data={node} key={node.id} />*/}
            {/*// <Product node={node} key={node.id} />*/}
          {/*))}*/}
          <NewsList news={usProductEdges} />
          {/*<NewsList news={mockNews} />*/}
        </section>
      </div>
    )
  }
}

IndexPage.propTypes = propTypes

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    us: allContentfulNewsOnMain(filter: {
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
            }
          }
          content
          fullContent {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

// export default () => (
//   <div>
//     <h1 className="hidden">Home</h1>
//     <section className="centered">
//       <h2 className="large">Our mission</h2>
//       <p className="medium">
//         The <strong>Medical Informatics Platform</strong> is a Global Open-Source Platform allowing
//         hospitals and research centers worldwide to share medical data. It enableds online users to
//         access efficiently, accurate and relevant information on brain related diseases, strictly
//         preserving patients&#39; confidentiality
//       </p>
//     </section>
//     <section className="centered">
//       <h2 className="large">Our vision</h2>
//       <p className="medium">
//         The Medical Informatics Platform breaks down the traditional barriers between patient&#39;s
//         care, brain science research and clinical research to accelerate the identification of brain
//         diseases and the most effective treatments
//       </p>
//     </section>
//     <section>
//       <h2 className="bullet bullet-outline bullet-border-red">Latest news</h2>
//       <NewsList news={mockNews} />
//     </section>
//   </div>
// )
