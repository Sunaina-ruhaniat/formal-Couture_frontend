import theme from "config/theme";

const getStyles = () => ({
  menu: {
    marginTop: "0.8rem",
    fontSize: "14px",
    boxShadow: "none",
    padding: "0.8rem 1rem",
    fontFamily: "Lato",
    fontWeight: "400",
    color: theme.palette.primary.dark,
  },
  inputLabel: {
    fontFamily: "Roboto",
    fontWeight: "400",
    "&.Mui-focused": {
      color: "#788CA5E5",
      fontSize: "12px",
      top: 1,
      left: 1,
    },
  },
});

export default getStyles;
