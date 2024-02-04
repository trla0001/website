fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then((data) => showProducts(data));

function showProducts(products) {
  //looper og kalder showProducts
  products.forEach(showProduct);
}
function showProduct(product) {
  //fange template
  const template = document.querySelector("template").content;

  //lave kopi
  const copy = template.cloneNode(true);

  //ændre indhold
  copy.querySelector(".productdisplayname").textContent = product.productdisplayname;
  copy.querySelector(".brandname").textContent = product.brandname;
  copy.querySelector(".prev_price").textContent = product.price;
  copy.querySelector(".now_price").textContent = product.price;
  copy.querySelector(".discount").textContent = product.discount;

  //appende
  document.querySelector("main").appendChild(copy);
}
