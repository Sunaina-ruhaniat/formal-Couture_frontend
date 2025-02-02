import {
  AccountCircle,
  ShoppingCart,
  Favorite,
  Logout,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const SidebarNavigation = ({ onLogout }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: 350,
        marginRight: 3,
        padding: 2,
        height: "100%",
        cursor: "pointer",
      }}
    >
      <List>
        {/* My Details Section */}
        <Divider sx={{ marginBottom: 1 }} />
        <ListItem
          button
          onClick={() => {
            navigate("/profile");
          }}
          sx={{
            padding: "10px 20px",
            "&:hover": { backgroundColor: "#e3e3e3" },
          }}
        >
          <ListItemIcon>
            <AccountCircle sx={{ color: "#5F6368", fontSize: 28 }} />
          </ListItemIcon>
          <ListItemText
            primary="My Details"
            sx={{
              fontWeight: "500",
              color: "#333",
              textTransform: "uppercase",
              letterSpacing: 3,
            }}
          />
        </ListItem>
        <Divider sx={{ marginBottom: 1 }} />
        {/* Orders Section */}
        <ListItem
          button
          onClick={() => {
            navigate("/customerOrder");
          }}
          sx={{
            padding: "10px 20px",
            "&:hover": { backgroundColor: "#e3e3e3" },
          }}
        >
          <ListItemIcon>
            <ShoppingCart sx={{ color: "#5F6368", fontSize: 28 }} />
          </ListItemIcon>
          <ListItemText
            primary="Orders"
            sx={{
              fontWeight: "500",
              color: "#333",
              textTransform: "uppercase",
              letterSpacing: 3,
            }}
          />
        </ListItem>
        <Divider sx={{ marginBottom: 1 }} />
        {/* Log Out Section */}
        <ListItem
          button
          onClick={onLogout}
          sx={{
            padding: "10px 20px",
            "&:hover": { backgroundColor: "#e3e3e3" },
          }}
        >
          <ListItemIcon>
            <Logout sx={{ color: "#5F6368", fontSize: 28 }} />
          </ListItemIcon>
          <ListItemText
            primary="Log Out"
            sx={{
              fontWeight: "500",
              color: "#333",
              textTransform: "uppercase",
              letterSpacing: 3,
            }}
          />
        </ListItem>
        <Divider sx={{ marginBottom: 1 }} />
      </List>
    </Box>
  );
};

export default SidebarNavigation;
