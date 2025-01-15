import theme from "config/theme";

export const getStyles = () => ({
  width: "100%",
  heigth: "34px",
  boxShadow: "none",
  borderRadius: "8px",
  backgroundColor: "#554FEB",
  transition: "0.4s",
  dataPickerRoot: {
    "& .MuiInputLabel-root": {
      fontSize: "16px",
      color: "#2E2E30",
      "&.Mui-focused": {
        fontSize: "12px",
        color: "#788CA5E5",
      },
    },
  },
  dataPickerSelectedData: {
    "& .MuiPickersDay-root": {
      "&.Mui-selected": {
        backgroundColor: theme.palette.primary.main + "!important",
        color: theme.palette.secondary.white + "!important",
      },
    },
    "& .PrivatePickersYear-yearButton": {
      "&.Mui-selected": {
        backgroundColor: theme.palette.primary.main + "!important",
        color: theme.palette.secondary.white + "!important",
      },
    },
  },
});
