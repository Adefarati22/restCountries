import { createBrowserRouter, RouterProvider } from "react-router";
import { lazy, Suspense } from "react";
import { LazyLoader } from "@/components/LazyLoader";

// lazy import
const RootLayout = lazy(() => import("@/layout/RootLayout"))
const CardLayout = lazy(() => import("@/pages/CardLayout"))
const CardDetails = lazy(() => import("@/pages/CardDetails"))



export default function AppRoutes() {
    const routes = [
        {
            element: (
                <Suspense fallback={<LazyLoader />}>
                    <RootLayout />
                </Suspense>
            ),
            children: [
                {
                    index: true,
                    element: (
                        <Suspense fallback={<LazyLoader />}>
                            <CardLayout />
                        </Suspense>
                    ),
                },
                {
                    path: "country/:code",
                    element: (
                        <Suspense fallback={<LazyLoader />}>
                            <CardDetails />
                        </Suspense>
                    ),
                },
            ],
        },
    ];
    const router = createBrowserRouter(routes);
  return <RouterProvider router={router}/>
}
