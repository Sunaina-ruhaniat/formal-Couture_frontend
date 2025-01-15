import theme from "config/theme";

export const getButtonStyles = () => ({
  width: "100%",
  heigth: "34px",
  boxShadow: "none",
  borderRadius: "8px",
  backgroundColor: theme.palette.main.purple,
  border: `1px solid ${theme.palette.main.purple}`,
  transition: "0.5s",
  "& .MuiButton-startIcon": {
    marginRight: "5px",
  },
  "&:hover": {
    backgroundColor: "transparent",
    color: theme.palette.main.purple,
  },
});
