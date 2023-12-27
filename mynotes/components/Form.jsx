import { useState } from "react";
const Form=()=>{
    const submitHandler =(ev) =>{
        ev.preventDefault();
        const note = {
            mainTopic,
            subTopic,
            noteContent
        }
        console.log(note);
        
    }
    const [mainTopic,setMainTopic] = useState("");
    //console.log(note);
    const [subTopic,setSubTopic] = useState("");
    const [noteContent,setNoteContent] = useState("");

    

    return(<main>
        <form className="note-form" onSubmit={submitHandler}>
            <h1>Taking notes!</h1>
            <input type="text" placeholder="main topic" className="main-topic" value={mainTopic} onChange={(e)=>{setMainTopic(e.target.value);}}/>
            <input type="text" placeholder="sub topic" className="sub-topic" value={subTopic} onChange={(e)=>{setSubTopic(e.target.value);}}/>
            <textarea placeholder="details" value={noteContent} onChange={(e)=>{setNoteContent(e.target.value);}} />
            <button>Save</button>
        </form>
    </main>);
}

export default Form