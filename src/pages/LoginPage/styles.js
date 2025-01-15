import theme from "config/theme";
import LoginImage from "assets/images/LoginImage.png";

const getStyles = () => ({
  header: {
    textAlign: "center",
    paddingBottom: "20px",
    backgroundColor: "#f7f7f7", // Light background for header
    borderBottom: "2px solid #e0e0e0", // Divider for visual separation
    padding: "30px 20px",
  },
  dialogContent: {
    padding: "20px 40px",
    backgroundColor: "#fff",
  },
  form: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formContent: {
    marginTop: "20px",
  },
  inputField: {
    marginBottom: "16px",
    borderRadius: "10px",
    backgroundColor: "#f5f5f5",
  },
  submitButton: {
    width: "100%",
    padding: "12px",
    textTransform: "none",
    fontSize: "16px",
    backgroundColor: "#1976d2", // MUI Primary Color
    color: "#fff",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "#115293",
    },
    transition: "all 0.3s ease",
  },
});

export default getStyles;
