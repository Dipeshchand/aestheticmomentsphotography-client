import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "./App";
// import Admin from "./page/Admin";

const IntroPage = lazy(() => import("./page/IntroPage"));
const Home = lazy(() => import("./page/Home"));
const PolicyPrivacy = lazy(() => import("./page/PolicyPrivacy"));
const Films = lazy(() => import("./page/Films"));
const Gallery = lazy(() => import("./page/Gallery"));
const Portfolio = lazy(() => import("./page/Portfolio"));
const Services = lazy(() => import("./page/Services"));
const Album = lazy(() => import("./page/Album"));
const Admin =lazy(()=>import("./page/Admin"));
const About = lazy(()=>import("./page/About"))

const Loader = () => (
  <div className="h-screen flex items-center justify-center text-lg font-light">
    Loading...
  </div>
);

const router = createBrowserRouter([
  // Intro page (NO header/footer)
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <IntroPage />
      </Suspense>
    ),
  },

  // Main site with Header + Footer
  {
    path: "/",
    element: <App />, // THIS wraps everything below
    children: [
      {
        path: "home",
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "films",
        element: (
          <Suspense fallback={<Loader />}>
            <Films />
          </Suspense>
        ),
      },
      {
        path: "gallery",
        element: (
          <Suspense fallback={<Loader />}>
            <Gallery />
          </Suspense>
        ),
      },
      {
        path: "portfolio",
        element: (
          <Suspense fallback={<Loader />}>
            <Portfolio />
          </Suspense>
        ),
      },
      {
        path: "portfolio/:slug",
        element: (
          <Suspense fallback={<Loader />}>
            <Album />
          </Suspense>
        ),
      },
      {
        path: "services",
        element: (
          <Suspense fallback={<Loader />}>
            <Services />
          </Suspense>
        ),
      },
      {
        path :"admin",
        element:(
          <Suspense fallback={<Loader/>}>
            <Admin />
          </Suspense>
        )
      },
      {
        path:"policyPrivacy",
        element:(
          <Suspense fallback={<Loader/>}>
            <PolicyPrivacy />
          </Suspense>
        )
      }
    ],
  },
]);

export default router;
