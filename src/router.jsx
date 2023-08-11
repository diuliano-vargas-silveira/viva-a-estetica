import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, SignIn, SignUp } from "./screens";

export function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />
    },
    {
      path: "/sign-up",
      element: <SignUp />
    },
    {
      path: "/home",
      element: <Home />
    }
  ]);

  return <RouterProvider router={router} />;
}
