import { makeObservable, observable, action, runInAction } from "mobx";
import axios from "config/axios";
import toast from "react-hot-toast";

class UserStore {
  user = {};
  isLoadingUser = false;

  constructor() {
    makeObservable(this, {
      user: observable.ref,
      isLoadingUser: observable,
      getUser: action,
    });
  }

  getUser = async () => {
    runInAction(() => {
      this.isLoadingUser = true;
    });

    await axios
      .get("/user/get-user")
      .then(({ data }) => {
        runInAction(() => {
          this.user = data;
          this.isLoadingUser = false;
        });
      })
      .catch(() => {
        runInAction(() => {
          this.isLoadingUser = false;
        });
        toast.error("Failed to fetch user data");
      });
  };
}

const userStore = new UserStore();
export default userStore;
