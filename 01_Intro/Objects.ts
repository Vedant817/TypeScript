const User = {
    name: "Vedant",
    email: "vedantmahajan271@gmail.com",
    isActive: true
}

function createUser({name:string, isPaid:boolean}){}
createUser({name:'Vedant', isPaid:true})

//! If we want to pass more parameters in the function:
let newUser = {name:'Vanshay', isPaid:false, email:'v@v.com'}
createUser(newUser)

function createCourse():{name:string, price:number}{ //? This tells that the object to be returned should b eof the given format.
    return {name:'TypeScript', price:399}
}

export {}