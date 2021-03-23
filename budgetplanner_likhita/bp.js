var projectObj =[];

function storeInSession() {
    sessionStorage.setItem("projectinfo",JSON.stringify(projectObj))
}
function retrieveFromSession() {
    var obj = JSON.parse(sessionStorage.getItem("projectinfo"));
    console.log(obj);

}
function onFormSubmit(){
    var data = readFormData();
    insertNewRecord(data);
    projectObj.push(data);      
    resetData();

}

function readFormData() {
    var obj = {}   
    obj.client = document.getElementById("client").value;
    obj.project = document.getElementById("project").value;
    obj.budget = document.getElementById("budget").value;
    console.log(obj);
    return obj;
}
function insertNewRecord(data){
 var table = document.getElementById("projectdetails")
 var body = table.getElementsByTagName("tbody")[0];
 var newRow = body.insertRow(body.length); 

 var cell1 = newRow.insertCell(0);          
 cell1.innerHTML=data.client;               

 var cell2 = newRow.insertCell(1);          
 cell2.innerHTML=data.project;                

 var cell3 = newRow.insertCell(2);         
 cell3.innerHTML=data.budget;

}

function resetData() {
document.getElementById("client").value="";
document.getElementById("project").value="";
document.getElementById("budget").value="";
}