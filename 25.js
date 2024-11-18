// Create a prototypefor a product object with properties like name, quantity, price.
// Add a method to the product prototype to calculate the total value

function Product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

const product1 = new Product("Widget", 100, 5);
console.log(Product.prototype); //It returns an empty object
console.log(product1);

//=================
Product.prototype.calculateValue = function () {
  return this.price * this.quantity;
};
console.log(product1.calculateValue());
