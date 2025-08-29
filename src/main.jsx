import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Homepage from "./routes/Homepage.jsx";
import PostListPage from "./routes/PostListPage.jsx";
import Write from "./routes/Write.jsx";
import ReactDOM from "react-dom/client";
import SinglePostPage from "./routes/SinglePostPage.jsx";
import MainLayout from "./layouts/Mainlayout.jsx";
import TloiM from "./routes/Tloim.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/posts",
        element: <PostListPage />,
      },
      {
        path: "/:slug",
        element: <SinglePostPage />,
      },
      {
        path: "/write",
        element: <Write />,
      },

      {
        path: "/tloi",
        element: <TloiM />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
