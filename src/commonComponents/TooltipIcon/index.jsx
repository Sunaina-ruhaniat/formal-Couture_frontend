import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { getStyles } from "./styles";

const TooltipIcon = () => {
  const classes = getStyles();

  return <InfoOutlinedIcon sx={classes.tooltipIcon} />;
};

export default TooltipIcon;
