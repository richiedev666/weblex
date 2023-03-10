import { createBrowserRouter } from "react-router-dom";

import Home from "./views/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
