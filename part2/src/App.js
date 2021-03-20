import React, { useState, useEffect } from "react";
import * as noteService from "./services/notes";

import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("a new note");
  const [showAll, setShowAll] = useState(true);

  const hook = () => {
    console.log("effect");
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  };

  useEffect(hook, []);

  console.log("render", notes.length);

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  const addNote = (event) => {
    event.preventDefault();
    // console.log("button clicked", event.target);
    const noteObj = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random < 0.5,
    };

    noteService.create(noteObj).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
      setNewNote("");
    });
  };

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    // put 替换当前的内容，patch 更改某一些属性
    noteService
      .update(id, changedNote)
      .then((returnedNote) => {
        setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)));
      })
      .catch((error) => {
        alert(`the note '${note.content}' was already deleted from server`);
        setNotes(notes.filter((n) => n.id !== id));
      });
  };

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportanceOf={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
