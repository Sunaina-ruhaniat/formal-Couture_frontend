import React, { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Rating,
} from "@mui/material";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState("Details");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Details":
        return (
          <>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Purse, keys, lipstick. Check. The perennial party bag for this
              season and next, Kamala's all-over gems catch the light
              beautifully.
            </Typography>
            <List sx={{ mb: 2, pl: 2 }}>
              <ListItem disablePadding>
                <ListItemText primary="Gem-embellished" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Part of the Limited Edition collection" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Slouchy profile" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Magnetic closure" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Satin lining" />
              </ListItem>
            </List>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Dimension: Width 20cm, Depth 14cm, Height 15cm, Handle Drop 12cm
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Model is 175cm/5'9" and is wearing a size S
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Product Code: 0224-1346-020000
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Rating value={5} readOnly />
              <Typography variant="body2" sx={{ ml: 1 }}>
                (1)
              </Typography>
            </Box>
          </>
        );
      case "Fabric":
        return (
          <Typography variant="body1">
            This bag is crafted from a premium satin blend with gem
            embellishments. Soft to the touch and durable, it’s designed to
            maintain its beauty over time.
          </Typography>
        );
      case "Delivery":
        return (
          <Typography variant="body1">
            Standard delivery takes 3-5 business days. Expedited options are
            available at checkout. Free returns within 30 days for unused items.
          </Typography>
        );
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "auto",
        padding: 3,
        fontFamily: "Roboto, sans-serif",
      }}
    >
      {/* Header Tabs */}
      <Box
        sx={{ display: "flex", justifyContent: "flex-start", gap: 4, mb: 2 }}
      >
        {["Details", "Fabric", "Delivery"].map((tab) => (
          <Typography
            key={tab}
            variant="body1"
            onClick={() => handleTabClick(tab)}
            sx={{
              fontWeight: activeTab === tab ? "bold" : "normal",
              cursor: "pointer",
              color: activeTab === tab ? "black" : "gray",
            }}
          >
            {tab.toUpperCase()}
          </Typography>
        ))}
      </Box>
      <Divider sx={{ mb: 2 }} />

      {/* Tab Content */}
      {renderTabContent()}
    </Box>
  );
};

export default ProductDetails;
