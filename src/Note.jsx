import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function Note(props){
  return (
    <>
        <div className="note" key={props.key}>
            <div className="n1">{props.title}</div>
            <div className="n2">{props.text}</div>
            <button className="del" onClick={()=>{props.deleteNote(props.id)}}><DeleteOutlineIcon/></button>
        </div>
    </>
  );
}

export default Note;
