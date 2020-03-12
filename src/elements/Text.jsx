import React from 'react'
import { Text as RNEText } from 'react-native-elements'
import { StyleSheet } from 'react-native'

export default function Text (props) {
return <RNEText style={styles.text} {...props}>{props.children}</RNEText>
}

const styles = StyleSheet.create({
  text: {}
})
