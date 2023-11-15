var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
    }
    return User;
}());
var vedant = new User("v@vm.com", "Vedant");
vedant.city = "Pathankot";
// console.log(vedant.name); //? Not accessible
