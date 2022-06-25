import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

function Createnote(props){
  let [note,setNote]=useState({
    title: "",
    text: ""
  });

  let [exp,setExp]=useState(false);

  function change(e){
    let {name,value}=e.target;
    setNote((cur)=>{
      return{
        ...cur,
        [name]:value
      };  
    });
  }

  function click(e){
    e.preventDefault();
    if(note.title!==""||note.text!==""){
      props.addNote(note);
      setNote({
        title:"",
        text:""
      });
    }
  }
  
  function call(){
    setExp(true);
  }

  function ncall(){
    console.log("fuhdfij");
    setNote({
      title:"",
      text:""
    });
    setExp(false);
  }

  return (
    <>
      <div className="main" onClick={call} onDoubleClick={ncall}>
        <form>
          {exp? <input type="text" placeholder="Title" id="title" name="title" onChange={change} value={note.title}/>:null}
          <br/>
          <textarea rows="" column="" placeholder="Write a note" id="text" name="text" onChange={change} value={note.text}/><br/><br/>
          {exp?
          <button id="add" onClick={click}>
              <AddIcon fontSize="large"/>
          </button>
          :null}
        </form>
      </div>
    </>
  );
}

export default Createnote;
