const products = [
  {id: 1, title: 'Notebook', price: 20000},
  {id: 2, title: 'Mouse', price: 1500},
  {id: 3, title: 'Keyboard', price: 5000},
  {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title, price, img = "https://unsplash.it/150/150?random&amp;gravity=3") => {
  return `<div class="product-item">
            <h3>${title}</h3>
            <img src=${img}>
            <p>${price}</p>
            <button class="by-btn">Добавить в корзину</button>
          </div>`;
};

const renderProducts = (list) => {
  const productList = list.map((good) => {
    return renderProduct(good.title, good.price);
  
  });
  const productCheckList = productList.join(' ');

 document.querySelector('.products').innerHTML = productCheckList;
};

renderProducts(products);
