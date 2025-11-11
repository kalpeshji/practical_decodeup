import type { JSX } from "react";
import Home from "../pages/Home";

interface Route {
  name: string;
  component: JSX.Element;
}

export const ROUTES: Route[] = [
  { name: "/", component: <Home /> },
];
