"use strict";
// Разработать типизированную систему упрвления банковскими счетами, 
// где каждый счет может быть дебетовым или кредитным с различными условиями обслуживания. 
// В системе должны быть: интерфейс Account, который описывает общие свойства банковского счета,
//  и классы DebitAccount и CreditAccount, которые отвечают за функциональность разных типов счетов. 
//  Реализовать операции пополнения и снятия средств, проверки баланса и текущего долга.
class DebitAccount {
    constructor(balance) {
        this.balance = balance;
    }
    add(amount) {
        this.balance += amount;
    }
    get(amount) {
        if (amount > this.balance) {
            return;
        }
        this.balance -= amount;
    }
    checkBalance() {
        console.log(`balance - ${this.balance}`);
    }
}
class CreditAccount {
    constructor(balance, limit) {
        this.balance = balance;
        this.limit = limit;
        this.debt = 0;
    }
    add(amount) {
        if (this.debt > 0) {
            const difference = amount - this.debt;
            let amountForBalance = difference >= 0 ? difference : 0;
            let amountForDebt = difference >= 0 ? this.debt : amount;
            this.debt -= amountForDebt;
            this.balance += amountForBalance;
        }
        else {
            this.balance += amount;
        }
    }
    get(amount) {
        if (this.limit <= amount + this.debt) {
            return;
        }
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            const remainPart = amount - this.balance;
            this.debt += remainPart;
        }
    }
    checkBalance() {
        console.log(`balance - ${this.balance}`);
    }
    getCurrentDebt() {
        console.log(`debt - ${this.debt}`);
    }
}
const debitForIvan = new DebitAccount(50000);
// debitForIvan.checkBalance();
// debitForIvan.add(20_000);
// debitForIvan.get(40_000);
// debitForIvan.checkBalance();
const creditForIgor = new CreditAccount(0, 100000);
creditForIgor.checkBalance();
creditForIgor.get(20000);
creditForIgor.add(10000);
creditForIgor.getCurrentDebt();
creditForIgor.checkBalance();
creditForIgor.add(40000);
creditForIgor.getCurrentDebt();
creditForIgor.checkBalance();
creditForIgor.get(200000);
creditForIgor.getCurrentDebt();
