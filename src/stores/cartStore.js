import { makeObservable, observable, action } from "mobx";
import axios from "config/axios";
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

  addToCart = async (
    productId,
    quantity,
    variant,
    navigate,
    isUpdate = false
  ) => {
    const url = this.userId ? "/cart/add-to-cart" : "/cart/guest/add-to-cart";
    try {
      const response = await axios.post(url, {
        productId,
        quantity,
        variant,
      });
      if (response.status === 200) {
        this.cart = response.data.cart;
        toast.success("Added to Cart!");
        navigate("/shoppingBag");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error adding to cart", error);
    }
  };

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
        toast.success("Added to Wishlist!");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error adding to wishlist", error);
    }
  };

  setUserId(userId) {
    localStorage.setItem("userId", userId);
    this.userId = userId;
  }

  getCart = async () => {
    const url = this.userId ? "/cart/get-cart" : "/cart/guest/get-cart";
    try {
      const response = await axios.get(url, {
        headers: {
          Cookie: "connect.sid=your-session-id; token=your-token",
        },
      });

      if (response.status === 200) {
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

  applyDiscount = (discountAmount) => {
    this.discount = discountAmount;
  };

  calculateSubtotal = () => {
    if (this.cart && this.cart.products && Array.isArray(this.cart.products)) {
      return this.cart.products.reduce((total, item) => {
        if (item.price && item.quantity) {
          return total + item.price;
        }
        return total;
      }, 0);
    }
    return 0;
  };

  removeFromCart = async (productId, quantity, variant, isUpdate) => {
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
        this.cart = response.data.cart;
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

      this.cart = updatedCart;

      localStorage.setItem("cart", JSON.stringify(this.cart));
    } else {
      console.error("Cart is not an array");
    }
  };
}

const cartStore = new CartStore();
export default cartStore;
