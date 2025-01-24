import React from "react";
import { AppBar, Toolbar, IconButton, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import _ from "lodash";

const AdminHeader = observer(() => {
  const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn");

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        padding: "10px 40px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <Box
            component="img"
            src={"/assets/images/FC BLUE.jpg"}
            alt="Logo"
            sx={{
              height: "50px",
              width: "50px",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            flex: 1,
          }}
        >
          <Link
            to="/home"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                color: "#050D52",
                fontFamily: "Prachason neue",
              }}
            >
              FORMAL COUTURE
            </Typography>
          </Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Link to="/admin/profile">
              <IconButton>
                <img src="/assets/icons/user.png" alt="Profile" width={28} />
              </IconButton>
            </Link>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 400,
                letterSpacing: "0.10rem",
                color: "#050D52",
                fontFamily:
                  '"Proxima Nova", "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif',
              }}
            >
              Profile
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
});

export default AdminHeader;
