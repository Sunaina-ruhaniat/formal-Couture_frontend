import { makeObservable, observable, action } from "mobx";
import axios from "config/axios"; // Adjust axios configuration as per your setup
import { toast } from "react-hot-toast";

class CartStore {
  cart = [];
  wishlist = [];
  userId = localStorage.getItem("userId") || null;
  token = localStorage.getItem("token") || null;

  constructor() {
    makeObservable(this, {
      cart: observable,
      wishlist: observable,
      userId: observable,

      addToCart: action,
      addToWishlist: action,
      getCart: action,
      removeFromCart: action,
      applyDiscount: action,
    });

    this.cart = [];
  }

  // Add to Cart function
  addToCart = async (productId, quantity, variant, navigate) => {
    const url = this.userId ? "/cart/add-to-cart" : "/cart/guest/add-to-cart";
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
    const url = this.userId ? "/cart/get-cart" : "/cart/guest/get-cart";
    try {
      const response = await axios.get(url, {
        headers: {
          Cookie: "connect.sid=your-session-id; token=your-token",
        },
      });

      if (response.status === 200) {
        // this.cart = Array.isArray(response.data.cart) ? response.data.cart : [];
        if (response.data.cart && Array.isArray(response.data.cart.products)) {
          this.cart = response.data.cart;
        } else {
          toast.error("Invalid cart data received.");
        }
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
      this.cart = [];
    }
  };

  // Apply discount to the cart total
  applyDiscount = (discountAmount) => {
    this.discount = discountAmount;
  };

  // Calculate subtotal including any discounts
  calculateSubtotal = () => {
    if (this.cart && this.cart.products && Array.isArray(this.cart.products)) {
      return this.cart.products.reduce((total, item) => {
        if (item.price && item.quantity) {
          return total + item.price * item.quantity;
        }
        return total;
      }, 0);
    }
    return 0;
  };

  // Remove item from cart
  removeFromCart = async (productId, quantity, variant) => {
    const url = this.token
      ? "/cart/remove-from-cart"
      : "/cart/guest/remove-from-cart";

    try {
      const response = await axios.put(url, {
        productId,
        quantity,
        variant,
      });

      if (response.status === 200) {
        // This line ensures that the item is removed from the cart after successful removal.
        this.cart = this.cart.filter((item) => {
          return (
            item.productId !== productId ||
            JSON.stringify(item.variant) !== JSON.stringify(variant)
          );
        });

        // You can also use a toast to notify the user that the item was removed
        toast.success("Item removed from cart!");
      }
    } catch (error) {
      console.error("Error removing from cart", error);
    }
  };

  // Inside updateQuantity function
  updateQuantity = (productId, newQuantity, variant) => {
    if (Array.isArray(this.cart)) {
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
    } else {
      console.error("Cart is not an array");
    }
  };
}

const cartStore = new CartStore();
export default cartStore;
