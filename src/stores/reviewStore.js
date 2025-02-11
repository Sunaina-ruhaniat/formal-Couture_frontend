import { makeObservable, observable, action } from "mobx";
import axios from "config/axios";
import { toast } from "react-hot-toast";

class ReviewStore {
  reviews = [];
  userId = localStorage.getItem("userId") || null;
  token = localStorage.getItem("token") || null;

  constructor() {
    makeObservable(this, {
      reviews: observable,
      userId: observable,
      getReviews: action,
      addReview: action,
      updateReview: action,
      deleteReview: action,
    });

    this.reviews = [];
  }

  // Get reviews for a product
  getReviews = async (productId, page = 1, limit = 5) => {
    try {
      const response = await axios.get(
        `/review/get-reviews/${productId}?page=${page}&limit=${limit}`
      );
      if (response.status === 200) {
        this.reviews = response.data.reviews || []; // Update reviews in store
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error fetching reviews", error);
      toast.error("Failed to load reviews. Please try again.");
      this.reviews = [];
    }
  };

  // Add a review for a product
  addReview = async (productId, rating, comment, navigate) => {
    if (!this.userId || !this.token) {
      toast.error("Please log in to add a review.");
      return;
    }

    try {
      const response = await axios.post(
        "/review/add-review",
        {
          productId,
          rating,
          comment,
        },
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Review added successfully!");
        navigate("/reviews");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error adding review", error);
      toast.error("Failed to add review. Please try again.");
    }
  };

  // Update an existing review
  updateReview = async (reviewId, rating, comment) => {
    try {
      const response = await axios.put(
        `/review/update-review/${reviewId}`,
        {
          rating,
          comment,
        },
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Review updated successfully!");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error updating review", error);
      toast.error("Failed to update review. Please try again.");
    }
  };

  // Delete a review
  deleteReview = async (reviewId) => {
    try {
      const response = await axios.delete(`/review/delete-review/${reviewId}`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });

      if (response.status === 200) {
        toast.success("Review deleted successfully!");
        this.reviews = this.reviews.filter((review) => review._id !== reviewId); // Remove deleted review from store
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error deleting review", error);
      toast.error("Failed to delete review. Please try again.");
    }
  };
}

export default new ReviewStore();
