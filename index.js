
 function display(input) 
 {
    document.getElementById("output").value += input;
   }

function eql()
{
    var ans=document.getElementById("output").value;
    var temp=eval(ans);
    document.getElementById("output").value=temp;
   
    document.getElementById("his").value+=`${ans}=${temp}`
}
function CLS() 
{
    document.getElementById("output").value = "";
}
  