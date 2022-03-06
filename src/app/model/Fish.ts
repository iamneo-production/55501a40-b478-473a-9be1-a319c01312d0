export class Fish{
    name!:string;
    image!:string;
    price!:number;
    description!:string;
    constructor(name:string,image:string,price:number,description:string){
        this.name = name;
        this.image = image;
        this.price = price;
        this.description = description;
    }
}