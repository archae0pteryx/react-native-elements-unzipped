import React from 'react'
import { View as RNView } from 'react-native'
import { BASE_SIZES } from './styles'

function View(props) {
  return <RNView {...props} />
}

View.defaultProps = {
  style: {
    padding: BASE_SIZES.padding.default,
  },
}

export default View
