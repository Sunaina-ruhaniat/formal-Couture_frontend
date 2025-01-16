import { makeObservable, observable, action } from "mobx";
import axios from "config/axios"; // Adjust axios configuration as per your setup
import { toast } from "react-hot-toast";

class WishlistStore {
  wishlist = []; // Initialize as an empty array
  userId = localStorage.getItem("userId") || null;
  token = localStorage.getItem("token") || null;

  constructor() {
    makeObservable(this, {
      wishlist: observable,
      userId: observable,
      addToWishlist: action,
      getWishlist: action,
      removeFromWishlist: action,
      moveToCart: action,
    });
  }

  // Fetch Wishlist Data
  getWishlist = async () => {
    const url = this.userId
      ? "/wishlist/get-wishlist"
      : "/wishlist/guest/get-wishlist";
    try {
      const response = await axios.get(url, {
        headers: {
          Cookie: "connect.sid=your-session-id; token=your-token",
        },
      });

      if (response.status === 200) {
        this.wishlist = response.data.wishlist || []; // Ensure it's an array
      }
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    }
  };

  // Add to Wishlist
  addToWishlist = async (productId, variant) => {
    const url = this.userId
      ? "/wishlist/add-to-wishlist"
      : "/wishlist/guest/add-to-wishlist";
    try {
      const response = await axios.post(url, {
        productId,
        variant,
        userId: this.userId,
      });

      if (response.status === 200) {
        this.wishlist.push(response.data);
        toast.success("Added to wishlist!");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error adding to wishlist", error);
    }
  };

  // Remove from Wishlist
  removeFromWishlist = async (productId, variant) => {
    const url = this.token
      ? "/wishlist/remove-from-wishlist"
      : "/wishlist/guest/remove-from-wishlist";
    try {
      const response = await axios.put(url, {
        data: { productId, variant },
      });

      if (response.status === 200) {
        this.wishlist = this.wishlist.filter(
          (item) =>
            item.productId !== productId ||
            JSON.stringify(item.variant) !== JSON.stringify(variant)
        );
        toast.success("Item removed from wishlist!");
      }
    } catch (error) {
      console.error("Error removing from wishlist", error);
    }
  };

  // Move item to Cart
  moveToCart = async (productId, variant) => {
    const url = this.token ? "/cart/add-to-cart" : "/cart/guest/add-to-cart";
    try {
      const response = await axios.post(url, {
        productId,
        variant,
        userId: this.userId,
        quantity: 1, // You can adjust quantity as needed
      });

      if (response.status === 200) {
        // Remove from wishlist after adding to cart
        await this.removeFromWishlist(productId, variant);
        toast.success("Item moved to cart!");
      }
    } catch (error) {
      console.error("Error moving to cart", error);
    }
  };
}

const wishlistStore = new WishlistStore();
export default wishlistStore;
