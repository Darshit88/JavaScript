let cartItem = [];
let totalSum = 0;

const productDetails = [
  {
    name: "product 1",
    price: 10,
    image: "product 1.jpeg",
  },
  {
    name: "product 2",
    price: 30,
    image: "product 2.jpeg",
  },
];

const productContainer = document.getElementById("product-list");

productDetails.forEach((product, index) => {
  console.log(product);
  const productDiv = document.createElement("div");
  productDiv.classList.add("product2");

  productDiv.innerHTML = ` 
        <img src="${product.image}" alt="${product.name}" /> 
        <p>Name : ${product.name}</p>
        <p class="price">Price : ${product.price}</p>
        <button class="add-to-cart">Add To Cart</button>
    `;
  productContainer.appendChild(productDiv);

  const addToCartButton = productContainer.querySelectorAll(".add-to-cart");

  addToCartButton[index].addEventListener("click", () => {
    cartItem.push({
      name: product.name,
      price: product.price,
      image: product.image,
    });
    // totalSum = totalSum + product.price
    totalSum += product.price;
    updateCart();
  });
  console.log(cartItem);
});

const updateCart = () => {
  const carList = document.getElementById("cart-item");
  const totalEle = document.getElementById("total-price");
  carList.innerHTML = "";
  cartItem.forEach((item, index) => {
    const li = document.createElement("li");
    const img = document.createElement("img");

    img.src = item.image;
    img.alt = item.name;
    img.style.width = "50px";

    li.appendChild(img);

    const br = document.createElement("br");
    li.appendChild(br);

    const details = document.createElement("span");
    details.textContent = "item.name - " + item.name;

    li.appendChild(details);
    const br1 = document.createElement("br");
    li.appendChild(br1);
    const details1 = document.createElement("span");
    details1.textContent = "item.price - " + " $ " + item.price;
    li.appendChild(details1);

    
    const br3 = document.createElement("br");
    li.appendChild(br3);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-item");
    deleteButton.addEventListener("click", () => {
      cartItem.splice(index, 1);
      totalSum -= item.price;
      updateCart();
    });
    li.appendChild(deleteButton);

    carList.appendChild(li);
  });
  totalEle.textContent = "$" + totalSum;
};
