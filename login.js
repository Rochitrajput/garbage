
var login=document.getElementById("login");
var registername=document.getElementById("registername");

login.addEventListener("click", function(event)
{
	createNewProductPanel1();
});

function createNewProductPanel1()
{
	hideAddNewProductLink();
 
	var lblAddProduct = document.createElement("label");
	lblAddProduct.innerHTML = "Login Form";
	lblAddProduct.setAttribute("style","font-weight:bold");
    registername.appendChild(lblAddProduct);

	insertBlankLine(registername);
	insertBlankLine(registername);
	
	var emailLogin = document.createElement("input");
	emailLogin.setAttribute("id","emailLogin");
	emailLogin.setAttribute("type","email");
    emailLogin.setAttribute("placeholder", "Enter email");	
	emailLogin.setAttribute("style","width:250px ; height:50px");
	registername.appendChild(emailLogin);	
	
	insertBlankLine(registername);
	insertBlankLine(registername);
	 
	var passwordsLogin = document.createElement("input");
	passwordsLogin.setAttribute("type","password");
	passwordsLogin.setAttribute("id","passwordsLogin");
    passwordsLogin.setAttribute("placeholder", "Enter password");	
	passwordsLogin.setAttribute("style","width:250px");
	registername.appendChild(passwordsLogin);	
	
	insertBlankLine(registername);
	insertBlankLine(registername);
	
	var finalLogin=document.createElement("button");
	finalLogin.setAttribute("id","finalLogin");
	finalLogin.innerHTML="login";
	registername.appendChild(finalLogin);
	
	finalLogin.addEventListener("click",function(event)
	{
		window.location.assign("dashboard1.html");
	});
	
	var cancel=document.createElement("button");
	cancel.setAttribute("id","cancel");
	cancel.innerHTML="cancel";
	registername.appendChild(cancel);
	
	cancel.addEventListener("click",function(event)
	{
		deleteNewProductPanel();
		unHideAddNewProductLink();
	});
}

function hideAddNewProductLink()
{
   login.setAttribute("style","visibility:hidden");
}

function unHideAddNewProductLink()
{
   login.setAttribute("style","visibility:visible");
}

function insertBlankLine(targetElement)
{
	var br = document.createElement("br");
    targetElement.appendChild(br);
}

function validationLogin()
{
	var i=0;
	for(i=0;i<regUser.length;i++)
	{
		if(emailLogin.value==regUser[i].email)
		{
			flag=1;
			if(passwordsLogin.value==regUser[i].passwords)
			{
				break;
			}
			else 
			{
				window.alert("entered password is wrong");
				passwordsLogin.value="";
			}
		}
	}
	if(flag==0)
	{
		window.alert("entered username is wrong ");
		passwordsLogin.value="";
		emailLogin.value="";
	}
	else
	{
		storeSession(i);
		console.log(activeUser);
		window.location.assign("addToCart.html");
	}
}
