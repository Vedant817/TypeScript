//*  Type Aliases are a way to create a new name for a type.They are often used to define complex types, especially when you need to reuse them in multiple places.

type User = {
    name: string,
    email: string,
    isActive: boolean
}
function createUser(user: User):{}{
    return user
}
createUser({name:'Vedant', email:'v@var.com', isActive:false})

export {}