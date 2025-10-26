/*MAP= Serve para mapear nosso array */


const list = [
    { name: 'Rodolfo', vip: true },
    { name: 'Rogersson', vip: false },
    { name: 'Sebastian', vip: true },
    { name: 'David', vip: true },
    { name: 'Josué', vip: false },
    { name: 'Rodolfo', vip: true },
    { name: 'Nair', vip: false },
]

const newList = list.map(user => {
    return  {
        name: user.name,
        braceletColor: user.vip ? 'black' : 'green'
    }

    return newUser
})

console.log(newList)