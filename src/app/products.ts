import {faker} from "@faker-js/faker";


export const default_products = getProducts(5);


function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

function getProducts(n_products: number): any{
  /**
   * Fakes new products with dummy text.
   */
  let prods = [];

  for (let i=0; i < n_products; i++) {
    let name = faker.commerce.product();
    let image = faker.image.technics(480, 320, true);

    let newProd = {
      id: i,
      sku: name.toUpperCase()+'-'+i,
      name: name,
      image: image,
      price: getRandomInt(2000),
      description: faker.lorem.sentence()
    };
    prods.push(newProd);
  }
  return prods;
}
