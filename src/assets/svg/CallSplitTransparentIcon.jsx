import { SvgIcon } from "@mui/material";

const CallSplitTransparentIcon = ({ sx = {}, ...props }) => {
  return (
    <SvgIcon
      sx={{ fill: "none !important", ...sx }}
      viewBox="0 0 20 20"
      {...props}
    >
      <rect width="18" height="18" rx="2" fill="white" />
    </SvgIcon>
  );
};

export default CallSplitTransparentIcon;
