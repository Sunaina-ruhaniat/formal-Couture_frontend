import { makeObservable, observable, action, runInAction } from "mobx";
import axios from "config/axios";
import { privatePaths } from "config/routes";
import toast from "react-hot-toast";

class UserStore {
  user = {};
  isLoadingUser = false;

  constructor() {
    makeObservable(this, {
      user: observable.ref,
      getUser: action,
    });
  }

  getUser = () => {
    runInAction(() => {
      this.isLoadingUser = true;
    });

    const csrfToken = document.cookie.match(/csrftoken=([^;]+)/)?.[1];
    axios.defaults.headers.common["X-CSRFToken"] = csrfToken;

    axios
      .get("/auth/me", { withCredentials: true })
      .then(({ data }) => {
        runInAction(() => {
          const className = data?.groups[0]?.split(" ")[1];
          if (className) {
            localStorage.setItem("userClass", className);
          }
          this.user = data;
          this.isLoadingUser = false;
        });
      })
      .catch(() => {
        runInAction(() => {
          this.isLoadingUser = false;
        });
      });
  };
}

const userStore = new UserStore();
export default userStore;
