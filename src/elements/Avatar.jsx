import React from 'react'
import { Avatar as RNEAvatar } from 'react-native-elements'

// https://react-native-elements.github.io/react-native-elements/docs/avatar.html

function Avatar(props) {
  return <RNEAvatar {...props} />
}

Avatar.defaultProps = {
  activeOpacity: 0.2,
  // avatarStyle: {},
  // containerStyle: {},
  // editButton: {
  //   name: 'mode-edit',
  //   type: 'material',
  //   color: '#fff',
  //   underlayColor: '#000',
  // },
  // icon: {},
  // iconStyle: {},
  // imageProps: {},
  // onEditPress: {},
  // onLongPress: {},
  // onPress: {},
  // overlayContainerStyle: {},
  // placeholderStyle: {},
  rounded: true,
  size: 'xlarge',
  showEditButton: false,
  source: { uri: 'https://www.placecage.com/c/300/300' },
  title: 'Avatar Title',
  // titleStyle: {},
  // renderPlaceholderContent: {},
  // Component: {},
  // ImageComponent: {}
}

export default Avatar
