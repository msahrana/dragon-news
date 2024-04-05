import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../../error/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import Root from "../../layouts/Root/Root";
import About from "../../pages/About/About";
import Career from "../../pages/Career/Career";
import Login from "../../components/Login/Login";
import SignUp from "../../components/SignUp/SignUp";
import DetailsNews from "../../pages/DetailsNews/DetailsNews";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/news.json"),
      },
      {
        path: "/news/:id",
        loader: () => fetch("/news.json"),
        element: (
          <PrivateRoute>
            <DetailsNews></DetailsNews>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
