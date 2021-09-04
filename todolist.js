console.log("i will do it ok")
// when user will add a note

toshow();


document.getElementById("addNote").addEventListener("click",func1);
function func1(){
let txt = document.getElementsByClassName("notePls")[0].value;

//document.getElementsByClassName("notePls")[0].setAttribute("placeholder", "enter your note");
// let notes=localStorage.getItem("notes");
// if(notes==null){
//  myarr=[]  ; //here no keyword as to make it global it is array okkkk.
//}
//else{
//  myarr=JSON.parse(notes);
//}
myarr.push(txt);
localStorage.setItem("notes",JSON.stringify(myarr));
document.getElementsByClassName("notePls")[0].value = " ";
console.log(myarr);
toshow();
}
function toshow(){
let notes = localStorage.getItem("notes");
if(notes==null){
  myarr=[];
}
else{
  myarr=JSON.parse(notes);
}

let html = ` `;
myarr.forEach(function(element, index){

  if(element != " "){
    html+= ` <div class="card mx-3 my-2" style="width: 18rem;">
      <div class="guard card-body">
        <h5 class="card-title">Note ${index + 1}</h5>
        <p class="card-text"> ${element}</p>
        <button id="${index}" onclick="deleteNode(this.id)" class="btn btn-primary">Delete Note</button>
      </div>
    </div> `;

  }



})
let notelement = document.getElementById('notes');

if( myarr.length == 0){
notelement.innerHTML = "you did not have added any notes. use add a note button to save the note "
}
else{
notelement.innerHTML = html;
}

}

//function to delete the node
function deleteNode(index){
  let notes = localStorage.getItem("notes");
  if(notes==null){
    myarr=[];
  }
  else{
    myarr=JSON.parse(notes);
  }
myarr.splice(index,1);
localStorage.setItem("notes",JSON.stringify(myarr));
toshow();
console.log("i am deleting",index);
}


// to search the elements
document.getElementById("search").addEventListener("input",func4);
function func4(){
let srchtxt = document.getElementById("search").value;
console.log('input event is fired',srchtxt);
let field = document.getElementsByClassName('guard');
let myarr= Array.from(field);
console.log(myarr);
myarr.forEach(function(element){
let txtfield = element.getElementsByTagName("p")[0].innerText;
console.log(txtfield);
if(txtfield.includes(srchtxt)){
  element.style.display = "block";
}
else{
  element.style.display = "none";
}



})

}
