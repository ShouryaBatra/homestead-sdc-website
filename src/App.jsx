import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routesObj from "./constants/routes";
import Layout from "./components/Layout";

const routesArr = Object.values(routesObj)?.filter((item) => !item?.isMenu); // handle summaries menu

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

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
