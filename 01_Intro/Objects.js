"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Vedant",
    email: "vedantmahajan271@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: 'Vedant', isPaid: true });
//! If we want to pass more parameters in the function:
var newUser = { name: 'Vanshay', isPaid: false, email: 'v@v.com' };
createUser(newUser);
function createCourse() {
    return { name: 'TypeScript', price: 399 };
}
