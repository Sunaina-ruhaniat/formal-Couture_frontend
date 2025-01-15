import { Toaster, resolveValue, toast } from "react-hot-toast";
import { Box } from "@mui/material";
import SuccessIcon from "assets/svg/SuccessIcon";
import CrossIcon from "assets/svg/CrossIcon";
import WarningInfoIcon from "assets/svg/WarningInfoIcon";
import getStyles from "./style";

const Notification = () => {
  return (
    <Toaster position="top-right" toastOptions={{ duration: 3000 }}>
      {(t) => {
        if (
          t?.message?.props?.children?.key &&
          t?.message?.props?.children?.key === "401" &&
          localStorage.getItem("user")
        ) {
          return;
        }
        const classes = getStyles(t);
        return (
          <Box sx={classes.wrapper}>
            <Box sx={classes.content}>
              {t.type === "success" ? (
                <SuccessIcon sx={classes.icon} />
              ) : (
                <WarningInfoIcon sx={classes.icon} />
              )}
              <p>
                {t.type === "success" ? "Success alert" : "Warning alert"}
                :&nbsp;
              </p>
              <span>{resolveValue(t.message, t)}</span>
            </Box>
            <CrossIcon
              onClick={() => toast.dismiss(t.id)}
              sx={classes.crossIcon}
            />
          </Box>
        );
      }}
    </Toaster>
  );
};

export default Notification;
