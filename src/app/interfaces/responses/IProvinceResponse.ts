import IProvince from '../entities/IProvince';
import IError from '../entities/IError';

interface IProvinceResponse {
    Provinces : IProvince[],
    Error: IError[]
}

export default IProvinceResponse;