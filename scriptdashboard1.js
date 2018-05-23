var logout=document.getElementById("logout");
var welcome=document.getElementById("welcome");
var morequestion=document.getElementById("morequestion");
var Questions=document.getElementById("Questions");
var centreright=document.getElementById("centreright");
var savequestion = [];

savequestion=getStoredsavequestion();

logout.addEventListener("click",function(event)
{
	window.location.assign("login.html");
});

Questions.addEventListener("click",function(event)
{
	for(var i=0;i<savequestion.length;i++)
{
	questionId=savequestion[i].Id;
	addProducttoDOM(savequestion[i]);
}
});

morequestion.addEventListener("click",function(event)
{
	window.location.assign("addquestion.html");
});


function getStoredsavequestion()
{
if (!localStorage.savequestion)
{
// default to empty array
localStorage.savequestion = JSON.stringify([]);
}
return JSON.parse(localStorage.savequestion);
}

function addProducttoDOM(objProduct)
{  	
	//create a new DIV for this product 
	var divQuestion = document.createElement("div");
	divQuestion.setAttribute("id", questionId);
	
	//create a anchor for product name
	var title = document.createElement("a");
	title.setAttribute("href","#");
	title.innerHTML = objProduct.title+" ";
	divQuestion.appendChild(title);
	
	//insertBlankLine(divQuestion);
	
	//create a label for product description
	var lblProductName = document.createElement("label");
	lblProductName.innerHTML = objProduct.score+" ";
    divQuestion.appendChild(lblProductName);
	
    //insertBlankLine(divQuestion);
	
	var lblProductName = document.createElement("label");
	lblProductName.innerHTML = objProduct.negetivearea+" ";
    divQuestion.appendChild(lblProductName);
		
	//create a anchor for deleting this product
	
	var aDelete = document.createElement("button");
	aDelete.setAttribute("href","#");
	aDelete.innerHTML = "Delete";
	divQuestion.appendChild(aDelete);

	aDelete.addEventListener("click",function(event)
									  {
									   // To access the parent node of the element which is clicked
									   // Ist method
										  // var selectedProductIndex = getProductIndex(parseInt(divQuestion.id));
										  // removeFromsavequestionArray(selectedProductIndex);
                                          // divQuestion.parentNode.removeChild(divQuestion);
										  
									   // 2nd Method 
										   var targetParent = event.target.parentNode;
										   var selectedProductIndex = getProductIndex(parseInt(targetParent.id));
										   removeFromsavequestionArray(selectedProductIndex);
										   targetParent.parentNode.removeChild(targetParent);
										   
									  }
							);
							
	/*var aEdit = document.createElement("button");
	aEdit.setAttribute("href","#");
	aEdit.innerHTML = "Edit";
	divQuestion.appendChild(aEdit);

	aEdit.addEventListener("click",function(event)
	{
		var targetParent = event.target.parentNode;
		var selectedProductIndex = getProductIndex(parseInt(targetParent.id));
		flag=1;
		createNewProductPanel();
		document.getElementById("txtProductName").value=savequestion[selectedProductIndex].Name;
		document.getElementById("txtProductDesc").value=savequestion[selectedProductIndex].Desc;
		document.getElementById("txtProductPrice").value=savequestion[selectedProductIndex].Price;
		document.getElementById("txtProductQuantity").value=savequestion[selectedProductIndex].Quantity;
		removeFromsavequestionArray(selectedProductIndex);
		targetParent.parentNode.removeChild(targetParent);
		flag=0;
	}
		);					
    title.addEventListener("click",function(event)
									  {
										 var selectedProductIndex = getProductIndex(parseInt(event.target.parentNode.id));
										 getProductDetails(selectedProductIndex);
									  }
							     );*/
									  
	centreright.appendChild(divQuestion);
	
    insertBlankLine(divQuestion);
	insertBlankLine(divQuestion);
	
}

function insertBlankLine(targetElement)
{
	var br = document.createElement("br");
    targetElement.appendChild(br);
}


function removeFromsavequestionArray(selectedProductIndex)
{
	savequestion.splice(selectedProductIndex,1);
	console.log(savequestion);
	storesavequestion(savequestion);
}

function storesavequestion(savequestion)
{
localStorage.savequestion = JSON.stringify(savequestion);
}

function getProductIndex(id) 
{
    for (var i = 0; i < savequestion.length; i++) 
	{
        if (savequestion[i].Id == id) 
			return i;
    }
}