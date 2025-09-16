import App from "./App";
import Cart from "./components/Cart";
import Shelf from "./components/Shelf";

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
    ],
  },
];

export default routes;
