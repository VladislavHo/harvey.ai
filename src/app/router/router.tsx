import { createBrowserRouter } from "react-router";
// import Main from "../../pages/main/Main";
import { Layout } from "../../widgets";
import { Assistant, Knowledge, Main, Vault, Workflows } from "../../pages";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/platform/knowledge",
        element: <Knowledge />,
      },
      {
        path: "/platform/vault",
        element: <Vault />,
      },
      {
        path: "/platform/assistant",
        element: <Assistant />,
      },
      {
        path: "/platform/workflows",
        element: <Workflows />,
      }
    ],
  },
]);

export default router;