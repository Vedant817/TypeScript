interface Circle{
    kind: "circle",
    radius: number
}

interface Square{
    kind: "square",
    side: number
}

interface Rectangle{
    kind: "Rectangle",
    length: number,
    breadth: number
}

type Shape = Circle | Square //? Type shape with values of just Circle or Square

function getTrueShape(shape: Shape){
    if(shape.kind == "circle"){
        return Math.PI * shape.radius * shape.radius
    }
    else{
        return shape.side * shape.side
    }
}

function getArea(shape: Shape){
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius * shape.radius
            break;
        case "square":
            return shape.side * shape.side
            break;
        default:
            const _defaultForShape: never = shape
            return _defaultForShape
            break;
    }
}