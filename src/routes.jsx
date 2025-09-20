import App from "./App";
import Shelf from "./components/Shelf";
import Receipt from "./components/Receipt";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/:grocerySection",
        element: <Shelf />,
      },
      {
        path: "/checkout",
        element: <Receipt />,
      },
    ],
  },
];

export default routes;
