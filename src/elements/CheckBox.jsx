import React from 'react'
import { CheckBox as RNECheckBox  } from 'react-native-elements'
import { COLORS } from './styles'
// https://react-native-elements.github.io/react-native-elements/docs/checkbox.html

function CheckBox (props) {
  return <RNECheckBox {...props} />
}

CheckBox.defaultProps = {
  // iconType: {},
  // Component: {},
  checked: true,
  size: 24,
  // iconRight: false,
  // right: false,
  // center: false,
  title: 'checkbox title',
  // titleProps: {},
  // containerStyle: {},
  // textStyle: {},
  // onLongPress: {},
  // onLongIconPress: {},
  // onPress: {},
  // onIconPress: {},
  checkedIcon: 'check-square-o', // fa
  uncheckedIcon: 'square-o',
  checkedColor: COLORS.colorprimary700,
  uncheckedColor: COLORS.colorprimary600,
  checkedTitle: 'checked title',
  // fontFamily: '',
}

export default CheckBox
