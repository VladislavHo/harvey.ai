import { createBrowserRouter } from "react-router";
// import Main from "../../pages/main/Main";
import { Layout } from "../../widgets";
import { Assistant, InHouse, Innovation, Knowledge, Litigation, Main, Security, Transactional, Vault, Workflows } from "../../pages";






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
      },
      {
        path: "/solutions/innovation",
        element: <Innovation />,
      },
      {
        path: "/solutions/in-house",
        element: <InHouse />,
      },
      {
        path: "/solutions/transactional",
        element: <Transactional />,
      },
      {
        path: "/solutions/litigation",
        element: <Litigation />,
      },
      {
        path: "/security",
        element: <Security />,
      },

    ],
  },
]);

export default router;