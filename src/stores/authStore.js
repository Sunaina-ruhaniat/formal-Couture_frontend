import { makeObservable, observable, action, runInAction } from "mobx";
import axios from "config/axios";
import toast from "react-hot-toast";

class AuthStore {
  user = {};
  isLoadingUser = false;
  isLoadingLogin = false;

  constructor() {
    makeObservable(this, {
      user: observable.ref,
      isLoadingUser: observable.ref,
      isLoadingLogin: observable.ref,
      login: action,
      logout: action,
    });
  }

  login = async ({ payload, navigate }) => {
    runInAction(() => {
      this.isLoadingLogin = true;
    });
    try {
      const res = await axios.post("/auth/login", payload, {
        withCredentials: true,
      });
      if (res.status === 200) {
        const data = res?.data;
        localStorage.setItem("user", JSON.stringify(data?.user));
        localStorage.setItem("token", data?.token);
        localStorage.setItem("userId", data?.user?._id);
        localStorage.setItem("role", data?.user?.role);
        localStorage.setItem("isLoggedIn", true);
        toast.success("Login successful!");
        navigate && navigate("/home");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
    }
  };

  register = async ({ payload, navigate }) => {
    try {
      const response = await axios.post("/auth/register", payload, {
        withCredentials: true,
      });
      if (response.status === 200) {
        toast.success("Registration successful!");
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("userId", response?.data?.user?._id);
        localStorage.setItem("role", response?.data?.user?.role);
        navigate && navigate("/home");
      } else {
        toast.error("Registration failed: Unexpected response status");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong during registration";
      toast.error(errorMessage);
    }
  };

  logout = ({ callback }) => {
    runInAction(() => {
      localStorage.clear();
      this.user = {};
      axios.get("/auth/logout").then(() => {});
      callback && callback();
    });
  };
}

const authStore = new AuthStore();
export default authStore;
