import { SvgIcon } from "@mui/material";

const CrossIcon = ({ sx = {}, ...props }) => {
  return (
    <SvgIcon
      sx={{ fill: "none !important", ...sx }}
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        d="M15 5L5 15"
        stroke="#282A3A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 5L15 15"
        stroke="#282A3A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};

export default CrossIcon;
