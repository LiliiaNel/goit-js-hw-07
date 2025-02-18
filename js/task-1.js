const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll("li.item");

console.log(`Number of categories: ${categoryItems.length}`);


categoryItems.forEach((item) => {
    const headText = item.querySelector("h2").textContent;
    console.log(`Category: ${headText}`);
    const itemsNumber = item.querySelectorAll("li").length;
    console.log(`Elements: ${itemsNumber}`);
});