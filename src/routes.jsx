import App from "./App";
import Cart from "./components/Cart";
import Shelf from "./components/Shelf";
import Receipt from "./components/Receipt";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/:section",
        element: <Shelf />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Receipt />,
      },
    ],
  },
];

export default routes;
