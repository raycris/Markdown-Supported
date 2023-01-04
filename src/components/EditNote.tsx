import { NoteData, Tag } from "../App";

import { useNote } from "../NoteLayout";

import NoteForm from "./NoteForm";

type NewNoteProps = {
  onSubmit: (id: string, data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

const EditNote = ({ onSubmit, onAddTag, availableTags }: NewNoteProps) => {
  const note = useNote();
  return (
    <div>
      <h1 className="mb-4">edit Note</h1>
      <NoteForm
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
        onSubmit={(data) => onSubmit(note.id, data)}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </div>
  );
};

export default EditNote;
