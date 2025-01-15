import theme from "config/theme";

export const getStyles = () => {
  return {
    tooltipIcon: {
      color: theme.palette.main.blueGrey,
      fontSize: "20px",
      transition: "0.4s",
      cursor: "pointer",
      "&:hover": {
        color: theme.palette.main.purple,
      },
    },
  };
};
