import React from 'react'
import { Header as RNEHeader } from 'react-native-elements'
import { COLORS, BASE_SIZES } from './styles'

// https://react-native-elements.github.io/react-native-elements/docs/header.html

function Header(props) {
  return (
    <RNEHeader
      {...props}
    />
  )
}

Header.defaultProps = {
  // containerStyle: {},
  backgroundColor: COLORS.colorprimary700,
  // backgroundImage: {},
  // backgroundImageStyle: {},
  leftComponent: { icon: 'menu', color: COLORS.light },
  centerComponent: { text: 'Title', style: { color: COLORS.light, fontSize: BASE_SIZES.text.medium } },
  rightComponent: { icon: 'home', color: COLORS.light },
  // leftContainerStyle: {},
  // centerContainerStyle: {},
  // rightContainerStyle: {},
  // placement: 'center',
  // barStyle: 'default',
  // statusBarProps: {},
  // linearGradientProps: {},
  // ViewComponent:
}

export default Header
