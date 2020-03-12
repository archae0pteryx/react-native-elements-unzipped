import React from 'react'
import { Image as RNImage  } from 'react-native-elements'
import ActivityIndicator from './ActivityIndicator'

// https://react-native-elements.github.io/react-native-elements/docs/image.html

function Image (props) {
  return <RNImage {...props} />
}

Image.defaultProps = {
  source: { uri: 'https://www.placecage.com/c/300/300' },
  style: {
    // width: 400,
    height: 400
  },
  // containerStyle: {},
  // placeholderStyle: {},
  PlaceholderContent: <ActivityIndicator />,
  // ImageComponent: {},
}

export default Image
