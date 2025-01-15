import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

// Define Custom Icon
const CustomSortIcon = (props) => (
  <SvgIcon {...props} sx={{ height: "12px" }}>
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.87168 5.4389L2.54584 5.4389C2.14826 5.4389 1.93702 5.88647 2.20131 6.1695L4.86399 9.01947C4.90718 9.06585 4.96023 9.10298 5.01962 9.12841C5.07901 9.15384 5.1434 9.16699 5.20853 9.16699C5.27366 9.16699 5.33805 9.15384 5.39744 9.12841C5.45683 9.10298 5.50988 9.06585 5.55307 9.01947L8.21668 6.1695C8.48096 5.88647 8.26972 5.4389 7.87168 5.4389ZM5.55353 0.981174C5.51034 0.934796 5.4573 0.897665 5.3979 0.872236C5.33851 0.846806 5.27412 0.833658 5.20899 0.833658C5.14386 0.833658 5.07947 0.846806 5.02008 0.872236C4.96069 0.897665 4.90764 0.934796 4.86445 0.981174L2.20177 3.83115C1.93702 4.11374 2.14826 4.56131 2.54631 4.56131L7.87168 4.56131C8.26926 4.56131 8.4805 4.11374 8.21622 3.83071L5.55353 0.981174Z"
        fill="#172B4D"
      />
    </svg>
  </SvgIcon>
);

export default CustomSortIcon;
