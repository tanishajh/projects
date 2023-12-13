let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
    let li = document.createElement("li");
    li.innerText=input.value;
    ul.append(li);
    input.value ="";
})

