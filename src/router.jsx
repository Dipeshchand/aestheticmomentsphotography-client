import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "./App";

import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";


const IntroPage = lazy(() => import("./page/IntroPage"));
const Home = lazy(() => import("./page/Home"));
const About = lazy(() => import("./page/About"));
const Films = lazy(() => import("./page/Films"));
const Gallery = lazy(() => import("./page/Gallery"));
const Portfolio = lazy(() => import("./page/Portfolio"));
const Album = lazy(() => import("./page/Album"));
const Services = lazy(() => import("./page/Services"));
const Login = lazy(() => import("./page/Login"));
const Admin = lazy(() => import("./page/Admin"));
const Privacy = lazy(() => import("./page/PolicyPrivacy"));
const Blog = lazy(() => import("./page/Blog"));
const BlogDetails = lazy(() => import("./page/BlogDetails"));
const AdminBlog = lazy(() => import("./page/AdminBlog"));


const Loader = () => (
  <div className="h-screen flex items-center justify-center text-lg">
    Loading...
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <IntroPage />
      </Suspense>
    ),
  },

  {
    path: "/",
    element: <App />,
    children: [
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "films", element: <Films /> },
      { path: "gallery", element: <Gallery /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "portfolio/:slug", element: <Album /> },
      { path: "services", element: <Services /> },

      { path: "blogs", element: <Blog /> },
      { path: "blogs/:slug", element: <BlogDetails /> },

      { path: "privacy-policy", element: <Privacy /> },
    ],
  },

  {
    element: <PublicRoute />,
    children: [
      {
        path: "/login",
        element: (
          <Suspense fallback={<Loader />}>
            <Login />
          </Suspense>
        ),
      },
    ],
  },

  // {
  //   element: <ProtectedRoute />,
  //   children: [
  //     {
  //       path: "/admin",
  //       element: (
  //         <Suspense fallback={<Loader />}>
  //           <Admin />
  //         </Suspense>
  //       ),
  //     },
  //   ],
  // },

  // {
  //   path: "/admin/blog",
  //   element: (
  //     <ProtectedRoute>
  //     <Suspense fallback={<Loader />}>
  //       <AdminBlog />
  //     </Suspense>
  //     </ProtectedRoute>
  //   ),
  // },

  {
  element: <ProtectedRoute />,
  children: [
    {
      path: "/admin",
      element: (
        <Suspense fallback={<Loader />}>
          <Admin />
        </Suspense>
      ),
    },
    {
      path: "/admin/blog",
      element: (
        <Suspense fallback={<Loader />}>
          <AdminBlog />
        </Suspense>
      ),
    },
  ],
},
]);

export default router;
