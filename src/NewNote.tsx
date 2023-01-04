import { NoteData } from "./App";
import NoteForm from "./components/NoteForm";

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
};

const NewNote = ({ onSubmit }: NewNoteProps) => {
  return (
    <div>
      <h1 className="mb-4">new Note</h1>
      <NoteForm onSubmit={onSubmit} />
    </div>
  );
};

export default NewNote;
