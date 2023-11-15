abstract class takePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}
    abstract getSepia(): void //? Not defining it but will be defined further.
}

// const vedant = new takePhoto('Pro','Grayscale') //* Can't create object from the takePhoto class

class Instagram extends takePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }
    getSepia(): void {
        console.log("Sepia");
    }
}