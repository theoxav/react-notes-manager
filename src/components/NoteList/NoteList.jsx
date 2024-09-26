import { useDispatch } from "react-redux";

import s from "./style.module.css";
import TextCard from "../UI/TextCard/TextCard";
import { useNavigate } from "react-router-dom";
import { NoteAPI } from "@/services/api/note-api";
import { deleteNote } from "@/store/note/note-slice";

export default function NoteList({ noteList }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDeleteNote = async (note) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      await NoteAPI.deleteById(note.id);
      dispatch(deleteNote(note));
    }
  };

  return (
    <div className={`row justify-content-center`}>
      {noteList.map((note) => (
        <div key={note.id} className={s.card_container}>
          <TextCard
            title={note.title}
            subtitle={note.subtitle}
            content={note.content}
            onClick={() => navigate(`/note/${note.id}`)}
            onClickTrash={() => handleDeleteNote(note)}
          />
        </div>
      ))}
    </div>
  );
}
