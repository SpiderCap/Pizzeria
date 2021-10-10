menu_list_array = ["Veg Margherita Pizza",
"Chicken Tandoori Pizza",
"Veg Supreme Pizza",
"Paneer Tikka Pizza",
"Deluxe Veggie Pizza",
"Veg Extravaganza Pizza"];

function getmenu(){
var htmldata="";
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
htmldata=htmldata+ menu_list_array[i] + '<br>'
}
document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
var imgtags='<img id="im1" src="https://cdn.shopify.com/s/files/1/0259/7355/5288/products/pi-01_75c65b11-f265-41b3-95db-4370226dcdb3_2048x.png?v=1571333276"/>'
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata=""
for(var i=0;i<menu_list_array.length;i++){
htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
}
document.getElementById("display_addedmenu").innerHTML = htmldata;

}

function add_top(){
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();
}
