var mcq=document.getElementById("mcq");
var count=2;
var optiondiv=document.getElementById("optiondiv");
var savequestion=[];
var questionId=1;

mcq.addEventListener("click",function(event){
	createNew();
	hideAddNewProductLink(optiondiv)
});
 function createNew()
 {

	insertBlankLine(enter);
	insertBlankLine(enter);
	
	var score = document.createElement("input");
	score.setAttribute("id","score");
	score.setAttribute("type","text");
    score.setAttribute("placeholder", "Enter Score");	
	score.setAttribute("style","width:250px ; height:50px");
	enter.appendChild(score);	
	
	insertBlankLine(enter);
	insertBlankLine(enter);
	 
	var para=document.createTextNode("enable negetive marking");
	enter.appendChild(para);
	var negetive = document.createElement("input");
	negetive.setAttribute("type","checkbox");
	negetive.setAttribute("id","negetive");
	negetive.setAttribute("name","negetive");
	negetive.setAttribute("style","width:250px");
	enter.appendChild(negetive);	
	
	negetive.addEventListener("click",function(event)
	{
var negetivearea = document.createElement("input");
	negetivearea.setAttribute("type","text");
	negetivearea.setAttribute("id","negetivearea");
	negetivearea.setAttribute("placeholder","negetive marks");
	negetivearea.setAttribute("style","width:250px");
	enter.insertBefore(negetivearea, enter.children[6]);
	});
	
	insertBlankLine(enter);
	insertBlankLine(enter);
	 
	var title = document.createElement("input");
	title.setAttribute("type","text");
	title.setAttribute("id","title");
    title.setAttribute("placeholder", "Enter Title");	
	title.setAttribute("style","width:250px");
	enter.appendChild(title);	
	
	insertBlankLine(enter);
	insertBlankLine(enter);
	
	
	var questions = document.createElement("input");
	questions.setAttribute("type","textarea");
	questions.setAttribute("id","questions");
    questions.setAttribute("placeholder", "Enter Question");	
	questions.setAttribute("style","width:250px");
	enter.appendChild(questions);	
	
	insertBlankLine(enter);
	insertBlankLine(enter);
	
	var option1 = document.createElement("input");
	option1.setAttribute("type","text");
	option1.setAttribute("id","option1");
    option1.setAttribute("placeholder", "Enter option 1");	
	option1.setAttribute("style","width:250px");
	enter.appendChild(option1);
var check1 = document.createElement("input");
	check1.setAttribute("type","checkbox");
	check1.setAttribute("id","check1");
	check1.setAttribute("style","width:250px");
	enter.appendChild(check1);	
	
	insertBlankLine(enter);
	insertBlankLine(enter);
	
	
	var option2 = document.createElement("input");
	option2.setAttribute("type","text");
	option2.setAttribute("id","option2");
    option2.setAttribute("placeholder", "Enter option 2");	
	option2.setAttribute("style","width:250px");
	enter.appendChild(option2);
var check2 = document.createElement("input");
	check2.setAttribute("type","checkbox");
	check2.setAttribute("id","check2");
	check2.setAttribute("style","width:250px");
	enter.appendChild(check2);	
	
	insertBlankLine(enter);
	insertBlankLine(enter);
	
	var addmore=document.createElement("button");
	addmore.setAttribute("id","addmore");
	addmore.innerHTML="addmore";
	enter.appendChild(addmore);
	
	
	addmore.addEventListener("click",function(event)
	{
		count=count+1;
		if(count>10)
		{
			window.alert("no more options");
		}
		else{
			
	var option3 = document.createElement("input");
	option3.setAttribute("type","text");
	option3.setAttribute("id","option3");
    option3.setAttribute("placeholder", "Enter option"+count);	
	option3.setAttribute("style","width:250px");
	enter.insertBefore(option3, enter.children[19+count]);
var check3 = document.createElement("input");
	check3.setAttribute("type","checkbox");
	check3.setAttribute("id","check3");
	check3.setAttribute("style","width:250px");
	enter.insertBefore(check3, enter.children[20+count]);	
	
	insertBlankLine(enter);
	insertBlankLine(enter);
		}
	});
	
	var submitit=document.createElement("button");
	submitit.setAttribute("id","submitit");
	submitit.innerHTML="submit";
	enter.appendChild(submitit);
	
	submitit.addEventListener("click",function(event)
	{
		addProducttoArray();
		window.location.assign("dashboard1.html");
	});
	
	var cancel=document.createElement("button");
	cancel.setAttribute("id","cancel");
	cancel.innerHTML="cancel";
	enter.appendChild(cancel);
	
	cancel.addEventListener("click",function(event)
	{
		unHideAddNewProductLink(optiondiv);
		hideAddNewProductLink(enter);
	});
 }

function insertBlankLine(targetElement)
{
	var br = document.createElement("br");
    targetElement.appendChild(br);
}

function hideAddNewProductLink(optiondivs)
{
   optiondivs.setAttribute("style","visibility:hidden");
}

function unHideAddNewProductLink(optiondivs)
{
   optiondivs.setAttribute("style","visibility:visible");
}

	
function addProducttoArray()
{
	var objProduct = new Object();
	objProduct.Id = questionId;
 	objProduct.score = document.getElementById("score").value;
    objProduct.negetivearea = document.getElementById("negetivearea").value;
	objProduct.title = document.getElementById("title").value;
	objProduct.questions = document.getElementById("questions").value;
	objProduct.option1 = document.getElementById("option1").value;
	objProduct.option2 = document.getElementById("option2").value;
    savequestion.push(objProduct);
	storesavequestion(savequestion);
	questionId++;
}

function storesavequestion(savequestion)
{
localStorage.savequestion = JSON.stringify(savequestion);
}