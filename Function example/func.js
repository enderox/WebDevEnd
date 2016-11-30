var fac = prompt("faktoriyelini almak istedigin sayi :");

function factorial(fac)
{
  if (fac == 0) 
  {
  	console.log(1);
  }
  else if (fac > 0)
   {
   	var sayi=1;
     for (var i = fac; i > 1; i--) 
     {
     	sayi=i*sayi;
     }
     console.log(sayi);
   }
   else
   {
   	console.log("negatif sayı yada sayı olmayan bişey girdin !");
   }
}

 factorial(fac);

var numb = prompt("enter a num:");

function isEven(numb)
{
  if (numb%2!==0) 
  {
    console.log(numb+" is not even");
  }
  else
  {
  console.log(numb+" is even");
}
}

isEven(numb);

var str1 = prompt("kebab formatli birsey gir");

function kebabtosnake(str)
{
 alert("Kebabtan snake'e :"+str.replace(/-/g,"_"));
}

kebabtosnake(str1);

