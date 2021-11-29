var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange=function()
{
  if(this.readyState==4 && this.status==200)
  {
    var response=JSON.parse(this.responseText);
    // console.log(response);
    
    var output="";
    for(let i=0;i<response.length;i++)
    {
     output+='<li id="my_span">' 
     if(response[i].completed==true)
     output+='<input type="checkbox" id="chk" checked disabled>'
     else   
     output+='<input type="checkbox" id="chk1" class="check_id"onClick="setTimeout(checkTotalCheckedBoxes,500)">'
    
     output+='<label for="chk" id="text">'+response[i].title+'</label></li>'
    }
    // console.log(output);
    
   document.getElementById("demo1").innerHTML=output;
  }
}
     xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
     xhttp.send();

     function checkTotalCheckedBoxes()
     {
      
            var count = $(".check_id:checked").length;
            // console.log(zzz);
            if(count==5){
              // console.log("completed");
               alert("Congrats..5 tasks have been Successfully Completed.");
            }
           
     
    
    }