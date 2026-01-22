import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Homepage from "./routes/Homepage.jsx";
import PostListPage from "./routes/PostListPage";
import Write from "./routes/Write.jsx";
import SinglePostPage from "./routes/SinglePostPage";
import MainLayout from "./layouts/MainLayout";
import TloiM from "./routes/Tloim.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
        path: "/novel/:novelId/book/:bookId/chapter/:chapterId",
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
