export const people = [
    {
        id:1,
        name:"Koo",
        age:26,
        gender:"man"
    },
    {
        id:2,
        name:"GIR",
        age:24,
        gender:"man"
    },
    {
        id:3,
        name:"QIWE",
        age:18,
        gender:"woman"
    },
    {
        id:4,
        name:"Muji",
        age:24,
        gender:"man"
    },
    {
        id:5,
        name:"Li",
        age:20,
        gender:"woman"
    },
    {
        id:6,
        name:"Koo",
        age:26,
        gender:"man"
    },
]

export const getById = id => {
    const filterId = people.filter(person => person.id === id)
    return filterId[0];
} 