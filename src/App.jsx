import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routesObj from "./constants/routes";
import Layout from "./components/Layout";

const routesArr = Object.values(routesObj);

const router = createBrowserRouter(
  routesArr.map((route) => {
    return {
      path: route.path,
      element: (
        <Layout heroTitle={route.heroTitle}>
          <route.component />
        </Layout>
      ),
    };
  })
);
// {
//   path: "/mustang-spotlight",
//   element: (
//     <Layout>
//       <MustangSpotlight />
//     </Layout>
//   ),
// },

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
