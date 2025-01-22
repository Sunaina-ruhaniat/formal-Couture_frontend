import { makeObservable, observable, action, runInAction } from "mobx";
import axios from "config/axios";
import toast from "react-hot-toast";

class OrderStore {
  orders = []; // Store for all orders
  userOrders = []; // Store for user-specific orders
  selectedOrder = null; // Store for a single order detail
  isLoading = false; // Loading state for API calls

  constructor() {
    makeObservable(this, {
      orders: observable,
      userOrders: observable,
      selectedOrder: observable,
      isLoading: observable,
      getAllOrders: action,
      getUserOrders: action,
      getOrderById: action,
    });
  }

  // Get all orders (for Admin)
  getAllOrders = async () => {
    runInAction(() => {
      this.isLoading = true;
    });

    try {
      const response = await axios.get("/order/get-all-orders", {
        headers: {
          Cookie: `token=${localStorage.getItem("token")}`, // Adjust as needed
        },
      });
      if (response.status === 200) {
        runInAction(() => {
          this.orders = response.data.orders;
          this.isLoading = false;
        });
      }
    } catch (error) {
      runInAction(() => {
        this.isLoading = false;
      });
      toast.error("Error fetching orders");
    }
  };

  // Get orders specific to a user
  getUserOrders = async (userId) => {
    runInAction(() => {
      this.isLoading = true;
    });

    try {
      const response = await axios.get("/order/get-user-orders", {
        headers: {
          Cookie: `token=${localStorage.getItem("token")}`, // Adjust as needed
        },
      });
      if (response.status === 200) {
        runInAction(() => {
          this.userOrders = response.data.orders;
          this.isLoading = false;
        });
      }
    } catch (error) {
      runInAction(() => {
        this.isLoading = false;
      });
      toast.error("Error fetching user orders");
    }
  };

  // Get order by ID (order detail page)
  getOrderById = async (orderId) => {
    runInAction(() => {
      this.isLoading = true;
    });

    try {
      const response = await axios.get(`/order/${orderId}`, {
        headers: {
          Cookie: `token=${localStorage.getItem("token")}`,
        },
      });
      if (response.status === 200) {
        runInAction(() => {
          this.selectedOrder = response.data.order;
          this.isLoading = false;
        });
      }
    } catch (error) {
      runInAction(() => {
        this.isLoading = false;
      });
      toast.error("Error fetching order details");
    }
  };
}

export default new OrderStore();
