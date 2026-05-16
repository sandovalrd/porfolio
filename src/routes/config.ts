import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
import Skills from "../pages/Skills";
import Profile from "../pages/Profile";

const routes = [
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/projects",
    component: Projects,
  },
  {
    path: "/skills",
    component: Skills,
  },
  {
    path: "/experience",
    component: Experience,
  },
];

export default routes;
