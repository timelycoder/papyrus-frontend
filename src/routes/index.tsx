import DashboardHome from "@/components/dashboard/DashboardHome";
import DashboardLayout from "@/layouts/DashboardLayout";
import MainLayout from "@/layouts/MainLayout";
import PrivateRoute from "@/layouts/ProtectedRoute";
import About from "@/pages/About";
import AllProductsPage from "@/pages/AllProductsPage";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import Checkout from "@/pages/Checkout";
import ManageOrders from "@/pages/Dashboard/Admin/orders/ManageOrders";
import AddProduct from "@/pages/Dashboard/Admin/products/AddProduct";
import ManageProducts from "@/pages/Dashboard/Admin/products/ManageProducts";
import UpdateProduct from "@/pages/Dashboard/Admin/products/UpdateProduct";
import ManageUsers from "@/pages/Dashboard/Admin/user/ManageUsers";
import Orders from "@/pages/Dashboard/User/orders/Orders";
import Home from "@/pages/Home";
import ShoppingCart from "@/pages/ShoppingCart";
import SingleProduct from "@/pages/SingleProductPage";
import { createBrowserRouter } from "react-router-dom";
// import Profile from "@/pages/Dashboard/User/profile/Profile";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import ErrorPage from "@/pages/ErrorPage";
import OrderDetails from "@/pages/Order";
import MyProfilePage from "@/pages/profile/MyProfile";
import OrderVerification from "@/pages/VerifyOrder";

// Resource pages
import CalligraphyBasics from "@/pages/resources/calligraphy-basics";
import JournalIdeas from "@/pages/resources/journal-ideas";
import PaperGuide from "@/pages/resources/paper-guide";
import WorkspaceOrganization from "@/pages/resources/workspace-organization";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "products",
        element: <AllProductsPage />,
      },
      {
        path: "/products/:productId",
        element: <SingleProduct />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: (
          <PrivateRoute>
            <ShoppingCart />
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/order/verify",
        element: <OrderVerification />,
      },
      {
        path: "/order",
        element: <OrderDetails />,
      },
      {
        path: "resources/paper-guide",
        element: <PaperGuide />,
      },
      {
        path: "resources/journal-ideas",
        element: <JournalIdeas />,
      },
      {
        path: "resources/calligraphy-basics",
        element: <CalligraphyBasics />,
      },
      {
        path: "resources/workspace-organization",
        element: <WorkspaceOrganization />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },

  //* shoyon add this
  // dashboard
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    // errorElement: <ErrorElement />,
    children: [
      { index: true, element: <DashboardHome /> },
      // { path: "home", element: <DashboardHome /> },
      //! admin route
      {
        path: "admin/manage-orders",
        element: (
          <PrivateRoute requireAdmin={true}>
            <ManageOrders />
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://papyrus-server-lovat.vercel.app/api/order"),
      },
      // end orders
      {
        path: "admin/manage-products",
        element: (
          <PrivateRoute requireAdmin={true}>
            <ManageProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "admin/add-product",
        element: (
          <PrivateRoute requireAdmin={true}>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "admin/update-product/:productId",
        element: (
          <PrivateRoute requireAdmin={true}>
            <UpdateProduct />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://papyrus-server-lovat.vercel.app/api/product/${params.productId}`
          ),
      },
      // end products
      { path: "admin/manage-users", element: <ManageUsers /> },
      // user
      //! user route
      { path: "/dashboard/user/orders", element: <Orders /> },
      { path: "/dashboard/user/profile", element: <MyProfilePage /> },
      // { path: "/dashboard/user/profile", element: <MyProfilePage /> },
    ],
  },
]);

{
  /* <ProtectedRoute requireAdmin={true}>
<DashboardLayout />
</ProtectedRoute> */
}

export default router;
