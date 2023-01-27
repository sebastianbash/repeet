const routes = [
  {
    index: true,
    name: "home",
    path: "/",
    element: "Home",
  },
  {
    index: true,
    name: "home",
    path: "/home",
    element: "Home",
  },
  {
    index: false,
    name: "404",
    path: "*",
    element: "NotFound",
  },
];

export default routes;
