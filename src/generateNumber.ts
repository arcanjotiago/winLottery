export class GenerateNumber{
    constructor(quantity:number){
        this.quantity = quantity;
    }
    quantity:number;

    genListNumbers(){
        let listNumbers:number[] = [];

        while (listNumbers.length < this.quantity){
            let drawNumber = this.getNumber();

            if (listNumbers.includes(drawNumber) === false){
                listNumbers.push(drawNumber);
            }
        }
        return listNumbers;
    }
    
    getNumber(){
        const min = 1;
        const max = 60;
        let randomNumber = (Math.floor(Math.random() * (max - min + 1) + min));
        
        return randomNumber
    }
}
