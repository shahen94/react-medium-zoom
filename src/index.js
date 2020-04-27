import React, { Component } from 'react'
import PropTypes from 'prop-types'
import mediumZoom from 'medium-zoom';

class ReactMediumZoom extends Component {
  static propTypes = {
    text: PropTypes.string,
    onOpen: PropTypes.func,
    onClosed: PropTypes.func
  }

  imgRef = React.createRef();
  zoom = null;

  componentDidMount() {
    this.zoom = mediumZoom(this.imgRef.current)
    this.zoom.on('open', this.props.onOpen)
    this.zoom.on('closed', this.props.onClosed)
  }

  open = () =>
    this.zoom.open()

  render() {
    const { ...imgProps } = this.props

    return (
      <img
        ref={this.imgRef}
        {...imgProps}
      />
    )
  }
}

export default ReactMediumZoom
