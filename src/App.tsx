import Home from "./views/Home";
import Details from "./views/Details";
import Cart from "./views/Cart";
import "./App.module.css";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import NotFound from "./views/NotFound";
import PreDetails from "./views/PreDetails";
import Onsale from "./views/Onsale";

function App() {
  const browserRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/onsale", element: <Onsale /> },
    { path: "/details/:id", element: <Details /> },
    { path: "/register", element: <NotFound /> },
    { path: "/notfound", element: <NotFound /> },
    { path: "//:id", element: <PreDetails /> },
    // { path: "/*", element: <NotFound /> },
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
