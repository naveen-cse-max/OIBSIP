let resultdisplay=document.getElementById('resultdisplay');
display=(num)=>{
    resultdisplay.value+=num;
}
Calculate=()=>{
    try{
        resultdisplay.value=eval(resultdisplay.value);
    }
    catch{
        alert('Invalid value entered');
        resultdisplay.value='';
    }
}
Clear=()=>{
    resultdisplay.value="";
}
del=()=>{
    resultdisplay.value=resultdisplay.value.slice(0,-1);
}