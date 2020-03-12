import React from 'react'
import { Icon as RNIcon  } from 'react-native-elements'
import { COLORS } from './styles'

// https://react-native-elements.github.io/react-native-elements/docs/icon.html

function Icon (props) {
  return <RNIcon {...props} />
}

Icon.defaultProps = {
  name: 'airplanemode-active',
  type: 'material',
  size: 30,
  color: COLORS.colorprimary700,
  // iconStyle: {},
  // Component: {},
  disabled: false,
  // disabledStyle: {},
  // onPress: {},
  // onLongPress: {},
  // underlayColor: {},
  reverse: false,
  raised: true,
  // containerStyle: {},
  // reverseColor: '',
}

export default Icon
