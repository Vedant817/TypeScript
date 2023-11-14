let score: number | string = 33
score = "55"

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let vedant : User | Admin = {name:'Vedant', id:31}
//? To perform some operations, we need to first verify the type of the data and then will apply the operations.

const array: string[] | number[] = ["1", "2", "3"] //* If all numbers or all strings
const arr: (string | number) [] = ["Vedant",31,19, "Loki"] //* This allows to have values with both string and numbers.

//! Fixing the value in a variable
const pi:3.14 = 3.14
// pi= 3

export {}