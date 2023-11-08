var cr = require("node:crypto");
var AccountTypeEnum;
(function (AccountTypeEnum) {
    AccountTypeEnum["CuentaSueldo"] = "cuenta sueldo";
    AccountTypeEnum["CuentaDolares"] = "cuenta d\u00F3lares";
    AccountTypeEnum["CuentaCorriente"] = "cuenta corriente";
})(AccountTypeEnum || (AccountTypeEnum = {}));
var AccountType = /** @class */ (function () {
    function AccountType(type) {
        this.type = type;
    }
    return AccountType;
}());
var BankAccount = /** @class */ (function () {
    function BankAccount(owner, accountType) {
        this.id = cr.randomUUID();
        this.owner = owner;
        this.accountType = new AccountType(accountType);
        this.balance = 0;
    }
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("".concat(amount, " deposited into ").concat(JSON.stringify(this.accountType), " - ").concat(this.id, " account"));
        }
    };
    BankAccount.prototype.withDraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log("".concat(amount, " withdrawn from ").concat(JSON.stringify(this.accountType), " - ").concat(this.id, " account"));
        }
        else {
            console.log("Insufficient funds in ".concat(JSON.stringify(this.accountType), " - ").concat(this.id, "  account"));
        }
    };
    BankAccount.prototype.getBalance = function () {
        console.log(this.balance);
    };
    return BankAccount;
}());
var savingsAcc01 = new BankAccount("Robertino Masachussets", AccountTypeEnum.CuentaSueldo);
savingsAcc01.deposit(10000);
savingsAcc01.withDraw(300);
savingsAcc01.getBalance();
