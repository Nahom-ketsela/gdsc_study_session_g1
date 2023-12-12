'use strict'
const btn=document.querySelector('.btn');
const del=document.querySelector('.del');
const idxnum=document.querySelector('.idxnum');
const index=document.querySelector('.index');
let indxnum=0,list=[];
const editbtn=document.querySelector('.editbtn');
btn.addEventListener('click',function(){
  let todo=document.getElementById('Todo').value;
    let newtodo=document.createElement('p');
    newtodo.textContent="✔ " + todo;
    document.querySelector('.lists').appendChild(newtodo);
    document.getElementById('Todo').value= '';
});
del.addEventListener('click',function(){
    let del_txt="✔ " + document.querySelector(".deleted_txt").value;
    list=document.querySelectorAll('.lists p');
    for(let i=0;i<list.length;i++){
        if(del_txt===list[i].textContent){
            console.log(i);
           list[i].textContent='';
        }
    }
    document.querySelector('.deleted_txt').value= '';

})
idxnum.addEventListener('click',function(){
   indxnum=index.value;
})
editbtn.addEventListener('click',function(){
    console.log(list.length);
    console.log(indxnum);
 let edittxt="✔ " + document.getElementById('edittxt').value;
   list[indxnum+1].textContent=edittxt;
})





