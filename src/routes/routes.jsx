import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import SingleListing from "../pages/SingleListing/SingleListing";
import Dashboard from "../pages/Dashboard/Dashboard";
import Favorites from "../pages/Favorites/Favorites";
import Profile from "../pages/Profile/Profile";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "listing/:id",
        element: <SingleListing />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "sevimlilar",
        element: <Favorites />,
      },
      {
        path: "kabinet",
        element: <Profile />,
      },
    ],
  },
];

export default routes;
