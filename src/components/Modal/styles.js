import theme from "config/theme";

const getStyles = () => {
  return {
    xs: {
      width: "45rem",
      minHeight: "25.3rem",
      background: theme.palette.secondary.white,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      outline: "none",
      borderRadius: "0.8rem",
    },
    sm: {
      width: "50.8rem",
      minHeight: "29.9rem",
      background: theme.palette.secondary.white,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      outline: "none",
      borderRadius: "0.8rem",
    },
    md: {
      width: "50.8rem",
      minHeight: "46.4rem",
      background: theme.palette.secondary.white,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      outline: "none",
      borderRadius: "0.8rem",
    },
    lg: {},
    xl: {
      width: "95.8rem",
      maxHeight: "70.5rem",
      background: theme.palette.secondary.white,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      outline: "none",
      borderRadius: "0.8rem",
      overflow: "auto",
    },
    content: {
      display: "flex",
      flexDirection: "column",
    },
  };
};

export default getStyles;
