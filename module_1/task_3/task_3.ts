interface Account {
    balance: number;
    add: (amount: number) => void;
    get: (amount: number) => void;
    checkBalance: () => void;
}

class DebitAccount implements Account {
    balance: number;

    constructor(balance: number){
        this.balance = balance;
    }

    add(amount: number){
        this.balance += amount;
    }

    get(amount: number) {
        if (amount > this.balance) {
            return;
        }
        this.balance -= amount;
    }

    checkBalance() {
        console.log(`balance - ${this.balance}`);
    }
}

class CreditAccount implements Account {
    balance: number;
    limit: number;
    debt: number;

    constructor(balance: number, limit: number){
        this.balance = balance;
        this.limit = limit;
        this.debt = 0;
    }

    add(amount: number){ 
        if (this.debt > 0) {
            const difference = amount - this.debt;
            let amountForBalance = difference >= 0 ? difference: 0;
            let amountForDebt = difference >= 0 ? this.debt: amount;
            this.debt -= amountForDebt;
            this.balance += amountForBalance;
        } else {
            this.balance += amount;
        }
    }

    get(amount: number){
        if (this.limit <= amount + this.debt) {
            return;
        }
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            const remainPart = amount - this.balance;
            this.debt += remainPart
        }
    }

    checkBalance(){
        console.log(`balance - ${this.balance}`);
    }

    getCurrentDebt(){
        console.log(`debt - ${this.debt}`);
    }
}

const debitForIvan = new DebitAccount(50_000);

debitForIvan.checkBalance();
debitForIvan.add(20_000);
debitForIvan.get(40_000);
debitForIvan.checkBalance();

const creditForIgor = new CreditAccount(0, 100_000);

creditForIgor.checkBalance()
creditForIgor.get(20_000);
creditForIgor.add(10_000);
creditForIgor.getCurrentDebt();
creditForIgor.checkBalance()
creditForIgor.add(40_000);
creditForIgor.getCurrentDebt();
creditForIgor.checkBalance()
creditForIgor.get(200_000);
creditForIgor.getCurrentDebt();