import { isUndefined } from "lodash";

import { Box, MenuItem, Select, InputLabel, FormControl } from "@mui/material";

import getStyles from "./styles";

export const SimpleSelect = ({
  label,
  placeholder,
  value,
  onChange,
  options,
  disabled,
  ...props
}) => {
  const classes = getStyles();

  const MenuProps = {
    PaperProps: {
      style: {
        ...classes.menu,
      },
    },
  };
  return (
    <Box sx={props.sx}>
      <FormControl fullWidth disabled={disabled} size={props.size}>
        <InputLabel sx={classes.inputLabel} id={props.name}>
          {label}
        </InputLabel>
        <Select
          labelId={props.name}
          id={props.name}
          label={label}
          value={value}
          onChange={onChange}
          MenuProps={MenuProps}
          inputProps={{
            "aria-label": placeholder || "Select",
          }}
          {...props}
          defaultValue={""}
        >
          {placeholder && (
            <MenuItem disabled value={"0"}>
              {placeholder}
            </MenuItem>
          )}
          {options?.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export const FormSelect = ({
  form,
  field,
  onChange,
  disabled = false,
  options,
  takeFieldOption,
  ...props
}) => {
  if (!field?.value && props?.defaultVal) {
    form && form.setFieldValue(field?.name, props?.defaultVal);
  }

  if (
    isUndefined(field?.value?.value) &&
    field?.value?.name &&
    props?.currentAudio
  ) {
    form && form.setFieldValue(field?.name, props?.currentAudio);
  }

  const changeHandler = (event) => {
    const selectedOption = options?.find(
      (option) => option.value === event.target.value
    );
    takeFieldOption && takeFieldOption(selectedOption, field.name);
    if (onChange) onChange(selectedOption, field.name, form);
    else form.setFieldValue(field.name, selectedOption);
  };

  const onBlur = () => {
    form.setFieldTouched(field.name);
  };

  return (
    <SimpleSelect
      {...props}
      {...field}
      value={field?.value?.value || ""}
      onChange={changeHandler}
      onBlur={onBlur}
      options={options}
      disabled={disabled}
    />
  );
};
