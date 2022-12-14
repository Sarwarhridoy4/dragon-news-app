import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Rgister";
import News from "../../Pages/News/News/News";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(`https://dragon-news-server-eight-theta.vercel.app/news`),
      },

      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            `https://dragon-news-server-eight-theta.vercel.app/category/${params.id}`
          ),
      },

      {
        path: "/news/:id",
        element: <News></News>,
        loader: ({ params }) =>
          fetch(
            `https://dragon-news-server-eight-theta.vercel.app/news/${params.id}`
          ),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
