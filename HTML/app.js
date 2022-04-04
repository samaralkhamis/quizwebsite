let Name=document.getElementById("Name");
function GetDataFromLocalStorage(){
    let storageData=localStorage.getItem('formData');
    let parsData=JSON.parse(storageData);
    getName(parsData);

}
GetDataFromLocalStorage();
getName(parsData);
function getName(parsData){
    parsData.map(function(i){

        Name.innerHTML=`${parsData[i].fname}`;
    })

}