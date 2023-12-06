/* element = condition.getElementbyTagName("p");

function addnum()
    {
      
      let newheading=document.querySelector("h1");
      prompt("ENTER A NUMBER");
      
  
    }
    let add= document.querySelector("button");
    changeWeather2.addEventListener("click",addnum);*/

   
    const add=document.getElementsById(add);
    const minus=document.getElementsById(minus);
    const display=document.getElementsById(clock);
    let value=0;
    
    add.addEventListener("click",function()
    {
      value++;
      console.log(value);
      display.innerText(value);
    })
    minus.addEventListener("click",function()
    {
      value--;
      console.log(value);
      display.innerText(value);
    })