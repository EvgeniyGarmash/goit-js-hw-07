const categories = document.querySelectorAll('.item');
categories.log = `Number of categories: ${categories.length}`;
console.log(categories.log);
categories.forEach(category => {
    let headText = category.querySelector('h2');
    let count = category.querySelectorAll('li');
    console.log(`Category: ${headText.textContent}`);
    console.log(`Elements: ${count.length}`);
});