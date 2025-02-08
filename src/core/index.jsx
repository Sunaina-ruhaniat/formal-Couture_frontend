import React from "react";
import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { publicPaths, privatePaths } from "config/routes";
import PrivateRoute from "core/PrivateRoute";
import PublicRoute from "core/PublicRoute";
import LinearProgress from "@mui/material/LinearProgress";
import Layout from "components/Layout";
import SignupPage from "pages/SignUpPage";
import AdminRoute from "./AdminRoute";

const LoginPage = lazy(() => import("pages/LoginPage"));
const HomePage = lazy(() => import("pages/HomePage"));
const ProductListPage = lazy(() => import("pages/ProductListing"));
const ProductDetailPage = lazy(() => import("pages/ProductDetails"));
const ProfilePage = lazy(() => import("pages/ProfilePage"));
const AddToCartPage = lazy(() => import("pages/AddCartPage"));
const CustomerOrderDetails = lazy(() =>
  import("pages/ProfilePage/components/OrderDetailsPage")
);
const CheckoutPage = lazy(() =>
  import("pages/AddCartPage/components/CheckoutPage")
);
const WishListPage = lazy(() => import("pages/WishListPage"));
const SecureCheckoutPage = lazy(() =>
  import("pages/AddCartPage/components/SecureCheckout")
);
const SecureCheckoutLoginExistingCustomerPage = lazy(() =>
  import("pages/AddCartPage/components/AccountLogin")
);
const CheckoutFormPage = lazy(() =>
  import("pages/AddCartPage/components/CheckoutForm")
);
const PaymentPage = lazy(() =>
  import("pages/AddCartPage/components/PaymentPage")
);
const AdminDashboardPage = lazy(() => import("pages/Admin/DashboardPage"));
const AdminProductPage = lazy(() => import("pages/Admin/ProductPage"));
const AdminOrderPage = lazy(() => import("pages/Admin/OrderPage"));
const OrderDetails = lazy(() =>
  import("pages/Admin/OrderPage/components/OrderDetailPage")
);
const AdminProfilePage = lazy(() => import("pages/Admin/AdminProfile"));
const CustomerCare = lazy(() => import("components/CustomerCare"));
const ContactUs = lazy(() =>
  import("components/CustomerCare/components/contactUs")
);
const PrivacyPolicy = lazy(() => import("components/Legel"));
const TermsAndConditions = lazy(() =>
  import("components/Legel/components/TermsAndConditions")
);
const ExchangePolicy = lazy(() => import("components/ExchangePolicy"));
const DeliveryPolicy = lazy(() =>
  import("components/ExchangePolicy/components/DeliveryPolicy")
);
const AboutUs = lazy(() => import("components/AboutUs"));
const ReferralProgram = lazy(() =>
  import("components/AboutUs/components/ReferralProgram")
);

