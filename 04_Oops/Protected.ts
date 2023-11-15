class User{
    public email: string
    private name: string
    city: string
    protected _courseCount: number = 4 //! Will be accessible only in this class and also in the class which inherits it but outside it won't be accessible.
    constructor(email:string, name: string) {
        this.email = email;
        this.name = name
    }
}

class subUser extends User{
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount=4
    }
}

const vedant = new User("v@vm.com","Vedant")
vedant.city = "Pathankot"

export{}