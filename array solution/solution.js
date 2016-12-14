
// revers of our array
var arr1=[1,3,5,7,9];
var arr2=[];
function reverse(ters)
{
	var j=0;
 for (var i = arr1.length-1; i >= 0; i--) 
 {
     arr2[j]=arr1[i];
    // console.log(arr1[i]);
     j++;
 }
}

reverse(arr1);

for (var i = 0; i < arr2.length; i++) {
	console.log(arr2[i]);
};

//test is it uniform
var arr3=[1,2,1,10,1];

function isituniform(arrayx)
{
	for (var i = 0; i < arr2.length; i++)
	{
		for (var j = 0; j < arr2.length; j++) {
			if (arr2[i]===arr2[j]) 
			{
				console.log("ALL ELEMENTS ARE EQUAL tatlim!");
			}
			else
			{
				console.log("ALL ELEMENTS ARE NOT EQUAL gundi");
			}
		}
	}
}

isituniform(arr2);
var sum=0;
function summum(kerry)
{
	for (var i = 0; i < kerry.length; i++) 
	{
		sum=sum+kerry[i];
    }
    console.log(sum);
}
	
summum(arr3);