async function getPizza(){
const response=await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
const data=await response.json();
const pizza=data.recipes;
const count=data.count;
document.querySelector('.count').textContent += count;

const result=pizza.map(function(item){

  return`<div class='type'>
        <h2>${item.title}</h2>
        <img src='${item.image_url}'/>
  `
}).join('');
document.querySelector('.Pizza .row').innerHTML=result;
}

getPizza();
























