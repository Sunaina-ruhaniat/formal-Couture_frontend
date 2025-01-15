import { makeObservable, observable, action, runInAction } from "mobx";
import axios from "axios";
import toast from "react-hot-toast";

class PaymentStore {
  isLoading = false;
  razorpayOrderId = null;
  paymentSuccessMessage = "";
  paymentFailureMessage = "";

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      razorpayOrderId: observable,
      paymentSuccessMessage: observable,
      paymentFailureMessage: observable,
      createOrder: action,
      verifyPayment: action,
    });
  }

  // Create an order on the backend and get Razorpay order ID
  createOrder = async (
    shippingAddress,
    billingAddress,
    useReferral,
    useExchange
  ) => {
    this.isLoading = true;
    try {
      const response = await axios.post(
        "http://localhost:8000/api/order/checkout",
        {
          shippingAddress,
          billingAddress,
          useReferral,
          useExchange,
        }
      );

      if (response.data && response.data.razorpay_order_id) {
        runInAction(() => {
          this.razorpayOrderId = response.data.razorpay_order_id;
        });
        return response.data; // Return order details to be used in the front end
      } else {
        throw new Error("Failed to create Razorpay order");
      }
    } catch (error) {
      runInAction(() => {
        this.isLoading = false;
      });
      toast.error("Error creating order: " + error.message);
      return null;
    }
  };

  // Verify the payment with Razorpay after payment completion
  verifyPayment = async (paymentResponse) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/order/verify-payment",
        {
          paymentId: paymentResponse.razorpay_payment_id,
          orderId: paymentResponse.razorpay_order_id,
          signature: paymentResponse.razorpay_signature,
        }
      );

      if (data.success) {
        runInAction(() => {
          this.paymentSuccessMessage = "Payment Successful!";
        });
        toast.success("Payment successful!");
        return true;
      } else {
        runInAction(() => {
          this.paymentFailureMessage = "Payment verification failed.";
        });
        toast.error("Payment verification failed.");
        return false;
      }
    } catch (error) {
      runInAction(() => {
        this.paymentFailureMessage = "Error verifying payment.";
      });
      toast.error("Error verifying payment: " + error.message);
      return false;
    }
  };
}

const paymentStore = new PaymentStore();
export default paymentStore;
