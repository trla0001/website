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
  copy.querySelector(".product_img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(".productdisplayname").textContent = product.productdisplayname;
  copy.querySelector(".brandname").textContent = product.brandname;
  copy.querySelector(".prev_price").textContent = product.price;
  copy.querySelector(".now_price").textContent = product.price;
  copy.querySelector(".discount").textContent = product.discount;

  copy.querySelector(".product_card a").setAttribute("href", `produkt.html?id=${product.id}`);

  //appende
  document.querySelector("main").appendChild(copy);
}
