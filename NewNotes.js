console.log("WElcome to another chance");
var localnotes;
if (localStorage.getItem('Notes')) {
    localnotes = JSON.parse(localStorage.getItem('Notes'));
}
else {
    localnotes = [];
}

showNotes();

let addbtn = document.getElementById("addbtn");

addbtn.addEventListener('click', function () {
    let txtxarea = document.getElementById('txtareanote');
    let txtareaval = txtxarea.value;
    if(txtareaval==''){
        alert('Please Enter Something..!')
    }else{
    console.log(txtareaval);
    localnotes.push(txtareaval);
    localStorage.setItem('Notes', JSON.stringify(localnotes));
    showNotes();
    txtxarea.value='';
    }
});

function showNotes() {
    var html = '';
        console.log(localnotes.length);
    if (localnotes.length === 0) {
        html = `<b>There is No Notes to Show ...Add A New Note</b>`;
        let noteCards = document.querySelector('.noteCards');
        noteCards.innerHTML = html;
    }
    else {
        console.log(localnotes);
        localnotes.forEach(function (element, index) {
            html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem";>
                                <div class="card-body">
                                    <h5 class="card-title">Note ${index + 1}</h5>
                                    <p class="card-text"> ${element}</p>
                                    <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                                </div>
                            </div>`;
        })
    
    let noteCards = document.querySelector('.noteCards');
    // console.log(noteCards);
    noteCards.innerHTML = html;
    }
}
//Delete All
let deleteallbtn=document.querySelector('#deleteallbtn');
deleteallbtn.addEventListener('click',function(){ 
     localStorage.clear();
    showNotes();
})
function deleteNote(index) {
    localnotes.splice(index, 1);
    localStorage.setItem("Notes", JSON.stringify(localnotes));
    showNotes();
    
}