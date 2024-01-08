import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./global.scss";

import { createHashRouter, RouterProvider } from "react-router-dom";
import SpinnerFallback from "./pages/SpinnerFallback";

const FirstPoll = React.lazy(() => import("./pages/polls/FirstPoll"));
const SecondPoll = React.lazy(() => import("./pages/polls/SecondPoll"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const MainPage = React.lazy(() => import("./pages/MainPage"));

const ErrorWithSuspence = () => (
  <Suspense fallback={<SpinnerFallback />}>
    <ErrorPage />
  </Suspense>
);

const router = createHashRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<SpinnerFallback />}>
        <MainPage />
      </Suspense>
    ),
    errorElement: <ErrorWithSuspence />,
  },
  {
    path: "/1",
    element: (
      <Suspense fallback={<SpinnerFallback />}>
        <FirstPoll />
      </Suspense>
    ),
    errorElement: <ErrorWithSuspence />,
  },
  {
    path: "/2",
    element: (
      <Suspense fallback={<SpinnerFallback />}>
        <SecondPoll />
      </Suspense>
    ),
    errorElement: <ErrorWithSuspence />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
