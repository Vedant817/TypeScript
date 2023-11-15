function getTrueShape(shape) {
    if (shape.kind == "circle") {
        return Math.PI * shape.radius * shape.radius;
    }
    else {
        return shape.side * shape.side;
    }
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius * shape.radius;
            break;
        case "square":
            return shape.side * shape.side;
            break;
        default:
            var _defaultForShape = shape;
            return _defaultForShape;
            break;
    }
}
