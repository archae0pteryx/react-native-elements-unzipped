import data  from './themes/bluish.json'
const convertedTheme = {}

Object.entries(data).map(([k,v]) => {
  const newKey = k.split('-').join('')
  convertedTheme[newKey] = v
})

export const COLORS = {
  light: 'white',
  dark: 'black',
  opaque: 'rgba(52, 52, 52, 0.7)',
  moreOpaque: 'rgba(52, 52, 52, 0.4)',
  whiteOpaque: 'rgba(255, 255, 255, 0.2)',
  ...convertedTheme
}
