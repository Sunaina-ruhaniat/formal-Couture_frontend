import { useState } from "react";
import { useTheme } from "@emotion/react";
import { TextField, InputAdornment, Typography, Box } from "@mui/material";
import SearchIcon from "assets/svg/SearchIcon";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import get from "lodash/get";

import getStyles from "./styles";

export const Input = ({
  isSearch,
  isNumber,
  isPassword,
  topLabel,
  ...props
}) => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const handlePassword = () => setShowPassword(!showPassword);
  const type = () => {
    if (isPassword) {
      return showPassword ? "text" : "password";
    } else if (isNumber) {
      return "number";
    }
    return "text";
  };

  return (
    <Box>
      {topLabel && !props?.InputLabelProps?.shrink && (
        <Typography variant="h6">{topLabel}</Typography>
      )}
      <TextField
        type={type()}
        sx={{ ...props.sx }}
        label={topLabel}
        InputProps={{
          startAdornment: isSearch && (
            <InputAdornment position="start">
              <SearchIcon sx={{ width: "2rem", height: "2rem" }} />
            </InputAdornment>
          ),
          endAdornment: isPassword && (
            <InputAdornment position="end">
              {showPassword ? (
                <RemoveRedEyeOutlinedIcon
                  sx={{
                    cursor: "pointer",
                    fontSize: "20px",
                  }}
                  color={theme.palette.secondary.grey}
                  onClick={handlePassword}
                />
              ) : (
                <VisibilityOffOutlinedIcon
                  sx={{
                    cursor: "pointer",
                    fontSize: "20px",
                  }}
                  color={theme.palette.secondary.grey}
                  onClick={handlePassword}
                />
              )}
            </InputAdornment>
          ),
        }}
        {...props}
      />
    </Box>
  );
};

export const FormInput = ({ form, field, externalError = null, ...props }) => {
  const { touched, errors } = form;
  const classes = getStyles();
  const hasError =
    externalError === null
      ? Boolean(get(touched, field?.name) && get(errors, field?.name))
      : Boolean(externalError);
  const helperText = hasError ? get(errors, field?.name) : undefined;
  return (
    <Input
      sx={{ ...props.sx }}
      {...field}
      {...props}
      helperText={helperText}
      error={hasError}
      FormHelperTextProps={{ sx: classes.helperText }}
    />
  );
};
