import React, { useEffect, useState } from "react";
import Axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  useEffect(()=>{
      
        Axios.get('http://localhost:5000/articles/')
        .then((response)=> {
          console.log(response);
          setNotes(response.data)
        }).catch((e)=>{
          console.log(e);
        })

  }, []);


function deleteNote(id) {
    Axios.delete(`http://localhost:5000/articles/${id}`)
    .then(()=>{
      location.reload(); 
    }).catch((e)=>{
        alert(e);
    })
  
}



  return (
    <div>
      <Header />

      <CreateArea/>
      {notes.map((noteItem,index) => {
        return <Note
          key= {index}
          id= {index}
          title ={noteItem.title}
          content = {noteItem.content}
          onDelete = {deleteNote}
        />
      }) }

      <Footer />
    </div>
  );
}

export default App;
