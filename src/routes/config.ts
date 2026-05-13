import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
import Skills from "../pages/Skills";
import Profile from "../pages/Profile";

const routes = [
  {
    path: "/profile",
    exact: true,
    component: Profile,
  },
  {
    path: "/projects",
    exact: true,
    component: Projects,
  },
  {
    path: "/skills",
    exact: true,
    component: Skills,
  },
  {
    path: "/experience",
    exact: true,
    component: Experience,
  },
];

export default routes;
