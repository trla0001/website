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
  copy.querySelector(".price").textContent = product.price;
  copy.querySelector(".discount").textContent = product.discount;

  // Link
  copy.querySelector(".product_article a").setAttribute("href", `produkt.html?id=${product.id}`);

  // Sold out
  if (product.soldout >= 1) {
    copy.querySelector(".product_soldOut").classList.remove("hide");
    copy.querySelector(".product_article").classList.add("soldOut");
  }

  // Discount
  if (product.discount) {
    copy.querySelector(".product_discount").classList.remove("hide");
    copy.querySelector(".product_price").classList.remove("product_price");

    copy.querySelector(".product_article").classList.add("product_discount");
  }

  //appende
  document.querySelector("main").appendChild(copy);
}
