import Home from "./views/Home";
import Details from "./views/Details";
import Cart from "./views/Cart";
import "./App.module.css";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import NotFound from "./views/NotFound";

function App() {
  const browserRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/details", element: <Details /> },
    { path: "/register", element: <NotFound /> },
    { path: "/notfound", element: <NotFound /> },
    { path: "/*", element: <NotFound /> },
    { path: "/cart", element: <Cart /> },
  ]);
  return (
    <>
      {/* <Details /> */}
      <RouterProvider router={browserRouter} />
    </>
  );
}

export default App;
