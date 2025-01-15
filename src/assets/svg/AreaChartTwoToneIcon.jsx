import { SvgIcon } from "@mui/material";

const AreaChartTwoToneIcon = ({ sx = {}, ...props }) => {
  return (
    <SvgIcon
      sx={{ fill: "none !important", ...sx }}
      viewBox="0 0 18 17"
      {...props}
    >
      <path
        opacity="0.3"
        d="M16 13.9499L9 8.49988L5 13.9999L2 11.5999V7.99988L4.44 9.82988L9.4 2.87988L13.3 5.99988H16V13.9499Z"
        fill="#554FEB"
      />
      <path
        d="M14 4L9 0L4 7L0 4V17H18V4H14ZM16 13.95L9 8.5L5 14L2 11.6V8L4.44 9.83L9.4 2.88L13.3 6H16V13.95Z"
        fill="#554FEB"
      />
    </SvgIcon>
  );
};

export default AreaChartTwoToneIcon;
