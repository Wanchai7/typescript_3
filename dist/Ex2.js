"use strict";
class Invoice {
    constructor(id, customer, amoount) {
        this.id = id;
        this.custommer = customer;
        this.amount = amoount;
    }
    getId() {
        return this.id;
    }
    getCustomer() {
        return this.custommer;
    }
    setCustomer(customer) {
        this.custommer;
    }
    getAmount() {
        return this.amount;
    }
    setAmount(amount) {
        this.amount;
    }
}
