import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "./layout.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import User from "./pages/User.tsx";
import Github from "./pages/Github.tsx";
import { githubInfoLoader } from "./utils/githubInfoLoader.ts";

const routes = (
  <Route path="/" element={<Layout />}>
    <Route path="" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="user/" element={<User />}>
      <Route path=":userid" element={<User />} />
    </Route>
    <Route loader={githubInfoLoader} path="github" element={<Github />} />
    <Route path="*" element={<div>Error</div>} />
  </Route>
);

const router = createBrowserRouter(createRoutesFromElements(routes));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
