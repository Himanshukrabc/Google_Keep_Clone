import React, { useState } from "react";
import Header from "./Header";
import Createnote from "./Createnote";
import Footer from "./Footer";
import Note from "./Note";

function App(){
  let [list,setList]=useState([]);

  function deleteNote(x){
    setList((list)=>{
      return (list.filter((ele,ind)=>{
        return ind!==x;
      }));
    });
  }

  function addNote(x){
    setList((cur)=>{
      return ([...cur,x]);
    });
  }
  
  return (
    <>
      <Header/>
      <Createnote addNote={addNote}/>
      {list.map((val,ind)=>{
        return <Note title={val.title} text={val.text} key={ind} id={ind} deleteNote={deleteNote}/>
      })}
      <Footer/>
    </>
  );
}

export default App;
