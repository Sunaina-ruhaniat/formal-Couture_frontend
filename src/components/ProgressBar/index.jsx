const { Box } = require("@mui/material");
const { getStyles } = require("./styles");

const ProgressBar = ({ value }) => {
  const classes = getStyles();
  const fillerRelativePercentage = (100 / value) * 100;

  return (
    <Box sx={classes.wrapper}>
      <Box className="barContainer">
        <Box className="filler" style={{ width: `${value}%` }}>
          <Box
            className="fillerBackground"
            style={{ width: `${fillerRelativePercentage}%` }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProgressBar;
