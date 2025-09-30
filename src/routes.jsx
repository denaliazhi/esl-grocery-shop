import App from "./App";
import Shelf from "./components/Shelf";
import Receipt from "./components/Receipt";
import NotFound from "./components/NotFound";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
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
