let notesContainer=document.getElementById("modal");
let additote=document.getElementById("inner_modal");
let content=document.getElementById("user_input");
let allnotes=document.getElementById("all_notes");
let hide=document.getElementById("hide"); 
let button=document.getElementById("add_note");

button.addEventListener("click",()=>{ 
    notesContainer.style.display= "block";
});
hide.addEventListener("click" ,()=>{
    notesContainer.style.display="none";
});
content.addEventListener("keydown", function(e){ 
    if(e.keyCode === 13)
    {
     add();
     notesContainer.style.display="none"; 
     content.value ="";
    }
});

function add(){

var noteContent=content.value;

let noteElement=document.createElement("div");
noteElement.className="note";
noteElement.style.margin="-5px"; 
noteElement.style.backgroundColor="#c2ff3d";

noteElement.style.transform="rotate(-5deg)";

noteElement.innerHTML= `<div class="details">
                       <h1> ${noteContent} </h1>
                       </div>`

allnotes.appendChild(noteElement); 
content.value=""; 
notesContainer.style.display="block";
}