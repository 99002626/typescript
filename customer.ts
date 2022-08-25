class Customer {
  str = "";
  details = [];
  constructor(str) {
    this.details = str.split(",");
  }
  display() {
    console.log("Name:", this.details[0]);
    console.log("Address:", this.details[1]);
    console.log("Mobile Number:", this.details[2]);
  }
}
let c = new Customer("Nithya,Mysore,91******42");
c.display();
