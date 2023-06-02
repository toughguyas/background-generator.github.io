var button=document.getElementById("enter");
var input=document.getElementById("userinput");
var ul=document.querySelector("ul");
/*button.addEventListener("click",function(){
	if(input.value.length>0){
	var li=document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
}
})
input.addEventListener("keypress",function(event){
	if(input.value.length>0 && event.which === 13){
	var li=document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
}
})*/
function inputLength()
{
	return input.value.length;
}
function createElementList()
{
var li=document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";	
}
function addListAfterClick()
{
	if(inputLength()>0){
		createElementList();
	}
}
function addlistafterKeyPress(event)
{
	if(inputLength()>0 && event.which === 13)
	{
		createElementList();
	}

}
button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addlistafterKeyPress);