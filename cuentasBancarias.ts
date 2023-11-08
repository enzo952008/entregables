const cr = require ("node:crypto");

enum AccountTypeEnum {
  CuentaSueldo = "cuenta sueldo",
  CuentaDolares = "cuenta dólares",
  CuentaCorriente = "cuenta corriente",
}

class AccountType {
  private type: AccountTypeEnum;
  public constructor(type: AccountTypeEnum) {
    this.type = type;
  }
}

class BankAccount {
  private id: string;
  private owner: string;
  private balance: number;
  private accountType: AccountType;
  public constructor(owner: string, accountType: AccountTypeEnum) {
    this.id = cr.randomUUID();
    this.owner = owner;
    this.accountType = new AccountType(accountType);
    this.balance = 0;
  }
  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(
        `${amount} deposited into ${JSON.stringify(this.accountType)} - ${
          this.id
        } account`
      );
    }
  }
  withDraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(
        `${amount} withdrawn from ${JSON.stringify(this.accountType)} - ${
          this.id
        } account`
      );
    } else {
      console.log(
        `Insufficient funds in ${JSON.stringify(this.accountType)} - ${
          this.id
        }  account`
      );
    }
  }
  getBalance(): void {
    console.log(this.balance);
  }
}

const savingsAcc01 = new BankAccount(
  "Robertino Masachussets",
  AccountTypeEnum.CuentaSueldo
);

savingsAcc01.deposit(10000);
savingsAcc01.withDraw(300);
savingsAcc01.getBalance();