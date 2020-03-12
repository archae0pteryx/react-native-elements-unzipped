import React from 'react'
import { Button as RNEButton } from 'react-native-elements'
import { BASE_SIZES, COLORS } from './styles'
// https://react-native-elements.github.io/react-native-elements/docs/button.html

function Button(props) {
  return <RNEButton {...props} />
}

Button.defaultProps = {
  buttonStyle: {
    backgroundColor: COLORS.colorprimary600
  },
  containerStyle: {},
  disabled: false,
  // disabledStyle: {},
  // disabledTitleStyle: {},
  // icon: {},
  // iconContainerStyle: {},
  // iconRight: {},
  // linearGradientProps: {},
  loading: false,
  // loadingProps: {},
  // loadingStyle: {},
  // onPress: {},
  raised: true,
  title: 'Button Title',
  // titleProps: {},
  titleStyle: {
    color: COLORS.light
  },
  type: 'solid',
  // TouchableComponent: {},
  // ViewComponent: {},
}

export default Button
