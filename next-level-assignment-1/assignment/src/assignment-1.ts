

function formatString(text: string, toUpper?: boolean): string {
    if (toUpper === true) {
      return text.toUpperCase();
    } else {
      return text.toLowerCase();
    }
  }
  

 




function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const result: { title: string; rating: number }[] = [];
  
    for (let i = 0; i < items.length; i++) {
      if (items[i].rating >= 4) {
        result.push(items[i]);
      }
    }
  
    return result;
  }
  
  const books = [
    { title: "Big Fan Vai", rating: 4.5 },
    { title: "Programming is easy", rating: 3.2 },
    { title: "No money ,No honey", rating: 5.0 }
  ];
  
 

  

  function concatenateArrays<T>(...arrays: T[][]): T[]{
    return ([] as T[]).concat(...arrays)
  }
   //console.log (concatenateArrays(["a", "b"], ["c"]));       
  //console.log(concatenateArrays([1, 2], [3, 4], [5]));  



  class Vehical{
    private make:string;
    private year:number;
    constructor(make:string, year:number){
        this.make=make;
        this.year=year;
        
    }
    getInfo(){
        console.log(`make:${this.make} year:${this.year}`)
    }
  }
  class Car extends Vehical{
    private model:string;
    constructor(make:string, year:number,model:string){
        super(make,year)
        this.model=model
    }
    getModel(){
        console.log(`model:${this.model}`)
    }
  }
  const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();   
myCar.getModel();  




function processValue(value: number|string):number{
    if(typeof value==="string"){
        return value.length

    }else{
        return value*2
    }
}








interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if(products.length===0){
    return null
  }
  let expensiveProduct=products[0];

  for(const product of products ){
    if(product.price>expensiveProduct.price){
      expensiveProduct=product;

    }
  }
  return expensiveProduct;

}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 }
];






enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string{
  switch(day){
    case Day.Saturday: case Day.Sunday:
    return "weekend"

    default:
      return "weekday"
  }
}

//console.log(getDayType(Day.Monday));  
//console.log(getDayType(Day.Sunday)); 




async function squareAsync(n: number): Promise<number> {
  return new Promise((squarenum, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number dawya jaby na"));
      } else {
        squarenum(n * n);
      }
    }, 1000);
  });
}


