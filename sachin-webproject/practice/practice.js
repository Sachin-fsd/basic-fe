function Listing(name, category, imageUrl, price) {
  this.name = name;
  this.category = category;
  this.imageUrl = imageUrl;
  this.price = price;
  this.sold = false;
}

function getFormData() {
  let name = document.querySelector("#name").value;
  let price = document.querySelector("#price").value;
  let category = document.querySelector("#category").value;
  let image = document.querySelector("#image").value;
  console.log("form Data Running");
  addListing(name, category, image, price);
}

function addListing(input, category, image, price) {
  let obj = {
    name: input,
    category,
    imageUrl: image,
    price,
    sold: false,
  };
  let productArr =JSON.parse(localStorage.getItem("Products")) || [];
  productArr.push(obj);

  localStorage.setItem("Products", JSON.stringify(productArr));
}

window.onload = function () {
  //  get the form here and add submit event and handle the preventDefault
  document.querySelector("#form").addEventListener("submit", list);

  function list(event) {
    event.preventDefault();
    getFormData();
  }
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    Listing,
    addListing,
  };
}
