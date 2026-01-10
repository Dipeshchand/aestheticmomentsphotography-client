// import { createBrowserRouter } from "react-router-dom";
// import { lazy, Suspense } from "react";
// import App from "./App";
// // import Home from "./page/Home";

// const IntroPage = lazy(()=>import("./page/IntroPage"));
// const Home = lazy(()=>import("./page/Home"));
// const About = lazy(()=>import("./page/About"));
// const Flims = lazy(()=>import("./page/Films"));
// const Gallery = lazy(()=>import("./page/Gallery"));
// const Portfolio =lazy(()=>import("./page/Portfolio"));
// const Services = lazy(()=>import(("./page/Services")));

// const Loader =()=>(
//     <div className="h-screen flex items-center justify-center text-lg font-light">
//         Loading....
//     </div>
// )

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element:(
//             <Suspense fallback={<Loader />} >
//                 <IntroPage />
//             </Suspense>
//         ),
//     },
//     {
//         path:"home",
//         element:(
//             <Suspense fallback={<Loader/>}>
//             <Home/>
//             </Suspense>
//         ),
//     },
//     {
//         path:"about",
//         element:(
//             <Suspense fallback={<Loader/>}>
//                 <About/>
//             </Suspense>
//         ),
//     },
//     {
//         path:"Flims",
//         element:(
//             <Suspense fallback={<Loader/>}>
//                 <Flims/>
//             </Suspense>
//         ),
//     },
//     {
//         path:"Gallery",
//         element:(
//             <Suspense fallback={<Loader/>}>
//                 <Gallery/>
//             </Suspense>
//         ),
//     },
//     {
//         path:"Portfolio",
//         element:(
//             <Suspense fallback={<Loader/>}>
//                 <Portfolio/>
//             </Suspense>
//         ),
//     },
//     {
//         path:"Services",
//         element:(
//             <Suspense fallback={<Loader/>}>
//                 <Services/>
//             </Suspense>
//         ),
//     },
// ])

// export default router;


import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "./App";

const IntroPage = lazy(() => import("./page/IntroPage"));
const Home = lazy(() => import("./page/Home"));
const About = lazy(() => import("./page/About"));
const Films = lazy(() => import("./page/Films"));
const Gallery = lazy(() => import("./page/Gallery"));
const Portfolio = lazy(() => import("./page/Portfolio"));
const Services = lazy(() => import("./page/Services"));

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
    )
  },

  // Main site with Header + Footer
  {
    path: "/",
    element: <App />,   // THIS wraps everything below
    children: [
      {
        path: "home",
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        )
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        )
      },
      {
        path: "films",
        element: (
          <Suspense fallback={<Loader />}>
            <Films />
          </Suspense>
        )
      },
      {
        path: "gallery",
        element: (
          <Suspense fallback={<Loader />}>
            <Gallery />
          </Suspense>
        )
      },
      {
        path: "portfolio",
        element: (
          <Suspense fallback={<Loader />}>
            <Portfolio />
          </Suspense>
        )
      },
      {
        path: "services",
        element: (
          <Suspense fallback={<Loader />}>
            <Services />
          </Suspense>
        )
      }
    ]
  }
]);

export default router;