const publicRoutes = [
  {
    path: publicPaths.login,
    Component: <LoginPage open={true} handleClose={() => {}} />,
  },
  {
    path: publicPaths.home,
    Component: <HomePage />,
  },
  {
    path: publicPaths.productList,
    Component: <ProductListPage />,
  },
  {
    path: publicPaths.productDetail,
    Component: <ProductDetailPage />,
  },
  {
    path: publicPaths.signUp,
    Component: <SignupPage open={true} handleClose={() => {}} />,
  },
  {
    path: publicPaths.addtoCart,
    Component: <AddToCartPage />,
  },
  {
    path: publicPaths.wishlist,
    Component: <WishListPage />,
  },
  {
    path: publicPaths.secureCheckout,
    Component: <SecureCheckoutPage />,
  },
  {
    path: publicPaths.secureCheckoutLoginExistingCustomer,
    Component: <SecureCheckoutLoginExistingCustomerPage />,
  },
  {
    path: publicPaths.shippingAddress,
    Component: <CheckoutFormPage />,
  },
  {
    path: publicPaths.paymentStage,
    Component: <PaymentPage />,
  },
  { path: publicPaths.ourStory, Component: <AboutUs /> },
  { path: publicPaths.referralProgram, Component: <ReferralProgram /> },
  { path: publicPaths.faq, Component: <CustomerCare /> },
  { path: publicPaths.contactUs, Component: <ContactUs /> },
  { path: publicPaths.exchange, Component: <ExchangePolicy /> },
  { path: publicPaths.delivery, Component: <DeliveryPolicy /> },
  { path: publicPaths.termsAndConditions, Component: <TermsAndConditions /> },
  { path: publicPaths.privacy, Component: <PrivacyPolicy /> },
  {
    path: privatePaths.admin.adminProfile,
    Component: <AdminProfilePage />,
  },
  {
    path: privatePaths.admin.page,
    Component: <AdminDashboardPage />,
  },
  {
    path: privatePaths.admin.productPage,
    Component: <AdminProductPage />,
  },
  {
    path: privatePaths.admin.orders,
    Component: <AdminOrderPage />,
  },
  { path: privatePaths.admin.orderDetails, Component: <OrderDetails /> },
  {
    path: privatePaths.admin.adminProfile,
    Component: <AdminProfilePage />,
  },
  {
    path: privatePaths.admin.page,
    Component: <AdminDashboardPage />,
  },
  {
    path: privatePaths.admin.productPage,
    Component: <AdminProductPage />,
  },
  {
    path: privatePaths.admin.orders,
    Component: <AdminOrderPage />,
  },
  { path: privatePaths.admin.orderDetails, Component: <OrderDetails /> },
];

const customerRoutes = [
  {
    path: privatePaths.customer.profile,
    Component: <ProfilePage />,
  },
  {
    path: privatePaths.customer.orders,
    Component: <CustomerOrderDetails />,
  },
  {
    path: privatePaths.customer.checkout,
    Component: <CheckoutPage />,
  },
  {
    path: privatePaths.customer.CustomerWishlist,
    Component: <WishListPage />,
  },
  {
    path: privatePaths.customer.CustomerShoppingBag,
    Component: <AddToCartPage />,
  },
];

const privateRoutes = {
  customer: [
    {
      path: privatePaths.customer.profile,
      Component: <ProfilePage />,
    },
    {
      path: privatePaths.customer.checkout,
      Component: <CheckoutPage />,
    },
    {
      path: privatePaths.customer.CustomerWishlist,
      Component: <WishListPage />,
    },
    {
      path: privatePaths.customer.CustomerShoppingBag,
      Component: <AddToCartPage />,
    },
  ],
  admin: [
    {
      path: privatePaths.admin.adminProfile,
      Component: <AdminProfilePage />,
    },
    {
      path: privatePaths.admin.page,
      Component: <AdminDashboardPage />,
    },
    {
      path: privatePaths.admin.productPage,
      Component: <AdminProductPage />,
    },
    {
      path: privatePaths.admin.orders,
      Component: <AdminOrderPage />,
    },
    { path: privatePaths.admin.orderDetails, Component: <OrderDetails /> },
  ],
};

const App = () => {
  const role = localStorage.getItem("role");
  console.log("role && privateRoutes[role]", role, privateRoutes[role]);

  return (
    <Suspense fallback={<LinearProgress />}>
      <Routes>
        {publicRoutes.map((route) => (
          <Route
            key={route.path + Date.now()}
            path={route.path}
            element={<PublicRoute>{route.Component}</PublicRoute>}
          />
        ))}

        {role === "customer" &&
          customerRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<PrivateRoute>{route.Component}</PrivateRoute>}
            />
          ))}
        {role &&
          privateRoutes?.[role].map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<PrivateRoute>{route.Component}</PrivateRoute>}
            />
          ))}

        {/* {role === "admin" &&
          adminRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<AdminRoute>{route.Component}</AdminRoute>}
            />
          ))} */}
        <Route path="*" element={<Navigate to={publicPaths.home} replace />} />
        <Route
          exact
          path="/"
          element={<Navigate to={publicPaths.home} replace />}
        />
      </Routes>
      {/* <AppSnackbar /> */}
    </Suspense>
  );
};

export default observer(App);
