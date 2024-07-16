import React from "react";

function CreateArea(props) {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  function handleTitle(event) {
    const newTitle = event.target.value;
    setTitle(newTitle);
  }

  function handleContent(event) {
    const newContent = event.target.value;
    setContent(newContent);
  }

  function handleClick(event) {
    event.preventDefault();
    props.addNotes({
      title: title,
      content: content,
    });
    setTitle("");
    setContent("");
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleTitle}
          value={title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleContent}
          value={content}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
