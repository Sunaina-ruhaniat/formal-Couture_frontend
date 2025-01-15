export const defaultPath = "/home";
export const privatePaths = {
  admin: {
    page: "/main-page",
  },
  customer: {
    profile: "/profile",
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
  productDetail: "/product-details/:id",
  addtoCart: "/shoppingBag",
  wishlistL: "/wishlist",
};
