import Typography from 'typography'
import twinPeaksTheme from 'typography-theme-twin-peaks'

const typography = new Typography(twinPeaksTheme)


// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
