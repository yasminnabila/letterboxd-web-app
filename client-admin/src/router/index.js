import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Genre from "../pages/Genre";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Layout from "../layout/Layout";
import AddMovie from "../components/AddMovie";
import AddGenre from "../components/AddGenre";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/genre",
        element: <Genre />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: `/add-movie`,
        element: <AddMovie />,
      },
      {
        path: `/add-genre`,
        element: <AddGenre />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
