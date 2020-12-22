import React, { useState } from "react";
import Axios from "axios";

function CreateArea(props) {

  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");

  function submitNote(e){
      e.preventDefault();
      Axios.post('http://localhost:5000/articles/', 
      { 
        title: title, 
        content: content, 
      }).then(()=> {
         alert("data is save");
         location.reload(); 
      }).catch(()=>{
        alert('aww, It didnt worked');
      });
  }

  return (
    <div>
      <form>
        <input onChange={(e) => settitle(e.target.value)} value={title} placeholder="Title" />
        <textarea onChange={(e) => setcontent(e.target.value)} value={content} placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
