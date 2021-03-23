var itemList = [];
function storeInSession() {
    sessionStorage.setItem("Items", JSON.stringify(itemList));
    console.log(JSON.stringify(itemList));
}
function retrieveFromSession() {
    var list = JSON.parse(sessionStorage.getItem("Items"));
    console.log(list[0].itemname);
    return list;
}
function incrementValue(buttonId) {
    var addbtn = document.getElementById(buttonId);
    var parent = addbtn.parentElement;
    var name = parent.getElementsByTagName("h1").item(0).innerHTML;
    var price = parseInt(parent.getElementsByTagName("p").item(0).innerHTML);
    console.log(price);
    var item = {
        itemname: name,
        itemprice: price
    };
    itemList.push(item);
    updateCartSize();
}
function updateValue(list) {
    var table = document.getElementById("itemList");
    var body = table.getElementsByTagName("tbody")[0];
    var i;
    var totalcost = 0;
    console.log(list.length);
    for (i = 0; i < list.length; i++) {
        var newRow = body.insertRow(-1);
        var cell1 = newRow.insertCell(0);
        cell1.innerHTML = list[i].itemname;
        var cell2 = newRow.insertCell(1);
        cell2.innerHTML = list[i].itemprice; // value placed
        totalcost = totalcost + parseInt(list[i].itemprice);
    }
    document.getElementById("total").innerHTML = totalcost.toString();
}
var cartSize = 0;
function updateCartSize() {
    cartSize++;
    var cartTotal = document.getElementById("cartSize");
    cartTotal.innerHTML = 'Cart Size: ' + cartSize;
}
var data = retrieveFromSession();
updateValue(data);
