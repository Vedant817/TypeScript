function detectTypes(val: number | string){
    if (typeof val === "string" ) {
        return val.toLowerCase()
    }
    return val+3
}

function provideId(id: string | null){
    if(!id){
        console.log("Please Provide the Id");
        return
    }
    else{
        id.toLowerCase()
    }
}

function logValue(x: Date | string){ //? Can only be sued where new keyword is used.
    if(x instanceof Date){
        console.log(x.toUTCString());
    }
    else{
        console.log(x.toUpperCase());
    }
}

type fish = {swim: ()=> void}
type bird = {fly: ()=> void}

function isFish(pet: fish | bird): pet is fish{
    return (pet as fish).swim !== undefined
}

export {}