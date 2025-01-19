import { lazy, Suspense } from "react";
const MainLayout = lazy(() => import("@layout/MainLayout"));
import Loader from "@components/Loading/Loader";
import ErrorBoundary from "@error/ErrorBoundary";
import PageNotFound from "@error/PageNotFound";
import HomePage from "@pages/HomePage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <ErrorBoundary>
          <MainLayout />
        </ErrorBoundary>
      </Suspense>
    ),
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
const AppRouter = () => {
  return <RouterProvider router={routes}></RouterProvider>;
};

export default AppRouter;
