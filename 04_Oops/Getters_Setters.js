"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(email, name) {
        this.city = "Pathankot";
        this.email = email;
        this.name = name;
    }
    Object.defineProperty(User.prototype, "getAppleEmail", {
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var vedant = new User("v@vm.com", "Vedant");
var AppleEmail = vedant.getAppleEmail;
console.log(AppleEmail);
