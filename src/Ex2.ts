class Invoice {
    private id:number;
    private custommer:string;
    private amount:number


    constructor(id:number, customer:string, amoount:number){
        this.id=id;
        this.custommer=customer;
        this.amount=amoount;
    }
    public getId():number{
        return this.id;
    }
    public getCustomer():string{
        return this.custommer;
    }

    public setCustomer(customer:string):void{
        this.custommer;
    }

    public getAmount():number{
        return this.amount;
    }
    public setAmount(amount:number):void{
        this.amount
    }
        
}
