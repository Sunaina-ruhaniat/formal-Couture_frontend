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
  selectedProduct = null;

  constructor() {
    makeObservable(this, {
      isLoading: observable.ref,
      productList: observable.ref,
      selectedProduct: observable.ref,
      productsData: computed,
      getProductList: action,
      getProductById: action,
    });
  }

  get productsData() {
    return this.productList;
  }

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

  getProductById = async (productId) => {
    runInAction(() => {
      this.selectedProduct = null;
      this.isLoading = true;
    });
    await axios
      .get(`/product/${productId}`)
      .then((res) => {
        console.log("res>>>", res);
        if (res.status === 200) {
          runInAction(() => {
            this.selectedProduct = res.data.product;
            this.isLoading = false;
          });
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
