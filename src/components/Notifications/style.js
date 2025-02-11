import theme from "config/theme";

const getStyles = (t) => {
  return {
    wrapper: {
      opacity: t.visible ? 1 : 0,
      background:
        t.type === "success"
          ? theme.palette.notifications.successBackground
          : theme.palette.notifications.warningBackground,
      border: `0.1rem solid ${
        t.type === "success"
          ? theme.palette.notifications.successBorder
          : theme.palette.notifications.warningBorder
      }`,

      borderRadius: "0.4rem",
      padding: "2rem 1.6rem 2rem 2rem",
      display: "flex",
      width: "max-content",
      columnGap: "15px",
      height: "6rem",
      alignItems: "center",
    },
    content: {
      display: "flex",
      alignItems: "center",
      flex: 1,
      "& p": {
        fontWeight: 700,
      },
    },
    icon: {
      width: "2rem",
      height: "2rem",
      marginRight: "1.4rem",
    },
    crossIcon: {
      width: "2rem",
      height: "2rem",
      cursor: "pointer",
    },
  };
};

export default getStyles;
