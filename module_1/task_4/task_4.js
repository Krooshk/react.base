"use strict";
// Разработать типизированную систему управления интернет-магазином: главные классы Order (заказ), 
// Product (товар) и Cart (корзина), класс OrderManager для управления заказами и ProductManager для управления товарами,
//  и различные вспомогательные классы и интерфейсы по необходимости. Реализовать методы для просмотра информации о товарах,
//   управления товарами, добавления и удаления товаров из корзины, просмотра текущей корзины, добавления нового заказа,
//    смены статуса заказа, вывода информации о заказах.
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const generateIdOrder = (0, utils_1.generateId)();
const generateIdProduct = (0, utils_1.generateId)();
class Order {
    constructor(products) {
        this.products = products;
        this.id = generateIdOrder.next().value;
        this.status = 'create';
        this.date = new Date();
    }
    showInfo() {
        console.log({
            id: this.id,
            date: this.date,
            status: this.status
        });
    }
}
class Product {
    constructor(name, weight, length) {
        this.name = name;
        this.weight = weight;
        this.length = length;
        this.id = generateIdProduct.next().value;
    }
    ;
    showInfo() {
        console.log({
            name: this.name,
            weight: this.weight,
        });
    }
}
class Cart {
    constructor() {
        this.products = [];
        this.orderManager = new OrderManager(this);
        this.productManager = new ProductManager(this);
    }
    getCurrentCart() {
        return this.products;
    }
    showCurrentCart() {
        this.products.forEach(product => product.showInfo());
    }
}
class OrderManager {
    constructor(ctx) {
        this.ctx = ctx;
        this.orders = [];
    }
    addOrder() {
        const products = this.ctx.getCurrentCart();
        this.orders.push(new Order(products));
        this.ctx.productManager.clear();
    }
    changeStatus(id, status) {
        const requiredOrder = this.orders.find(el => id === el.id);
        if (requiredOrder) {
            requiredOrder.status = status;
        }
    }
    showInfoOrders() {
        console.log(this.orders);
    }
}
class ProductManager {
    constructor(ctx) {
        this.ctx = ctx;
    }
    add(good) {
        this.ctx.products.push(good);
    }
    delete(good) {
        this.ctx.products = this.ctx.products.filter(elem => elem.id !== good.id);
    }
    clear() {
        this.ctx.products = [];
    }
}
const table = new Product('table', 20, 100);
const chair = new Product('chair', 10, 55);
const sofa = new Product('sofa', 40, 200);
const bad = new Product('bad', 15, 180);
const closet = new Product('closet', 25, 35);
const myCart = new Cart();
myCart.productManager.add(table);
myCart.productManager.add(chair);
myCart.showCurrentCart();
myCart.orderManager.addOrder();
// console.log(myCart);
myCart.orderManager.showInfoOrders();
myCart.orderManager.changeStatus(1, 'process');
myCart.orderManager.showInfoOrders();
