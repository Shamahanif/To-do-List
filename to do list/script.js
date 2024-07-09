 const addUserBtn =document.getElementById('addUser');
 const usernameTextfield= document.getElementById('username');
 const recordsDisplay= document.getElementById('records')
let UserArray = [];

 let objStr = localStorage.getItem('users');
 if(objStr!=null){

    UserArray= JSON.parse(objStr);
 }
 DisplayInfo();

 addUserBtn.onclick=()=> {
    const name = usernameTextfield.value;
    UserArray.push({name:name});
    SaveInfo(UserArray);
    usernameTextfield.value='';

    DisplayInfo();
 }



 function SaveInfo(UserArray){
  let str =   JSON.stringify(UserArray);
localStorage.setItem('users' , str);

 }


 function DisplayInfo(){
 let statement='';
 UserArray.forEach((user ,i )=> {
    statement += '<tr><th scope="row">${i+1}</th><td> ${user.name}</td><td> </i>  <i class=" btn fas fa-edit btn-danger" onclick="EditInfo(${i})"></i><i class=" btn fa-solid fa-trash text-white btn-info mx-3" onclick="DeleteInfo(${i})"></td> </tr>';
    
 });
 recordsDisplay.innerHTML=statement;
 }
 
 function EditInfo(id){

 }

 function DeleteInfo(id){
alert(id);
 }