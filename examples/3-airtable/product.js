const result = document.querySelector('.result');

const fetchProduct = async () => {
  result.innerHTML = '<h2>Loading...</h2>';

  try {
    const id = window.location.search;
    const {
      data: { fields },
    } = await axios.get(`/api/3-product${id}`);

    const { name, price, desc, image } = fields;
    const url = image[0].url;

    result.innerHTML = `<h1 class="title">Single Product</h1>
  <article class="product">
    <img class="product-img"
    src="${url}"
    alt="${name}"
    />
    <div class="product-info">
      <h5 class="title">${name}</h5>
      <h5 class="price">$${price}</h5>
      <p class="desc">${desc}</p>
    </div>
  </article>`;
  } catch (error) {
    result.innerHTML = '<h2>Something went wrong</h2>';
  }
};

fetchProduct();
