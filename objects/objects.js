/* script.js */
function enrollStudent() {
    let studentName = document.getElementById('studentName').value;
    if (studentName) {
        let li = document.createElement('li');
        li.textContent = studentName;
        document.getElementById('studentList').appendChild(li);
        document.getElementById('studentName').value = '';
    }
}

function dropStudent() {
    let list = document.getElementById('studentList');
    if (list.hasChildNodes()) {
        list.removeChild(list.lastChild);
    }
}
