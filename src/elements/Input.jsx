import React from 'react'
import { Input as RNEInput } from 'react-native-elements'
import { BASE_SIZES, COLORS } from './styles'
// https://react-native-elements.github.io/react-native-elements/docs/input.html

function Input(props) {
  return <RNEInput {...props} />
}

Input.defaultProps = {
  containerStyle: {},
  disabled: false,
  // disabledInputStyle: {},
  inputContainerStyle: {
    borderBottomWidth: 0,
    backgroundColor: COLORS.colorprimarytransparent200,
  },
  // errorMessage: 'An error occured',
  // errorStyle: {},
  // errorProps: {},
  // inputComponent: {},
  inputStyle: {
    padding: 10,
    color: COLORS.colorprimary600
  },
  label: 'Ima Label',
  labelStyle: {
    color: COLORS.colorprimary900,
    fontSize: BASE_SIZES.text.small,
  },
  // labelProps: {},
  // leftIcon: {},
  // leftIconContainerStyle: {},
  // rightIcon: {},
  // rightIconContainerStyle: {},
  value: 'i am a value',
  keyboardType: 'default',
  // onChangeText: () => {},
}

export default Input
