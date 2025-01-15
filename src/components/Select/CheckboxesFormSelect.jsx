import { Box, Select, Typography } from '@mui/material'

// import CustomCheckbox from 'components/Checkbox'

import getStyles from './styles'

const classes = getStyles()

const MenuProps = {
  PaperProps: {
    style: {
      ...classes.menu
    }
  }
}

const CheckboxesFormSelect = ({ form, field, topLabel, options }) => {
  const currentValue = Object.keys(options)
    .map(option => (form.values.category[option] ? options[option] : ''))
    .filter(item => item !== '')

  return (
    <Box>
      <Typography variant="h6">{topLabel}</Typography>
      <Select
        sx={classes.select}
        multiple
        MenuProps={MenuProps}
        renderValue={selected => selected.join(', ')}
        value={currentValue}
      >
        {Object.entries(options).map(option => (
          <Box
            key={option[0]}
            onClick={() =>
              form.setFieldValue(
                `${field.name}.${option[0]}`,
                !form.values.category[option[0]]
              )
            }
          >
            {/* <CustomCheckbox checked={form.values.category[option[0]]} /> */}
            <Typography variant="h7">{option[1]}</Typography>
          </Box>
        ))}
      </Select>
    </Box>
  )
}

export default CheckboxesFormSelect
