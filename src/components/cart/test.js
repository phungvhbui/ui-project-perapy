const cartList = [
    {
        id: "p1",
        name: "Long Long Long Long Long Product Name",
        quantity: 2,
        price: 2,
    },
    {
        id: "p2",
        name: "Mjornir",
        quantity: 1,
        price: 2,
    },
    {
        id: "p3",
        name: "Zephyr",
        quantity: 2,
        price: 1,
    },
    {
        id: "p4",
        name: "Rick",
        quantity: 2,
        price: 5,
    },
    {
        id: "p5",
        name: "Rolled",
        quantity: 2,
        price: 3,
    },
]

let res = cartList.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price * currentValue.quantity
}, 0)

console.log(res)