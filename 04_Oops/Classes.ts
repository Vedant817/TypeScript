class User{
    public email: string
    private name: string
    city: string //* Automatically Public
    constructor(email:string, name: string) {
        this.email = email;
        this.name = name
    }
}

const vedant = new User("v@vm.com","Vedant")
vedant.city = "Pathankot"
// console.log(vedant.name); //? Not accessible

export{}