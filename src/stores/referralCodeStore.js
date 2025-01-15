import referralAxios from "config/referralAxios";
import { makeObservable, observable, action, runInAction } from "mobx";
import toast from "react-hot-toast";

class ReferralCodeStore {
  isLoadingUser = false;
  referralCode = "";
  redeemedReferralMessage = "";
  isLoadingReferral = false;

  constructor() {
    makeObservable(this, {
      referralCode: observable,
      redeemedReferralMessage: observable,
      isLoadingUser: observable,
      isLoadingReferral: observable,

      generateReferralCode: action,
      redeemReferralCode: action,
    });
  }

  generateReferralCode = async (targetEntity) => {
    runInAction(() => {
      this.isLoadingReferral = true;
    });

    try {
      if (!targetEntity) {
        throw new Error("Invalid target entity");
      }
      const { data } = await referralAxios.post("referral/generate-referral", {
        targetEntity,
      });
      console.log("API Response Data:", data);
      runInAction(() => {
        this.referralCode = data.referral.linkId;
        this.isLoadingReferral = false;
        toast.success("Referral code generated successfully!");
      });
      return data.referral.linkId;
    } catch (error) {
      runInAction(() => {
        this.isLoadingReferral = false;
      });

      const errorMessage =
        error?.response?.data?.message || "Failed to generate referral code";
      toast.error(errorMessage);
      return null;
    }
  };

  redeemReferralCode = async (referralCode) => {
    runInAction(() => {
      this.isLoadingReferral = true;
    });

    try {
      const { data } = await referralAxios.post(
        `/referral/redeem-referral/${referralCode}`,
        {
          targetEntity: "product",
        }
      );

      runInAction(() => {
        this.redeemedReferralMessage =
          data.message || "Referral redeemed successfully!";
        this.isLoadingReferral = false;
        toast.success(this.redeemedReferralMessage);
      });
      return data.message || "Referral redeemed successfully!";
    } catch (error) {
      runInAction(() => {
        this.isLoadingReferral = false;
      });

      const errorMessage =
        error?.response?.data?.message || "Failed to redeem referral code";
      toast.error(errorMessage);
      return null;
    }
  };
}

const referralCodeStore = new ReferralCodeStore();
export default referralCodeStore;
