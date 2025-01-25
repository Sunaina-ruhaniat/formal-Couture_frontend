import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Rating,
  Grid,
  Select,
  MenuItem,
  Pagination,
  Box,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TextFieldstyle } from "components/Theme";

const theme = createTheme({
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

const reviews = [
  {
    rating: 5,
    size: "XS",
    purchased: "WEB",
    location: "Maidstone",
    date: "22 December 2024",
    comment:
      "Very comfortable. It is quite thin so not a dress for cold weather! Lovely green colour have had lots of compliments. Have worn it with black tights and boots.",
  },
  {
    rating: 5,
    size: "M",
    purchased: "WEB",
    location: "Dunbar",
    date: "21 December 2024",
    comment: "",
  },
  {
    rating: 3,
    size: "S",
    purchased: "WEB",
    location: "Honiton",
    date: "20 December 2024",
    comment:
      "The dress is a lovely colour. Unfortunately it has very little shape and was not flattering. The finish was disappointing, the stitching by the pockets was very 'lumpy', the pockets are a prominent feature on the front of the dress ... Item returned",
  },
  {
    rating: 5,
    size: "M",
    purchased: "WEB",
    location: "Aylesbury",
    date: "20 December 2024",
    comment:
      "Very smart and comfortable dress. The test however, is always how it looks after it's been washed and I've not washed it yet.",
  },
  {
    rating: 4,
    size: "L",
    purchased: "STORE",
    location: "London",
    date: "19 December 2024",
    comment: "Good fit and fabric, but slightly overpriced.",
  },
];

const ReviewPage = () => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("mostRecent");

  const reviewsPerPage = 4;
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sort === "highestRating") return b.rating - a.rating;
    if (sort === "lowestRating") return a.rating - b.rating;
    return new Date(b.date) - new Date(a.date);
  });

  const displayedReviews = sortedReviews.slice(
    (page - 1) * reviewsPerPage,
    page * reviewsPerPage
  );

  return (
    <Box sx={{ p: 4, bgcolor: "background.default", color: "text.primary" }}>
      <Typography
        variant="h5"
        sx={{ mb: 2, fontWeight: "bold", color: "#000000" }}
      >
        REVIEWS
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {`${reviews.length} REVIEWS`}
      </Typography>
      <Select
        value={sort}
        onChange={handleSortChange}
        sx={{
          mb: 5,
          width: "10%",
          height: "50px",
          borderRadius: 0,
          ...TextFieldstyle,
        }}
      >
        <MenuItem value="mostRecent">Most Recent</MenuItem>
        <MenuItem value="highestRating">Highest Rating</MenuItem>
        <MenuItem value="lowestRating">Lowest Rating</MenuItem>
      </Select>

      <Grid container spacing={2}>
        {displayedReviews.map((review, index) => (
          <Grid item xs={12} key={index}>
            <Card
              // variant="outlined"
              sx={{
                mb: 2,
                bgcolor: "background.paper",
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Rating
                    value={review.rating}
                    readOnly
                    sx={{ mr: 2, color: "#000000" }}
                  />
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    {review.date}
                  </Typography>
                </Box>
                {review.comment && (
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {review.comment}
                  </Typography>
                )}
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  SIZE: {review.size} | PURCHASED: {review.purchased} |
                  LOCATION: {review.location}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Pagination
        count={Math.ceil(reviews.length / reviewsPerPage)}
        page={page}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        sx={{ mt: 4, color: "text.primary" }}
      />
    </Box>
  );
};

export default ReviewPage;
