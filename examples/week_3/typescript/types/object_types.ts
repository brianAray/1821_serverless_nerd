// type

type Person = {
    fullName: string;
    age: number;
};

const John: Person = {
    fullName: "John Jones",
    age: 35
}

// Optional properties
type OptionalAgePerson = {
    fullName: string;
    age?: number;
};

const person1: OptionalAgePerson = {
    fullName: "Mike Smith"
};

const person2: OptionalAgePerson = {
    fullName: "Lizz Trust",
    age: 55
}

// readonly keyword
// Make properties read only

type Point = {
    readonly x: number;
    readonly y: number;
};

const origins: Point = {x: 0, y: 0};

// origins.x = 10; // cannot assign to x because it is a read-only property


// Extending Object Types
type Student = Person & {
    isStudent: boolean
}

const studentMike: Student = {
    fullName: "Mike Straw",
    age: 35,
    isStudent: true
}


// Nested Object Types
type Address = {
    street: string;
    city: string;
}

type PersonAddress = Person & {
    address: Address;
}

const mikeAddress: PersonAddress = {
    fullName: "Mike Mon",
    age: 55,
    address: {
        street: "123 Main st",
        city: "Anytown"
    }
}