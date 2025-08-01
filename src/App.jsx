import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./assets/Pages/Home";
import { About } from "./assets/Pages/About";
import { Contact, contactData } from "./assets/Pages/Contact";
import { AppOutlet } from "./Components/Outlet/AppOutlet";
import { ErrorPage } from "./assets/Pages/ErrorPage";
import { MoviesData } from "./Api/ApiData";
import { Movies } from "./assets/Pages/Movies";
import { SingleMoviesDetail } from "./SingleMovieDetail";
import { SingleMoviesData } from "./Api/ApiSingleMovieDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppOutlet />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
          action: contactData,
        },
        {
          path: "movies",
          element: <Movies />,
          loader: MoviesData,
        },
        {
          path: "movies/:movieId",
          element: <SingleMoviesDetail />,
          loader: SingleMoviesData,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
