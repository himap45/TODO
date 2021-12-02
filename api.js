const inputs = document.querySelectorAll(".input");
function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
                }

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	                    }
                }


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
                        });
document.getElementById('form1').addEventListener('submit', function(evt)
{
   evt.preventDefault();
   
   let ass=check();
   if(ass){window.location.href="home.html";}
   
 });
function check()
{
    var user = document.getElementById('user1').value;
    var pasw = document.getElementById('pwd').value;
    if (user == null || user == "")
    {
    
            alert("Please enter the username.");
            return false;
    }
        else if (pasw == null || pasw == "") 
    {
           alert("Please enter the password.");
           return false;
    }
        
       else  if(user== "admin" && pasw == "12345" )
    {
           alert( "Login Successfully..!" );
           return true;
          
    }     
       else
    {
           alert( "validation failed" );
           return false;
    }
     
    } 
