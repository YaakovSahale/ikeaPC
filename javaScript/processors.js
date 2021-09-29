let container = document.getElementById("container");
let btnShop = document.getElementsByClassName("btnShop");
let btnwishlist = document.getElementsByClassName("btnwishlist");
let gpuArray = [];
let shopArray = [];

products.forEach((item) => {
  if (item.category == "processors") {
    gpuArray.push(item);
  }
});


for (let i = 0; i < products.length; i++) {
  if (products[i].category == "processors") {
    gpuArray.push(products[i]);
  }
}



for (let i = 0; i < gpuArray.length; i++) {
  container.innerHTML += `<article class="articleTab">
  <div class ="imgCon"><img class="imgA" src="${gpuArray[i].img[0]}">
  <img class="imgA" src="${gpuArray[i].img[1]}">
  </div>
  <p class="pTab">
  <span class="bold">name:</span> ${gpuArray[i].name}<br>
  <span class="bold">price: </span>${gpuArray[i].price}<br>
  <span class="bold">description:</span>${gpuArray[i].description}<br><br>
  </p>
  <div class="btnContainer">
  <button class="btnShop">add to shop</button>
  </div>
  </article>`;
}

for (let i = 0; i < btnShop.length; i++) {
  btnShop[i].onclick = () => {
    shopArray.push(gpuArray[i]);
    console.log(shopArray);
  };
}