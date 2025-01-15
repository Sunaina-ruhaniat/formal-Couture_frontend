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
      getCart: action,
      updateCartQuantity: action,
      removeFromCart: action,
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
      });
      if (response.status === 200) {
        this.cart.push(response.data);
        toast.success(response.data.message);
        navigate("/shoppingBag");
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

  // Fetch cart data
  getCart = async () => {
    try {
      const response = await axios.get("/cart/get-cart", {
        headers: {
          Cookie: "connect.sid=your-session-id; token=your-token", // Pass session & token
        },
      });

      if (response.status === 200) {
        console.log("Here", response);
        this.cart = response.data.cart;
        console.log("response of get cart", response);
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  // Calculate subtotal based on cart data
  calculateSubtotal = () => {
    if (this.cart && this.cart.products) {
      return this.cart.products.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    }
    return 0;
  };

  // Update cart item quantity
  updateCartQuantity = async (productId, quantity) => {
    try {
      const response = await axios.post("/cart/update-quantity", {
        productId,
        quantity,
        userId: this.userId,
      });

      if (response.status === 200) {
        const updatedCart = this.cart.map((item) =>
          item.productId === productId
            ? { ...item, quantity: response.data.newQuantity }
            : item
        );
        this.cart = updatedCart;
      }
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  // Remove item from cart
  removeFromCart = async (productId) => {
    try {
      const response = await axios.post("/cart/remove-from-cart", {
        productId,
        userId: this.userId,
      });

      if (response.status === 200) {
        this.cart = this.cart.filter((item) => item.productId !== productId);
      }
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  updateQuantity = (productId, newQuantity, variant) => {
    // Find the item in the cart and update its quantity
    const updatedCart = this.cart.map((item) => {
      if (
        item.productId === productId &&
        JSON.stringify(item.variant) === JSON.stringify(variant)
      ) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    // Update the cart state
    this.cart = updatedCart;

    // Save the updated cart to local storage (if needed)
    localStorage.setItem("cart", JSON.stringify(this.cart));
  };
}

const cartStore = new CartStore();
export default cartStore;
