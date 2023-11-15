class User{
    email: string
    name: string
    readonly city: string = "Pathankot"
    constructor(email:string, name: string) {
        this.email = email;
        this.name = name
    }
    get getAppleEmail():string{
        return `apple${this.email}`
    }
    //! Setters are defined using keyword set.
}

const vedant = new User("v@vm.com","Vedant")
const AppleEmail: string = vedant.getAppleEmail;
console.log(AppleEmail);

export{}