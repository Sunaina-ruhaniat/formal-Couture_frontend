import theme from "config/theme";

export const getStyles = () => {
  return {
    wrapper: {
      display: "flex",
      alignItems: "center",
      "& .barContainer": {
        flex: 1,
        height: "10px",
        background: theme.palette.button.lightGrey,
        borderRadius: "12px",
        overflow: "hidden",
      },
      "& .fillerBackground": {
        height: "inherit",
        transition: "width 2s ease-i-out",
        background: "linear-gradient(90deg, #52C3AA 10%, #F3AD6E 50%, #EA5C5C)",
      },
      "& .filler": {
        transition: "width 2s ease-i-out",
        height: "inherit",
        borderradius: "inherit",
        overflow: "hidden",
      },
    },
  };
};