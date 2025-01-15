import { makeObservable, observable, action } from "mobx";
import axios from "config/axios"; // Adjust axios configuration as per your setup
import { toast } from "react-hot-toast";

class CartStore {
  cart = [];
  wishlist = [];
  userId = localStorage.getItem("userId") || null; // Retrieve user ID if stored after login

  constructor() {
    makeObservable(this, {
      cart: observable,
      wishlist: observable,
      userId: observable,
      addToCart: action,
      addToWishlist: action,
    });
  }

  // Add to Cart function
  addToCart = async (productId, quantity, variant, navigate) => {
    const url = this.userId
      ? "/cart/add-to-cart" // If logged in, use this API
      : "/cart/guest/add-to-cart"; // For guests, same API but with guest handling on the backend

    try {
      const response = await axios.post(url, {
        productId,
        quantity,
        variant,
        userId: this.userId, // Include userId for logged-in users
      });
      if (response.status === 200) {
        this.cart.push(response.data);
        toast.success(response.data.message);
        navigate("/addToCart");
      }
    } catch (error) {
      console.error("Error adding to cart", error);
    }
  };

  // Add to Wishlist function
  addToWishlist = async (productId, variant) => {
    const url = this.userId
      ? "/wishlist/add-to-wishlist" // Logged-in users
      : "/wishlist/guest/add-to-wishlist"; // Guests

    try {
      const response = await axios.post(url, {
        productId,
        variant,
        userId: this.userId, // Include userId for logged-in users
      });

      if (response.status === 200) {
        this.wishlist.push(response.data); // Optionally update wishlist state
      }
    } catch (error) {
      console.error("Error adding to wishlist", error);
    }
  };

  // Set User ID after successful login
  setUserId(userId) {
    localStorage.setItem("userId", userId);
    this.userId = userId;
  }
}

const cartStore = new CartStore();
export default cartStore;
