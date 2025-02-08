export const defaultPath = "/home";
export const privatePaths = {
  admin: {
    page: "/admin-page",
    productPage: "/admin/products",
    orders: "/admin/orders",
    orderDetails: "/admin/orders/:orderId",
    adminProfile: "/admin/profile",
  },
  customer: {
    profile: "/profile",
    orders: "/customerOrder",
    checkout: "/checkout",
    CustomerShoppingBag: "/CustomerShoppingBag",
    CustomerWishlist: "/CustomerWishlist",
  },
};

export const publicPaths = {
  login: "/login",
  home: "/home",
  signUp: "/sign-up",
  productList: "/product-list",
  productDetail: "/product-details/:productId",
  addtoCart: "/shoppingBag",
  wishlist: "/wishlist",
  secureCheckout: "/secure/checkout/login/",
  secureCheckoutLoginExistingCustomer:
    "/secure/checkout/login-existing-customer/",
  shippingAddress: "/secure/checkout/",
  paymentStage: "/secure/checkout/payment",
  ourStory: "/our-story",
  referralProgram: "/referral-program",
  faq: "/faq",
  contactUs: "/contact-us",
  exchange: "/exchange-policy",
  delivery: "/delievry-policy",
  termsAndConditions: "/terms-and-conditions",
  privacy: "/privacy-policy",
};
