
var selectedRow =  null;
//
function onFormSubmit(e){
event.preventDefault();
var formData = readFormData();

if(selectedRow == null){

    insertNewRecord(formData);
    console.log("inserted", formData);

}else{
    updateRecord(formData);
    console.log("updated", formData);

}

}
//retrieve data
function readFormData(){
var formData = {};
formData["studentId"] = document.getElementById("studentId").value;
formData["studentName"] = document.getElementById("studentName").value;
formData["studentCourse"] = document.getElementById("studentCourse").value;
formData["studentSection"] = document.getElementById("studentSection").value;



return formData;
}

//insert data
function insertNewRecord(data){
    var table = document.getElementById("studentList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.studentId;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.studentName;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.studentCourse;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = DataTransferItem.studentSection;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//edit data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('studentId').value = selectedRow.cells[0].innerHTML;
    document.getElementById('studentName').value = selectedRow.cells[1].innerHTML;
    document.getElementById('studentCourse').value = selectedRow.cells[2].innerHTML;
    document.getElementById('studentSection').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
selectedRow.cells[0].innerHTML = formData.studentId;
selectedRow.cells[1].innerHTML = formData.studentName;
selectedRow.cells[2].innerHTML = formData.studentCourse;
selectedRow.cells[3].innerHTML = formData.studentSection;
}

function onDelete(td){
    if(confirm('Do you want to Delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById("studentList").deleteRow(row.rowIndex)
        resetForm()
    }
}

function resetForm(){
    document.getElementById("studentId").value= '';
    document.getElementById("studentName").value= '';
    document.getElementById("studentCourse").value= '';
    document.getElementById("studentSection").value= '';
selectedRow = null;
}