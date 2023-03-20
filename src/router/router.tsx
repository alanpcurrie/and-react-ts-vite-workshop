import ProductsPage from "pages/Products";
import App from "App";
import {
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    id: 'Home',
  },
  {
    path: "products",
    element: <ProductsPage />,
    id: 'Products',
  }
]);

export default router;
