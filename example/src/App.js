import React, { Component } from 'react'

import ReactMedium from 'react-medium-zoom'

export default class App extends Component {
  render () {
    return (
      <div>
        <ReactMedium style={{ width: '200px' }} src='https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png' />
        <ReactMedium style={{ width: '200px' }} src='https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png' />
        <ReactMedium style={{ width: '200px' }} src='https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png' />
        <ReactMedium style={{ width: '200px' }} src='https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png' />
        <ReactMedium style={{ width: '200px' }} src='https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png' />
      </div>
    )
  }
}
