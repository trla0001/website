fetch("https://kea-alt-del.dk/t7/api/products/1525")
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".productdisplayname").textContent = product.productdisplayname;
  document.querySelector(".price").textContent = product.price;
  document.querySelector(".model_name").textContent = product.productdisplayname;
  document.querySelector(".articletype").textContent = product.articletype;
  document.querySelector(".brandname").textContent = product.brandname;
  document.querySelector(".id").textContent = product.id;
}
