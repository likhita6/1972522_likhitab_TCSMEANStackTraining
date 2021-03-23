



var itemList = []
function storeInSession():void{
    sessionStorage.setItem("Items",JSON.stringify(itemList));
    console.log(JSON.stringify(itemList))
}
function retrieveFromSession(){
    let list = JSON.parse(sessionStorage.getItem("Items"));
    console.log(list[0].itemname);
    return list;
}

function incrementValue(buttonId):void{
    let addbtn = document.getElementById(buttonId);
    let parent = addbtn.parentElement;
    let name = parent.getElementsByTagName("h1").item(0).innerHTML;
    let price = parseInt(parent.getElementsByTagName("p").item(0).innerHTML);
    
   console.log(price)
    let item = {
        itemname: name,
        itemprice: price
        
    };
    itemList.push(item)
    updateCartSize()
}




function updateValue(list){
    
    let table = document.getElementById("itemList")
    let body = table.getElementsByTagName("tbody")[0];
    let i;
    let totalcost = 0;
    console.log(list.length)
    for (i = 0; i < list.length; i++){
        let newRow = body.insertRow(-1); 
        let cell1 = newRow.insertCell(0);         
        cell1.innerHTML=list[i].itemname;               
    
        let cell2 = newRow.insertCell(1);          
        cell2.innerHTML=list[i].itemprice;                 // value placed

        totalcost = totalcost + parseInt(list[i].itemprice);
    }
    document.getElementById("total").innerHTML = totalcost.toString();
}
let cartSize=0;

function updateCartSize(){
    cartSize++;
    let cartTotal = document.getElementById("cartSize");
    cartTotal.innerHTML='Cart Size: '+ cartSize;


}

var data = retrieveFromSession()
updateValue(data)