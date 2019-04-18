# react-medium-zoom

> A React library for zooming images like Medium

[![NPM](https://img.shields.io/npm/v/react-medium-zoom.svg)](https://www.npmjs.com/package/react-medium-zoom) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-medium-zoom
```

## Usage

```jsx
import React, { Component } from 'react'

import ReactMediumImg from 'react-medium-zoom'

class App extends Component {
  render () {
    return (
      <ReactMediumImg
        src={'image'}
        onOpen={() => console.log('Image Open')}
        onClosed={() => console.log('Image closed')}
        {...allImageProps}
      />
    )
  }
}
```

## License

MIT © [shahen94](https://github.com/shahen94)
