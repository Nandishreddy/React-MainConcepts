const person ={
    name: 'rakesh',
    city: 'bangalore',
    area: 'market'
}

const {name: firstname,city, state, country='INDIA', area: location='basavanagudi'}=person
console.log(firstname,city, state, country, location)