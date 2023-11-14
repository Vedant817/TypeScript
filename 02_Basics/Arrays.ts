const superHeros: string[] = []
// superHeros.push("spiderman") //? Argument of type 'string' is not assignable to parameter of type 'never'.
superHeros.push("spiderman")

type User = {
    name: string,
    isActive: boolean
}

const allUsers : User[] = []
allUsers.push({name: 'Vedant', isActive:false})

export {}