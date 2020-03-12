import React from 'react'
import { Divider as RNEDivider } from 'react-native-elements'
import { COLORS } from './styles'

function Divider(props) {
  return <RNEDivider {...props} />
}

Divider.defaultProps = {
  style: {
    height: 2,
    backgroundColor: COLORS.colorprimary700
  }
}

export default Divider
