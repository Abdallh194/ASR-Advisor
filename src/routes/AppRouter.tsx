import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorBoundary from "@error/ErrorBoundary";
const MainLayout = lazy(() => import("@layout/MainLayout"));
import Loader from "@components/Loading/Loader";
import PageNotFound from "@error/PageNotFound";
import HomePage from "@pages/HomePage";
import PlaceDetails from "@pages/PlaceDetails";

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
      {
        path: "/placeDetails/:prefix",
        element: <PlaceDetails />,
      },
    ],
  },
]);
const AppRouter = () => {
  return <RouterProvider router={routes}></RouterProvider>;
};

export default AppRouter;
