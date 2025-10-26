/*const list = [20,3,234,12,17,541,6,87,275,1000]

const newList = list.filter(number =>{
    if (number<100 && number % 2 ===0){
        return true
    }
    else {
        return false
    }
})

console.log(newList)*/

const add10Percente = (company) => {
    company.marketValue = company.marketValue + (company.marketValue / 10)

    return company
}

const filterCompanies = (company) =>company.fundedOn <1990

const calculateTotalMarketValue = (acc, company) => acc + company.marketValue



const companies = [
    { name: 'Sansung', marketValue: 50, CEO: 'Kim Hyun suk', fundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Stya Nadella', fundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', fundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', fundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', fundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', fundedOn: 1976 }
];

const marketValueOldCompanies = companies
.map(add10Percente)
.filter (filterCompanies)
.reduce (calculateTotalMarketValue, 0)

console.log(marketValueOldCompanies)