import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
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
import { TextFieldstyle } from "components/Theme";
import ReviewStore from "stores/reviewStore";
import { useParams } from "react-router-dom";
import { toJS } from "mobx";

const ReviewPage = observer(() => {
  const { productId } = useParams();
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("mostRecent");

  const reviewsPerPage = 4;
  useEffect(() => {
    ReviewStore.getReviews(productId, page, reviewsPerPage);
  }, [page, productId]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const sortedReviews = [...toJS(ReviewStore.reviews)].sort((a, b) => {
    if (sort === "highestRating") return b.rating - a.rating;
    if (sort === "lowestRating") return a.rating - b.rating;
    return new Date(b.date) - new Date(a.date);
  });

  const displayedReviews = sortedReviews.slice(
    (page - 1) * reviewsPerPage,
    page * reviewsPerPage
  );

  return (
    <Box
      sx={{
        p: 4,
        bgcolor: "background.default",
        color: "text.primary",
        marginTop: 4,
      }}
    >
      <Typography variant="h6" sx={{ mb: 2, mt: 16, letterSpacing: 2 }}>
        REVIEWS
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {`${ReviewStore.reviews.length} REVIEWS`}
      </Typography>
      <Select
        value={sort}
        onChange={handleSortChange}
        sx={{
          mb: 5,
          width: "20%",
          height: "40px",
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
            <Card sx={{ mb: 2, bgcolor: "background.paper" }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Rating
                    value={review.rating}
                    readOnly
                    sx={{ mr: 2, color: "#000000" }}
                  />
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    {new Date(review.createdAt).toLocaleDateString()}{" "}
                  </Typography>
                </Box>
                {review.comment && (
                  <Typography variant="body2" sx={{ mb: 0 }}>
                    {review.comment}
                  </Typography>
                )}
                {/* <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  SIZE: {review.size} | PURCHASED: {review.purchased} |
                  LOCATION: {review.location}
                </Typography> */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Pagination
        count={Math.ceil(ReviewStore.reviews.length / reviewsPerPage)}
        page={page}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        sx={{ mt: 4, color: "text.primary" }}
      />
    </Box>
  );
});

export default ReviewPage;
