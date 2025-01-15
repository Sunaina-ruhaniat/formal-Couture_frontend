import { Button } from "@mui/material";
import { getButtonStyles } from "./styles";

const CustomButton = ({ variant = "contained", ...props }) => {
  const classes = getButtonStyles();
  return (
    <Button
      {...props}
      variant={variant}
      sx={{
        ...classes,
        ...props.sx,
      }}
    />
  );
};

export default CustomButton;
