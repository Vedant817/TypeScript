type User = {
    readonly _id: string, //? Used to avoid any manipulations in the field.
    name: string,
    email: string,
    isActive: boolean,
    creditCardDetail?: number //! ? means that the field is optional.
}

let myUser:User = {
    _id: "12345",
    name: 'Vedant',
    email: "v@v.com",
    isActive: true
}
myUser.email = 'vedant@vedant.com'
// myUser._id = '97979' //? Not allowed
export {}