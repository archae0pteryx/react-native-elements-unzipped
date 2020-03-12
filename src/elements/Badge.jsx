import React from 'react'
import { Badge as RNEBadge } from 'react-native-elements'
import { COLORS, BASE_SIZES } from './styles'

// https://react-native-elements.github.io/react-native-elements/docs/badge.html

function Badge(props) {
  return <RNEBadge {...props} />
}

Badge.defaultProps = {
  badgeStyle: {
    position: 'absolute',
    width: 60,
    height: 30,
    bottom: 10,
    left: 120,
    backgroundColor: COLORS.colorwarning600,
  },
  containerStyle: {},
  // onPress: {},
  status: 'primary',
  textStyle: {
    fontSize: BASE_SIZES.text.medium,
    color: COLORS.light,
  },
  value: 'none',
  // Component: {},
}

export default Badge
