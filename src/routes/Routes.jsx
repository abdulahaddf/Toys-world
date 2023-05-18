import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/login/Login";
import Register from "../pages/login/register/Register";
// import LoginLayout from "../layouts/LoginLayout";
import HomeLayout from "../layout/HomeLayout";
// import ErrorPage from "../shared/components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      // {
      //   path: "/",
      //   element: <Home></Home>,
        
      // },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      // {
      //   path: "/blog",
      //   element: <Blog></Blog>,
      // },
      // {
      //   path: "/chef/:id",
      //   element: (
      //     <PrivateRoutes>
      //       <Recipes></Recipes>
      //     </PrivateRoutes>
      //   ),
      //   loader: ({ params }) =>
      //     fetch(
      //       `https://chef-recipe-server-abdulahaddf.vercel.app/data/${params.id}`
      //     ),
      // },
      // {
      //   path: "*",
      //   element: <ErrorPage></ErrorPage>,
      // },
    ],
  },
]);

export default router;
