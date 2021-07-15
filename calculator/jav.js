var flags=0



function clicks(val)
{ 
    if(val=='+'||val=='-'||val=='/'||val=='*')  
    {   console.log("hello111")
        
        flags++  
       
        console.log(flags)
        if(flags==2)
        {
            flags=1
          equate()
        }
    } 
   
    document.getElementById("outputBox").innerText+=val;
    
}
function equate()
{
    var ans=eval(document.getElementById("outputBox").innerText)
    document.getElementById("outputBox").innerText=ans  
}
function clearall()
{
    document.getElementById("outputBox").innerText=null
}
function clears()
{
    var str=document.getElementById("outputBox").innerText;
    str=str.substring(0,str.length-1);
    document.getElementById("outputBox").innerText=str
 
}
