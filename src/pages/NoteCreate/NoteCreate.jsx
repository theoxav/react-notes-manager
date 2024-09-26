import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NoteAPI } from "@/services/api/note-api";
import { addNote } from "@/store/note/note-slice";

import NoteForm from "@/components/Forms/NoteForm/NoteForm";

export default function NoteCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createNote = async (note) => {
    const createdNote = await NoteAPI.create({
      ...note,
      created_at: new Date().toLocaleDateString(),
    });

    dispatch(addNote(createdNote));
    navigate("/");
  };

  return (
    <>
      <NoteForm title="Create a note" onSubmit={createNote} />
    </>
  );
}
