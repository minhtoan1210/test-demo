import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "./layouts";
import path from "./constants/path";
import Home from "./pages/Home";

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          path: path.home,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return routeElements;
}
