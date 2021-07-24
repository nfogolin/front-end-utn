import ICountry from '../entities/ICountry'
import IError from '../entities/IError';

interface ICountryResponse {
    Countries : ICountry[],
    Error: IError[]
}

export default ICountryResponse;