import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, SignIn, SignUp, GenderSelection } from "./screens";
import { ROUTES } from "./constants/routes";

export function Routes() {
  const router = createBrowserRouter([
    {
      path: ROUTES.SIGN_IN,
      element: <SignIn />,
    },
    {
      path: ROUTES.SIGN_UP,
      element: <SignUp />,
    },
    {
      path: ROUTES.HOME,
      element: <Home />,
    },
    {
      path: ROUTES.GENDER_SELECTION,
      element: <GenderSelection />,
    },
  ]);

  return <RouterProvider router={router} />;
}
