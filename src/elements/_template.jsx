import React from 'react'
import { Image as RNImage  } from 'react-native-elements'

function Image (props) {
  return <RNImage {...props} />
}

Image.defaultProps = {}

export default Image
