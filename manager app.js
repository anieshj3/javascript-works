var contact1 = {
    name: "Kohli",
    phone: "9876543210",
    email: "kohli@gmail.com",

    getInfo: function () {
        return "Name: " + this.name +
               ", Phone: " + this.phone +
               ", Email: " + this.email;
    }
};

function printContactInfo(contact) {
    console.log(contact.getInfo());
}
var contact2 = {
    name: "Rajat",
    phone: "9123456780",
    email: "rajat@gmail.com",

    getInfo: function () {
        return "Name: " + this.name +
               ", Phone: " + this.phone +
               ", Email: " + this.email;
    }
};

printContactInfo(contact1);
printContactInfo(contact2);
   