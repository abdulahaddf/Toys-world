import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/login/Login";
import Register from "../pages/login/register/Register";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";
import MyTOys from "../pages/toys/MyTOys";
import AllToys from "../pages/toys/AllToys";
import Addtoy from "../pages/toys/Addtoy";
import ErrorPage from "../shared/components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/all",
        element: <AllToys></AllToys>,
      },
      {
        path: "/my",
        element: <MyTOys></MyTOys>,
      },
      {
        path: "/add",
        element: <Addtoy></Addtoy>,
      },
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
