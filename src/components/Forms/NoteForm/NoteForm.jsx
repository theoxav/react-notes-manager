import { FormValidator } from "@/services/validations/form-validation";
import Button from "@/components/UI/Button/Button";
import s from "./style.module.css";

import { PencilFill, TrashFill } from "react-bootstrap-icons";
import { useState } from "react";
import FieldError from "../FieldError/FieldError";

const VALIDATORS = {
  title: (value) => {
    return FormValidator.min(value, 3) || FormValidator.max(value, 20);
  },
  content: (value) => {
    return FormValidator.min(value, 3);
  },
};
export default function NoteForm({
  isEditable = true,
  note,
  title,
  onClickEdit,
  onClickTrash,
  onSubmit,
}) {
  const [formValues, setFormValues] = useState({
    title: note?.title || "",
    content: note?.content || "",
  });
  const [formErrors, setFormErrors] = useState({
    title: note?.title ? undefined : "",
    content: note?.content ? undefined : "",
  });

  const updateFormValues = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    validate(e.target.name, e.target.value);
  };

  const validate = (fieldName, fieldValue) => {
    setFormErrors({
      ...formErrors,
      [fieldName]: VALIDATORS[fieldName](fieldValue),
    });
  };

  const hasErrors = () => {
    return Object.values(formErrors).some((error) => error !== undefined);
  };

  const actionIcons = (
    <>
      <div className="col-1">
        {onClickEdit && <PencilFill className={s.icon} onClick={onClickEdit} />}
      </div>
      <div className="col-1">
        {onClickTrash && (
          <TrashFill className={s.icon} onClick={onClickTrash} />
        )}
      </div>
    </>
  );

  const titleInput = (
    <div className="mb-5">
      <label className="form-label">Title</label>
      <input
        onChange={updateFormValues}
        type="text"
        name="title"
        className="form-control"
        value={formValues.title}
      />
      <FieldError msg={formErrors.title} />
    </div>
  );

  const contentInput = (
    <div className="mb-5">
      <label className="form-label">Content</label>
      <textarea
        onChange={updateFormValues}
        type="text"
        name="content"
        className="form-control"
        rows="5"
        value={formValues.content}
      />
      <FieldError msg={formErrors.content} />
    </div>
  );

  const submitButton = (
    <div className={s.submit_btn}>
      <Button isDisabled={hasErrors()} onClick={() => onSubmit(formValues)}>
        Submit
      </Button>
    </div>
  );

  return (
    <div className={s.container}>
      <div className="row justify-content-space-between">
        <div className="col-10">
          <h2 className="mb-3">{title}</h2>
        </div>
        {actionIcons}
      </div>
      <div className={`mb-3 ${s.title_input_container}`}>
        {isEditable && titleInput}
      </div>
      <div className="mb-3">
        {isEditable ? contentInput : <pre>{note.content}</pre>}
      </div>
      {onSubmit && submitButton}
    </div>
  );
}
