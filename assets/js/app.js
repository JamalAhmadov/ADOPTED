let apiUrl = "https://656f179c6529ec1c62374fff.mockapi.io/kids";
let kidsBox = document.getElementById("kidsForSaleBox");
async function render() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  data.forEach((item) => {
    console.log(item);
    kidCart = document.createElement("div");
    kidCart.className = "kidCart";
    kidsBox.innerHTML = ` 
        <img src="${item.image}" alt="">
        <p>${item.name}</p>
        <button onclick="addToCart(${item.id})">Add To Cart</button>
        `;
    kidsBox.append(kidCart);
  });
}

render();
