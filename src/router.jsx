import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Home,
  SignIn,
  SignUp,
  Practices,
  Poolock,
  CreatePost,
  CreateStory,
} from "./screens";
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
      path: ROUTES.PRACTICES,
      element: <Practices />,
    },
    {
      path: ROUTES.POOLOCK,
      element: <Poolock />,
    },
    {
      path: ROUTES.CREATE_POST,
      element: <CreatePost />,
    },
    {
      path: ROUTES.CREATE_STORY,
      element: <CreateStory />,
    },
  ]);

  return <RouterProvider router={router} />;
}
