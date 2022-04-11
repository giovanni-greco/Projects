export async function getCategories() {
  // Implemente aqui
  const categories = fetch(
    'https://api.mercadolibre.com/sites/MLB/categories',
  )
    .then((response) => response.json());
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const result = fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}}&q=${query}`,
  ).then((response) => response.json());
  return result;
}

export async function getProductDetails(PRODUCT_ID) {
  // Implemente aqui
  const details = fetch(`https://api.mercadolibre.com/items/${PRODUCT_ID}`).then((response) => response.json());
  return details;
}
