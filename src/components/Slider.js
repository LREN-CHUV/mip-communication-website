import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'
import './Slider.css'

class Slider extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentSlideIndex: 0,
    }
  }

  componentDidMount() {
    this.timer = setInterval(this.toNextSlide.bind(this), this.props.duration)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  currentSlide() {
    const { currentSlideIndex } = this.state
    return this.props.slides[currentSlideIndex]
  }

  toNextSlide() {
    this.setState((prevState, props) => {
      // If we reached to the last slide, go back to the first one
      if (prevState.currentSlideIndex === props.slides.length - 1) {
        return { currentSlideIndex: 0 }
      }
      return { currentSlideIndex: prevState.currentSlideIndex + 1 }
    })
  }

  render() {
    const currentSlide = this.currentSlide()
    return (
      <div className="slider">
        <CSSTransitionGroup
          transitionName="slide"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          <article className="slide" key={currentSlide.title}>
            <img className="slide-image" src={currentSlide.image} alt={currentSlide.title} />
            <h2 className="slide-title bullet bullet-bg-orange no-margin">{currentSlide.title}</h2>
            <div className="subtitle">{currentSlide.subtitle}</div>
            <p>{currentSlide.content}</p>
          </article>
        </CSSTransitionGroup>
      </div>
    )
  }
}

Slider.propTypes = {
  duration: PropTypes.number,
  slides: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    content: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
}

Slider.defaultProps = {
  duration: 4000,
}

export default Slider
