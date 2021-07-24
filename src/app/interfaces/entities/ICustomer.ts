import ICity from './ICity'

interface ICustomer {
    Id : number,
    Code : number,
    Descript : string,
    FantasyName : string,
    Address : string,
    Phone : string,
    Email : string,
    Cuit : string,
    City : ICity
}

export default ICustomer;