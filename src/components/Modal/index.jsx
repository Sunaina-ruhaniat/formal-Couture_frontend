import { Modal as MuiModal, Box } from "@mui/material";

import getStyles from "./styles";

const Modal = ({ open, size = "sm", onClose, content, modalStyles }) => {
  const classes = getStyles();
  return (
    <MuiModal open={open} onClose={onClose}>
      <Box sx={[classes[size], modalStyles]}>
        <Box sx={classes.content}>{content}</Box>
      </Box>
    </MuiModal>
  );
};

export default Modal;
