import { useState } from "react";

import { Trash as TrashIcon } from "react-bootstrap-icons";

import s from "./style.module.css";

export default function TextCard({
  title,
  subtitle,
  content,
  onClickTrash,
  onClick,
}) {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isTrashHovered, setIsTrashHovered] = useState(false);

  const handleClickTrash = (e) => {
    e.stopPropagation();
    onClickTrash();
  };

  return (
    <div
      onClick={onClick}
      className={`card ${s.container}`}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
      style={{ borderColor: isCardHovered ? "#0d6efd" : "transparent" }}
    >
      <div className="card-body">
        <div className={s.title_row}>
          <h5 className="card-title">{title}</h5>
          <TrashIcon
            size={20}
            onMouseEnter={() => setIsTrashHovered(true)}
            onMouseLeave={() => setIsTrashHovered(false)}
            style={{ color: isTrashHovered ? "#FF7373" : "#b8b8b8" }}
            onClick={handleClickTrash}
          />
        </div>
        <h6 className="card-subtitle mb-2 text-body-secondary">{subtitle}</h6>
        <p className={`card-text ${s.text_content}`}>{content}</p>
      </div>
    </div>
  );
}
