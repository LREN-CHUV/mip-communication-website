import React from 'react'
import Slider from '../components/Slider'
import TwitterTimeline from '../components/TwitterTimeline'
import './news-and-events.css'

const fakeNews = [
  {
    image: 'http://lorempixel.com/1000/500/business/?dsak3',
    title: 'STOA Exhibition "A new era of big Neuroscience"',
    publishDate: 'Nov 12, 2016',
    abstract: 'More than 30\'000 attendees from 80 countries covened in San Diego '
    + 'for the world\'s largest marketplace of ideas tools for global neuroscience.'
    + 'Abstracts from the annual meeting are available online',
    isHeadline: true,
  },
  {
    image: 'http://lorempixel.com/1000/500/business/?da34k',
    title: 'STOA Exhibition "A new era of big Neuroscience" 2',
    publishDate: 'Nov 12, 2016',
    abstract: 'More than 30\'000 attendees from 80 countries covened in San Diego '
    + 'for the world\'s largest marketplace of ideas tools for global neuroscience.'
    + 'Abstracts from the annual meeting are available online',
    isHeadline: true,
  },
  {
    image: 'http://lorempixel.com/1000/500/business/?ds398',
    title: 'STOA Exhibition "A new era of big Neuroscience" 3',
    publishDate: 'Nov 12, 2016',
    abstract: 'More than 30\'000 attendees from 80 countries covened in San Diego '
    + 'for the world\'s largest marketplace of ideas tools for global neuroscience.'
    + 'Abstracts from the annual meeting are available online',
    isHeadline: true,
  },
]

export default () =>
  <div>
    <h1 className="bullet bullet-outline bullet-border-red">News and events</h1>
    <div className="two columns clear">
      <div className="item much-wider">
        <Slider
          duration={5000}
          slides={
            fakeNews
            .filter(news => news.isHeadline)
            .map(news => ({
              title: news.title,
              subtitle: news.publishDate,
              content: news.abstract,
              image: news.image,
            }))
          }
        />
      </div>
      <div className="item much-narrower">
        <TwitterTimeline href="https://twitter.com/HBPmedical" />
      </div>
    </div>
  </div>
