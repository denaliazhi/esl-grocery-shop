import App from "./App";
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
    ],
  },
];

export default routes;
