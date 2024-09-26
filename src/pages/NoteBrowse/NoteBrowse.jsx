import NoteList from "@/components/NoteList/NoteList";

import s from "./style.module.css";
import SearchBar from "@/components/SearchBar/SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function NoteBrowse() {
  const [searchText, setSearchText] = useState("");
  const noteList = useSelector((store) => store.NOTE.noteList);
  const filteredList = noteList.filter((note) => {
    const containsTitle = note.title
      .toLowerCase()
      .includes(searchText.trim().toLowerCase());

    const containsContent = note.content
      .toLowerCase()
      .includes(searchText.trim().toLowerCase());

    return containsTitle || containsContent;
  });

  return (
    <>
      <div className="row justify-content-center mb-5">
        <div className="col-sm-12 col-md-6">
          <SearchBar placeholder="Search..." onTextChange={setSearchText} />
        </div>
      </div>
      {noteList?.length === 0 && (
        <div className="d-flex justify-content-center">
          <span>
            Vous n'avez pas de note, voulez vous en
            <Link to="/note/new">créer une</Link>
          </span>
        </div>
      )}
      <NoteList noteList={filteredList} />
    </>
  );
}
