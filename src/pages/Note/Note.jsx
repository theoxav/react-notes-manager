import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { NoteAPI } from "@/services/api/note-api";
import { deleteNote, updateNote } from "@/store/note/note-slice";

import NoteForm from "@/components/Forms/NoteForm/NoteForm";

import s from "./style.module.css";

export default function Note() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const note = useSelector((store) =>
    store.NOTE.noteList.find((note) => note.id === id)
  );
  const [isEditable, setIsEditable] = useState(false);

  const submit = async (formValues) => {
    const updatedNote = await NoteAPI.update({ ...formValues, id });
    dispatch(updateNote(updatedNote));
    setIsEditable(false);
  };

  const handleDeleteNote = async (note) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      await NoteAPI.deleteById(note.id);
      dispatch(deleteNote(note));
      navigate("/");
    }
  };

  return (
    <>
      {note && (
        <NoteForm
          isEditable={isEditable}
          title={isEditable ? "Edit note" : note.title}
          note={note}
          onClickEdit={() => setIsEditable(!isEditable)}
          onClickTrash={() => handleDeleteNote(note)}
          onSubmit={isEditable && submit}
        />
      )}
    </>
  );
}
