fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then(showCategories);

function showCategories(cats) {
  cats.forEach(showCategory);
}

function showCategory(cat) {
  // fanger vores template
  const template = document.querySelector("template").content;

  //cloner
  const clone = template.cloneNode(true);

  // ændrer indhold
  clone.querySelector("a").textContent = cat.category;
  clone.querySelector("a").href = `produktliste.html?category=${cat.category}`;

  //appender
  document.querySelector(".category_list").appendChild(clone);
}
