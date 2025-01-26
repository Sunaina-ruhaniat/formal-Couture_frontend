import { Typography, Grid, Avatar } from "@mui/material";

const ProfileHeader = ({ user }) => (
  <Grid item xs={12} sm={4} container direction="column" alignItems="center">
    <Avatar
      sx={{ width: 120, height: 120, marginBottom: 2 }}
      src="https://via.placeholder.com/120"
    />
    <Typography variant="h5" color="textPrimary">
      {user.name || user.email.split("@")[0]}
    </Typography>
    <Typography variant="body2" color="textSecondary">
      {user.role}
    </Typography>
  </Grid>
);

export default ProfileHeader;
