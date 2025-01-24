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
  searchedProductList = null;
  productListByCategory = {
    "limited-edition": [],
    "evergreen-classic": [],
  };

  constructor() {
    makeObservable(this, {
      isLoading: observable.ref,
      productList: observable.ref,
      selectedProduct: observable.ref,
      productListByCategory: observable,

      productsData: computed,
      productByCategoryData: computed,

      getProductList: action,
      getProductById: action,
      getProductByCategory: action,
      createProduct: action,
      updateProduct: action,
      deleteProduct: action,
    });
  }

  get productByCategoryData() {
    return this.productListByCategory;
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

  /**
   *
   * @param {'limited-edition' | 'evergreen-classic'} category
   */

  getProductByCategory = async (category) => {
    runInAction(() => {
      this.productListByCategory[category] = null;
      this.isLoading = true;
    });
    let res = null;
    try {
      res = await axios.get(
        `/product/get-products?category=${category}&limit=4`
      );
      if (res.status === 200) {
        runInAction(() => {
          this.productListByCategory[category] = res.data.products;
        });
      } else {
        throw new Error("Error fetching Products");
      }
    } catch (e) {
      runInAction(() => {
        this.productListByCategory[category] = null;
      });
      toast("Error fetching Products");
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  getSearchedProductList = async (searchKeyword) => {
    runInAction(() => {
      this.searchedProductList = null;
      this.isLoading = true;
    });
    await axios
      .get(`/product/get-products?search=${searchKeyword}`)
      .then((res) => {
        if (res.status === 200) {
          runInAction(() => {
            this.searchedProductList = res.data.products;
            this.isLoading = false;
          });
        } else {
          this.searchedProductList = null;
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

  createProduct = async (formData) => {
    try {
      const response = await axios.post("/product/create-product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      toast.success("Product created successfully!");
      return response.data;
    } catch (error) {
      toast.error("An error occurred while creating the product.");
      throw error;
    }
  };

  updateProduct = async (productId, formData) => {
    try {
      const response = await axios.put(
        `/product/update-product/${productId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success("Product updated successfully!");
      return response.data;
    } catch (error) {
      toast.error("An error occurred while updating the product.");
      throw error;
    }
  };

  deleteProduct = async (productId) => {
    runInAction(() => {
      this.isLoading = true;
    });

    try {
      const res = await axios.delete(`/product/delete-product/${productId}`);

      if (res.status === 200) {
        runInAction(() => {
          this.productList = this.productList.filter(
            (product) => product.id !== productId
          );

          if (this.searchedProductList) {
            this.searchedProductList = this.searchedProductList.filter(
              (product) => product.id !== productId
            );
          }

          Object.keys(this.productListByCategory).forEach((category) => {
            this.productListByCategory[category] = this.productListByCategory[
              category
            ].filter((product) => product.id !== productId);
          });
        });

        toast.success("Product deleted successfully");
        this.getProductList();
      } else {
        throw new Error("Error deleting product");
      }
    } catch (error) {
      toast.error("Error deleting product");
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };
}

export default new productStore();
