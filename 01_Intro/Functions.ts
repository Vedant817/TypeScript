function addTwo(num: number) {
    return num + 2;
}
addTwo(5);

function getUpper(val: string) {
    return val.toUpperCase();
}
getUpper("vedant");

function signUp(name: string, email: string, isPaid: boolean) { }
signUp("Vanshay", "v@gmail.com", false);

let loginUser = (name:string, email:string, isPaid:boolean=false)=>{}
loginUser('V','v@x.com')

//? Something Important
function addThree(num:number):number{
    return num+3
    //return 'Hello' //! This can be a problematic situation.
}
let myNum = addThree(7)

const heros = ["Thor", "Spider Man", "Iron Man"]
heros.map((hero): string=>{ //? Allows only string to be returned
    return `Hero is ${hero}`
})

//! If a function never returns a value add the type as never or void ut prefer never.

export { };
