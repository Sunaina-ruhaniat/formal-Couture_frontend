import {
  makeObservable,
  action,
  runInAction,
  observable,
  computed,
} from "mobx";
import axios from "config/axios";
import toast from "react-hot-toast";

class productStore {
  isLoading = false;
  productList = null;
  selectedProduct = null; // State for storing the selected product

  constructor() {
    makeObservable(this, {
      isLoading: observable.ref,
      productList: observable.ref,
      selectedProduct: observable.ref, // Observable for selected product

      productsData: computed,
      getProductList: action,
      getProductById: action, // Make the new method observable
    });
  }

  get productsData() {
    return this.productList;
  }

  // Existing method to fetch all products
  getProductList = async () => {
    runInAction(() => {
      this.productList = null;
      this.isLoading = true;
    });
    await axios
      .get(`/product/get-products`)
      .then((res) => {
        if (res.status === 200) {
          runInAction(() => {
            this.productList = res.data.products;
            this.isLoading = false;
          });
          console.log("res.data.products", this.productList);
        } else {
          this.productList = null;
          toast("Error fetching Products");
        }
      })
      .catch((error) => {
        runInAction(() => {
          this.isLoading = false;
        });
        toast("Error fetching Products");
      });
  };

  // New method to fetch a product by its ID
  getProductById = async (productId) => {
    runInAction(() => {
      this.selectedProduct = null; // Clear previous product data
      this.isLoading = true;
    });
    await axios
      .get(`/product/${productId}`) // Adjust the endpoint to match your backend route
      .then((res) => {
        if (res.status === 200) {
          runInAction(() => {
            this.selectedProduct = res.data.product; // Save the fetched product
            this.isLoading = false;
          });
          console.log("Fetched product by ID", this.selectedProduct);
        } else {
          this.selectedProduct = null;
          toast("Error fetching the product");
        }
      })
      .catch((error) => {
        runInAction(() => {
          this.isLoading = false;
        });
        toast("Error fetching the product");
      });
  };
}

export default new productStore();
