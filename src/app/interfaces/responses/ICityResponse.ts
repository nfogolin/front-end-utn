import ICity from '../entities/ICity';
import IError from '../entities/IError';

interface ICityResponse {
    Cities : ICity[],
    Error: IError[]
}

export default ICityResponse;