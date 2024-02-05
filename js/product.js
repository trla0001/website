const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".product_img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector(".productdisplayname").textContent = product.productdisplayname;
  document.querySelector(".price").textContent = product.price;
  document.querySelector(".model_name").textContent = product.productdisplayname;
  document.querySelector(".articletype").textContent = product.articletype;
  document.querySelector(".brandname").textContent = product.brandname;
  document.querySelector(".id").textContent = product.id;
}
