import React from 'react'
import { StyleSheet, ScrollView as RNScrollView  } from 'react-native'

export default function ScrollView (props) {
  return <RNScrollView {...props}>{props.children}</RNScrollView>
}

const styles = StyleSheet.create({})
