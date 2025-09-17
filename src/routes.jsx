import Lesson from "./Lesson.jsx";
import Cart from "./components/Cart";
import Shelf from "./components/Shelf";
import Checkout from "./components/Checkout";

const routes = [
  {
    path: "/",
    element: <Lesson />,
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
