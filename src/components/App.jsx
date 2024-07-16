import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = React.useState([]);

  function addNotes(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNote) => {
      return prevNote.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNotes={addNotes} />
      {notes.map((props, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={props.title}
            content={props.content}
            onChecked={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
