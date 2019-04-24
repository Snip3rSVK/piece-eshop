/* eslint-disable no-shadow */
const products = [
  {
    id: 1,
    title: 'Mliečna čokoláda s karamelom',
    price: 27.54,
    inventory: 3,
    weight: 512,
    category: 'whiteChocolate',
    alergens: ['WWWWWWW', 'QQQQQQQQQQQQ'],
    nutritionValues: {
      blabla: 35.4,
      blabla2: 21.1,
    },
    description: `
      Marshmallow icing chocolate bar sweet roll cake cake. Pastry lemon drops jujubes cake dessert ice cream. Apple pie dessert pudding dragée lemon drops gummi bears tart jelly beans.
      Macaroon wafer gummi bears biscuit. Halvah cupcake dragée icing. Liquorice cookie topping tootsie roll candy marzipan candy canes. Cotton candy topping donut candy chupa chups.
      Lollipop apple pie bear claw jujubes. Macaroon apple pie pastry cake pudding candy canes lemon drops carrot cake. Cake soufflé jujubes pastry soufflé macaroon.
      Liquorice ice cream ice cream. Dragée sugar plum gummies pie. Dessert bonbon jelly fruitcake chocolate cake chupa chups bear claw cookie croissant.
      Wafer donut soufflé brownie jelly beans. Cake tart marshmallow jelly beans tart sugar plum tart chocolate. Sweet pastry marzipan tiramisu wafer tootsie roll caramels
    `,
  },
  {
    id: 2,
    title: 'Macondo Paradise',
    price: 12.99,
    inventory: 10,
    weight: 512,
    category: 'whiteChocolate',
    alergens: ['sjfhsj', 'AAAAAA'],
    nutritionValues: {
      blabla: 15.9,
      blabla2: 1.1,
      ttttla4: 1.1,
      blttttta2: 1.1,
    },
    description: `
      Marshmallow icing chocolate bar sweet roll cake cake. Pastry lemon drops jujubes cake dessert ice cream. Apple pie dessert pudding dragée lemon drops gummi bears tart jelly beans.
      Macaroon wafer gummi bears biscuit. Halvah cupcake dragée icing. Liquorice cookie topping tootsie roll candy marzipan candy canes. Cotton candy topping donut candy chupa chups.
      Lollipop apple pie bear claw jujubes. Macaroon apple pie pastry cake pudding candy canes lemon drops carrot cake. Cake soufflé jujubes pastry soufflé macaroon.
      Liquorice ice cream ice cream. Dragée sugar plum gummies pie. Dessert bonbon jelly fruitcake chocolate cake chupa chups bear claw cookie croissant.
      Wafer donut soufflé brownie jelly beans. Cake tart marshmallow jelly beans tart sugar plum tart chocolate. Sweet pastry marzipan tiramisu wafer tootsie roll caramels
    `,
  },
  {
    id: 3,
    title: 'Santander Magic 85%',
    price: 18.99,
    inventory: 6,
    category: 'blackChocolate',
    alergens: ['alergen1', 'alergen2'],
    nutritionValues: {
      EEEEE: 30.4,
      SSSSS: 17.9,
    },
    description: `
      Marshmallow icing chocolate bar sweet roll cake cake. Pastry lemon drops jujubes cake dessert ice cream. Apple pie dessert pudding dragée lemon drops gummi bears tart jelly beans.
      Macaroon wafer gummi bears biscuit. Halvah cupcake dragée icing. Liquorice cookie topping tootsie roll candy marzipan candy canes. Cotton candy topping donut candy chupa chups.
      Lollipop apple pie bear claw jujubes. Macaroon apple pie pastry cake pudding candy canes lemon drops carrot cake. Cake soufflé jujubes pastry soufflé macaroon.
      Liquorice ice cream ice cream. Dragée sugar plum gummies pie. Dessert bonbon jelly fruitcake chocolate cake chupa chups bear claw cookie croissant.
      Wafer donut soufflé brownie jelly beans. Cake tart marshmallow jelly beans tart sugar plum tart chocolate. Sweet pastry marzipan tiramisu wafer tootsie roll caramels
    `,
  },
];

export default {
  getProducts(cb) {
    setTimeout(() => cb(products), 400);
  },

  buyProducts(products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      // eslint-disable-next-line no-unused-expressions
      Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1 ? cb() : errorCb();
    }, 100);
  },
};
