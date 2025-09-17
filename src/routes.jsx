import App from "./App";
import Cart from "./components/Cart";
import Shelf from "./components/Shelf";
import Checkout from "./components/Checkout";

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
        element: <Checkout />,
      },
    ],
  },
];

export default routes;
