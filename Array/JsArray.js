var arr = [];
var arr1 ;

var input=prompt("What do you want?");
while(input !=="quit")
{
	if (input==="new") 
	{
	arr1 = prompt("Enter a num");
	arr.push(arr1);
	console.log(arr);

    }
else if (input==="list")
   {
 	console.log(arr);
   }
else if (input==="quit") 
   {
   
   } 
else
   {
	alert("hatali giris");
	input=prompt("What do you want?");
   }
 var input=prompt("What do you want?");
}	

