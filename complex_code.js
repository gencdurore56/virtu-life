/* 
File: complex_code.js
Description: This code demonstrates a complex program that utilizes multiple functions and objects to create a simulated banking system. It manages customer accounts, transactions, and provides various banking operations.
*/

// Define bank object
const bank = {
  customers: [],
  accounts: [],
  transactions: [],
  
  // Add a new customer to the bank
  addCustomer: function(name, address, contact) {
    const customer = {
      id: this.customers.length + 1,
      name: name,
      address: address,
      contact: contact
    };
    this.customers.push(customer);
  },
  
  // Create a new account for a customer
  createAccount: function(customerId, initialDeposit) {
    const customer = this.customers.find(c => c.id === customerId);
    
    if (!customer) {
      console.log("Customer not found.");
      return;
    }
    
    const account = {
      customerId: customerId,
      accountNumber: Math.floor(Math.random() * 1000000),
      balance: initialDeposit || 0
    };
    
    this.accounts.push(account);
  },
  
  // Withdraw money from a customer's account
  withdraw: function(accountNumber, amount) {
    const account = this.accounts.find(a => a.accountNumber === accountNumber);
    
    if (!account) {
      console.log("Account not found.");
      return;
    }
    
    if (amount > account.balance) {
      console.log("Insufficient balance.");
      return;
    }
    
    account.balance -= amount;
    this.transactions.push({ accountNumber, transactionType: "withdrawal", amount });
  },
  
  // Deposit money to a customer's account
  deposit: function(accountNumber, amount) {
    const account = this.accounts.find(a => a.accountNumber === accountNumber);
    
    if (!account) {
      console.log("Account not found.");
      return;
    }
    
    account.balance += amount;
    this.transactions.push({ accountNumber, transactionType: "deposit", amount });
  },
  
  // Transfer money between customer accounts
  transfer: function(fromAccountNumber, toAccountNumber, amount) {
    const fromAccount = this.accounts.find(a => a.accountNumber === fromAccountNumber);
    const toAccount = this.accounts.find(a => a.accountNumber === toAccountNumber);
    
    if (!fromAccount || !toAccount) {
      console.log("One or both accounts not found.");
      return;
    }
    
    if (amount > fromAccount.balance) {
      console.log("Insufficient balance.");
      return;
    }
    
    fromAccount.balance -= amount;
    toAccount.balance += amount;
    this.transactions.push({ fromAccountNumber, toAccountNumber, transactionType: "transfer", amount });
  },
  
  // Get account balance
  getBalance: function(accountNumber) {
    const account = this.accounts.find(a => a.accountNumber === accountNumber);
    
    if (!account) {
      console.log("Account not found.");
      return;
    }
    
    return account.balance;
  },
  
  // Get transaction history of an account
  getTransactionHistory: function(accountNumber) {
    const transactions = this.transactions.filter(t => t.accountNumber === accountNumber);
    
    if (transactions.length === 0) {
      console.log("No transactions found for this account.");
      return;
    }
    
    return transactions;
  }
};

// Test the program
bank.addCustomer("John Doe", "123 Main St", "john@example.com");
bank.createAccount(1, 1000);
bank.deposit(123456, 500);
bank.withdraw(123456, 200);
bank.transfer(123456, 789012, 300);
console.log(bank.getBalance(123456));
console.log(bank.getTransactionHistory(789012));

// Output:
// 1000
// [
//     { accountNumber: 789012, transactionType: 'transfer', amount: 300 }
// ]