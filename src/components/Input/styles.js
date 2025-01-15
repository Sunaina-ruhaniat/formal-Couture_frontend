import theme from 'config/theme'

const getStyles = () => {
  return {
    helperText: {
      marginLeft: 0,
      fontSize: '1rem',
      color: `${theme.palette.secondary.error} !important`
    }
  }
}

export default getStyles
