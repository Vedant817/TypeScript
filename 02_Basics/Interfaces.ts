//? Types and Interfaces are different with each other because Types can't be extend and manipulated if needed but Interfaces can be done so.
interface User {
    email: string;
    userId: number;
    googleId?: string;
    startTrail: () => string;
}
//? We can add more properties to the interface by just declaring it as normal and writing the properties to be added.
interface User {
    githubToken: string
}
interface Admin extends User{
    role: "Admin" | "ta" | "learner"
}
const vedant: User = {
    email: "v@v.com",
    userId: 31,
    startTrail: () => {
        return "Trail Started";
    },
    githubToken: "Pro User"
};

const Vd: Admin = {
    email: "v@v.com",
    userId: 31,
    startTrail: () => {
        return "Trail Started";
    },
    githubToken: "Pro User",
    role: "Admin"
};

export{}