const score:Array<number> = [10,20,30]
const names:Array<string> = []

function identityOne(val: number | boolean): number | boolean{
    return val
}

function identity<Type>(val: Type): Type{ //? All type will have same data type.
    return val
}

function getSearchProduct<T,>(product: T[]):T{ //! This means that value being taken as input is the Array of type T and return value will be a value of type T.
    return product[3]
}
const val = getSearchProduct(score)
