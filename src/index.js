import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import theme from "config/theme";
import CssBaseline from "@mui/material/CssBaseline";
import App from "core";
// import "./index.css";

const theme = createTheme({
  typography: {
    fontFamily: "'Roboto', sans-serif", // Replace 'Roboto' with the desired font
  },
  palette: {
    mode: "light",
    background: {
      default: "#ffffff",
      paper: "#f9f9f9",
    },
    text: {
      primary: "#000000",
      secondary: "#555555",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <ThemeProvider theme={theme}> */}
    <CssBaseline />
    <App />
    {/* </ThemeProvider> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
