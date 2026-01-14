// import { createBrowserRouter } from "react-router-dom";
// import { lazy, Suspense } from "react";
// import App from "./App";
// // import Admin from "./page/Admin";
// import ProtectedRoute from "./components/ProtectedRoute";
// import PublicRoute from "./components/PublicRoute";

// const IntroPage = lazy(() => import("./page/IntroPage"));
// const Home = lazy(() => import("./page/Home"));
// const PolicyPrivacy = lazy(() => import("./page/PolicyPrivacy"));
// const Films = lazy(() => import("./page/Films"));
// const Gallery = lazy(() => import("./page/Gallery"));
// const Portfolio = lazy(() => import("./page/Portfolio"));
// const Services = lazy(() => import("./page/Services"));
// const Album = lazy(() => import("./page/Album"));
// const Admin =lazy(()=>import("./page/Admin"));
// const About = lazy(()=>import("./page/About"));
// const Login = lazy(()=>import("./page/Login"));


// const Loader = () => (
//   <div className="h-screen flex items-center justify-center text-lg font-light">
//     Loading...
//   </div>
// );

// const router = createBrowserRouter([
//   // Intro page (NO header/footer)
//   {
//     path: "/",
//     element: (
//       <Suspense fallback={<Loader />}>
//         <IntroPage />
//       </Suspense>
//     ),
//   },

//   // Main site with Header + Footer
//   {
//     path: "/",
//     element: <App />, // THIS wraps everything below
//     children: [
//       {
//         path: "home",
//         element: (
//           <Suspense fallback={<Loader />}>
//             <Home />
//           </Suspense>
//         ),
//       },
//       {
//         path: "about",
//         element: (
//           <Suspense fallback={<Loader />}>
//             <About />
//           </Suspense>
//         ),
//       },
//       {
//         path: "films",
//         element: (
//           <Suspense fallback={<Loader />}>
//             <Films />
//           </Suspense>
//         ),
//       },
//       {
//         path: "gallery",
//         element: (
//           <Suspense fallback={<Loader />}>
//             <Gallery />
//           </Suspense>
//         ),
//       },
//       {
//         path: "portfolio",
//         element: (
//           <Suspense fallback={<Loader />}>
//             <Portfolio />
//           </Suspense>
//         ),
//       },
//       {
//         path: "portfolio/:slug",
//         element: (
//           <Suspense fallback={<Loader />}>
//             <Album />
//           </Suspense>
//         ),
//       },
//       {
//         path: "services",
//         element: (
//           <Suspense fallback={<Loader />}>
//             <Services />
//           </Suspense>
//         ),
//       },
//       {
//         path :"admin",
//         element:(
//           <Suspense fallback={<Loader/>}>
//             <Admin />
//           </Suspense>
//         )
//       },
//       {
//         path:"policyPrivacy",
//         element:(
//           <Suspense fallback={<Loader/>}>
//             <PolicyPrivacy />
//           </Suspense>
//         )
//       },
//       {
//         path:"login",
//         element:(
//           <Suspense fallback={<Loader/>}>
//             <Login />
//           </Suspense>
//         )
//       },
//       {
//         path:"/",
//         element:(
//           <Suspense fallback={<Loader />}>
//             <IntroPage/>
//           </Suspense>
//         )
//       },
//     ],
//   },
// ]);

// export default router;


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
const Privacy = lazy(()=>import("./page/PolicyPrivacy"))

const Loader = () => (
  <div className="h-screen flex items-center justify-center text-lg">
    Loading...
  </div>
);

const router = createBrowserRouter([
  /* Intro page (no header/footer) */
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <IntroPage />
      </Suspense>
    ),
  },

  /* Public Website */
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
      {path:"privacy-policy", element:<Privacy />}
    ],
  },

  /* 🔓 Public only (Login) */
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

  /* 🔒 Protected (Admin) */
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
    ],
  },
]);

export default router;

