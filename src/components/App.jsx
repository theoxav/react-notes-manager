import { Outlet } from "react-router-dom";
import Header from "@/components/Layouts/Header/Header";
import { useEffect } from "react";
import { NoteAPI } from "@/services/api/note-api";
import { useDispatch } from "react-redux";
import { setNoteList } from "@/store/note/note-slice";

import s from "./style.module.css";

export default function App() {
  const dispatch = useDispatch();
  const fetchAllNotes = async () => {
    const noteList = await NoteAPI.fetchAll();
    dispatch(setNoteList(noteList));
  };
  useEffect(() => {
    fetchAllNotes();
  }, []);

  return (
    <div className="container-fluid">
      <Header />
      <div className={s.outlet_container}>
        <Outlet />
      </div>
    </div>
  );
}
