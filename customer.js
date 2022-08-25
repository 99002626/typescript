var Customer = /** @class */ (function () {
    function Customer(str) {
        this.str = "";
        this.details = [];
        this.details = str.split(",");
    }
    Customer.prototype.display = function () {
        console.log("Name:", this.details[0]);
        console.log("Address:", this.details[1]);
        console.log("Mobile Number:", this.details[2]);
    };
    return Customer;
}());
var c = new Customer("Nithya,Mysore,91******42");
c.display();
