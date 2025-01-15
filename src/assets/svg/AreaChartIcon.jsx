import { SvgIcon } from "@mui/material";

const AreaChartIcon = ({ sx = {}, ...props }) => {
  return (
    <SvgIcon
      sx={{ fill: "none !important", ...sx }}
      viewBox="0 0 18 18"
      {...props}
    >
      <path
        d="M14 4.5L9 0.5L4 7.5L0 4.5V17.5H18V4.5H14ZM16 14.45L9 9L5 14.5L2 12.1V8.5L4.44 10.33L9.4 3.38L13.3 6.5H16V14.45Z"
        fill="white"
      />
    </SvgIcon>
  );
};

export default AreaChartIcon;
