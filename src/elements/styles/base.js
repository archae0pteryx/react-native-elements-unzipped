import {
  COLORS
} from './themeColors'

export const BASE_SIZES = {
  text: {
    large: 30,
    medium: 20,
    small: 10
  },
  padding: {
    less: 5,
    default: 10,
    more: 15
  },
  margin: {
    less: 5,
    default: 10,
    more: 15
  }
}

export const BASE_STYLES = {
  view: {
    centered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.colorprimary200
    },
    margined: {
      margin: BASE_SIZES.margin.default
    }
  },
}

