import { Layout } from "@/components";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./config";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Layout>
        <Routes>
          {routes.map(({ name, index, path, element }) => {
            const Component = lazy(
              () => import(`@/pages/${element}/${element}.tsx`),
            ); // * vite typescript
            // let Component = lazy(() => import(`../pages/${element}`)); // * create-react-app ;)
            return (
              <Route
                key={name}
                index={index}
                path={path}
                element={<Component />}
              />
            );
          })}
        </Routes>
      </Layout>
    </Suspense>
  );
};

export default Router;
