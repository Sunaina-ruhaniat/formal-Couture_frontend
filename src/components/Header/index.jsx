import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Box,
  Typography,
  Badge,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import cartStore from "stores/cartStore"; // Import the cartStore
import { observer } from "mobx-react";

const Header = observer(() => {
  const [cartItemCount, setCartItemCount] = useState(0); // Default cart item count is 0
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  // Update cart item count based on cartStore when component mounts or cart changes
  useEffect(() => {
    if (cartStore?.cart?.products) {
      // Calculate the total quantity of items in the cart
      const totalItems = cartStore.cart.products.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      setCartItemCount(totalItems);
    }
  }, [cartStore?.cart?.products]); // Re-run when cart products change

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
        {/* Logo and Search Bar on the Left */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
          {/* Logo */}
          <Box
            component="img"
            src={"/assets/images/FC BLUE.jpg"}
            alt="Logo"
            sx={{
              height: "50px",
              width: "50px",
            }}
          />
          {/* Search Bar without rounded corners */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "5px 15px",
              maxWidth: "18.5625rem",
              marginTop: "15px",
              backgroundColor: "#f8f8f8",
            }}
          >
            <InputBase
              placeholder="SEARCH FOR PRODUCTS"
              sx={{
                flex: 1,
                fontSize: "13px",
                letterSpacing: "0.10rem",
                color: "black",
                fontWeight: "lighter",
                fontFamily:
                  '"Proxima Nova", "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif',
              }}
            />
            <SearchIcon sx={{ color: "black", fontSize: "x-large" }} />
          </Box>
        </Box>

        {/* Centered Content (FORMAL COUTURE Text) */}
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

        {/* Icons Section (Right side - Sign in, Wishlist, Shopping Bag) */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {isLoggedIn ? (
            <Box sx={{ textAlign: "center" }}>
              <Link to="/profile">
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
          ) : (
            <Box sx={{ textAlign: "center" }}>
              <Link to="/sign-up">
                <IconButton>
                  <img src="/assets/icons/user.png" alt="User" width={28} />
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
                Sign in
              </Typography>
            </Box>
          )}

          {/* Wishlist Icon */}
          <Box sx={{ textAlign: "center" }}>
            <Link to="/wishlist">
              <IconButton>
                <img src="/assets/icons/love.png" alt="Wishlist" width={28} />
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
              Wishlist
            </Typography>
          </Box>

          {/* Shopping Bag Icon */}
          <Box sx={{ textAlign: "center" }}>
            <Link to="/shoppingBag">
              <IconButton>
                <Badge badgeContent={cartItemCount} color="primary">
                  <img
                    src="/assets/icons/shopping-bag.png"
                    alt="Shopping Bag"
                    width={28}
                  />
                </Badge>
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
              Shopping bag
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
});

export default Header;
