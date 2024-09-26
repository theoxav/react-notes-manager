import App from "./components/App";
import NoteBrowse from "./pages/NoteBrowse/NoteBrowse";
import Note from "./pages/Note/Note";
import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "./pages/PageNoteFound/PageNotFound";
import NoteCreate from "./pages/NoteCreate/NoteCreate";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <NoteBrowse />,
      },
      {
        path: "note/:id",
        element: <Note />,
      },
      {
        path: "note/new",
        element: <NoteCreate />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);
