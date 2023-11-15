interface Database{
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(val1: T, val2:U): object{
    return {
        val1,
        val2
    }
}
anotherFunction("Vedant",{connection:"MongoDB", username:"vedant", password:"123"})