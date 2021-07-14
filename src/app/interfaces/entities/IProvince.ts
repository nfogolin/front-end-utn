import ICountry from "./ICountry"

interface IProvince {
    Id : string,
    Code : string,
    Descript : string,
    Country : ICountry
}

export default IProvince;