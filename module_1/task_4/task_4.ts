// Разработать типизированную систему управления интернет-магазином: главные классы Order (заказ), 
// Product (товар) и Cart (корзина), класс OrderManager для управления заказами и ProductManager для управления товарами,
//  и различные вспомогательные классы и интерфейсы по необходимости. Реализовать методы для просмотра информации о товарах,
//   управления товарами, добавления и удаления товаров из корзины, просмотра текущей корзины, добавления нового заказа,
//    смены статуса заказа, вывода информации о заказах.

type Status = 'create' | 'process' | 'finished';

interface Order {
    id: number;
    date: Date;
    status: Status;
    products: Product[];
}

interface Product {
    id: number;
    name: string;
    weight: number;
    length: number;
    showInfo: () => void;
}

interface Cart {
    products: Product[];
    orderManager: OrderManager;
    productManager: ProductManager;
}

class Order implements Order {
    id: number;
    date: Date;
    status: Status;
    products: Product[];

    constructor(products: Product[]){
        this.products = products;
        this.id = 3235; // Todo сделать генератор uid
        this.status = 'create';
        this.date = new Date();
    }
} 

class Product implements Product {
    name: string;
    weight: number;

    constructor(name: string, weight: number, length: number){
        this.name = name;
        this.weight = weight;
        this.length = length;
    };

    showInfo() {
        console.log()
    }
}

class Cart {
    products: Product[];
    orders: Order[];
    orderManager: OrderManager;
    productManager: ProductManager;

    constructor(){
        this.products = [];
        this.orders = []
        this.orderManager = new OrderManager(this);
        this.productManager = new ProductManager(this);
    }

    getCurrentCart(){

    }
    
}

class OrderManager {
    ctx: Cart;

    constructor(ctx: Cart){
        this.ctx = ctx;
    }

    addOrder(){
        
    }

    changeStatus(){

   }

   showInfo(){

   }
    
}

class ProductManager {
    ctx: Cart;

    constructor(ctx: Cart){
        this.ctx = ctx;
    }

    add(good: Product){
        this.ctx.products.push(good);
    }

    delete(good: Product){
        this.ctx.products = this.ctx.products.filter(elem => elem.id !== good.id);
    }
    
}